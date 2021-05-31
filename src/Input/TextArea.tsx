import React, { Ref, ReactNode, TextareaHTMLAttributes } from 'react';

import { InputContainer } from './InputContainer';
import { getClasses, getInfoTextControlClass } from './utils';
import type { CSSModule } from 'reactstrap';

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Etichetta del campo TextArea. */
  label?: string | ReactNode;
  /** Testo di esempio da utilizzare per il campo. */
  placeholder?: string;
  /** Testo di aiuto per l'elemento del moduleo form. Richiede che il componente `TextArea` abbia la prop `id` impostata. */
  infoText?: string;
  /** Il valore nel campo TextArea. */
  value?: string | number;
  /** Da utilizzare per impedire la modifica del valore contenuto. */
  readOnly?: boolean;
  /** Associato all'attributo readOnly mostra il campo con lo stile classico, mantenento lo stato di sola lettura. */
  normalized?: boolean;
  /** Utilizzare per mostrare il successo nella validazione del valore nel campo TextArea */
  valid?: boolean;
  /** Utilizzare per mostrare il fallimento nella validazione del valore nel campo TextArea */
  invalid?: boolean;
  innerRef?: Ref<HTMLTextAreaElement>;
  /** Oggetto contenente la nuova mappatura per le classi CSS. */
  cssModule?: CSSModule;
  /** Classi aggiuntive da usare per il wrapper del componente TextArea */
  wrapperClassName?: string;
  /** Classi aggiuntive da usare per il componente TextArea */
  className?: string;
}

type InputState = { isFocused: boolean; hidden: boolean; icon: boolean };

export class TextArea extends React.Component<TextAreaProps, InputState> {
  state = {
    isFocused: false,
    hidden: true,
    icon: true
  };

  toggleFocusLabel = () => {
    this.setState({
      isFocused: true
    });
  };

  toggleBlurLabel = (e: { target: { value: string } }) => {
    if (e.target.value === '') {
      this.setState({
        isFocused: !this.state.isFocused
      });
    }
  };

  toggleShow = () => {
    this.setState({ hidden: !this.state.hidden, icon: !this.state.icon });
  };

  render() {
    const {
      id,
      className,
      cssModule,
      innerRef,
      label,
      infoText,
      placeholder,
      normalized,
      value,
      wrapperClassName: originalWrapperClass,
      valid,
      invalid,
      ...attributes
    } = this.props;

    const infoTextControlClass = getInfoTextControlClass(
      { valid, invalid },
      cssModule
    );

    const extraAttributes: { ['aria-describedby']?: string } = {};

    // associate the input field with the help text
    const infoId = id ? `${id}Description` : undefined;
    if (id) {
      extraAttributes['aria-describedby'] = infoId;
    }

    // Styling
    const {
      activeClass,
      infoTextClass,
      inputClasses,
      wrapperClass
    } = getClasses(
      className,
      {
        valid,
        invalid,
        placeholder,
        value,
        label,
        infoText,
        normalized: Boolean(normalized),
        infoTextControlClass,
        isFocused: this.state.isFocused,
        originalWrapperClass
      },
      cssModule
    );

    // set of attributes always shared by the Input components
    const sharedAttributes = {
      id,
      onFocus: this.toggleFocusLabel,
      onBlur: this.toggleBlurLabel,
      value: value,
      ref: innerRef
    };

    // set of attributes always shared by the wrapper component
    const containerProps = {
      id,
      infoId,
      activeClass,
      label,
      infoTextClass,
      infoText,
      wrapperClass
    };

    if (placeholder) {
      return (
        <InputContainer {...containerProps}>
          <textarea
            {...attributes}
            {...extraAttributes}
            {...sharedAttributes}
            className={inputClasses}
            placeholder={placeholder}
          />
        </InputContainer>
      );
    }

    if (normalized) {
      return (
        <InputContainer {...containerProps}>
          <textarea
            {...attributes}
            {...extraAttributes}
            {...sharedAttributes}
            className={inputClasses}
            readOnly
          />
        </InputContainer>
      );
    }
    if (label || infoText) {
      return (
        <InputContainer {...containerProps}>
          <textarea
            {...attributes}
            {...extraAttributes}
            {...sharedAttributes}
            className={inputClasses}
          />
        </InputContainer>
      );
    }

    return (
      <textarea
        {...attributes}
        {...extraAttributes}
        ref={innerRef}
        className={inputClasses}
        {...sharedAttributes}
      />
    );
  }
}
