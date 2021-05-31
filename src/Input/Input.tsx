import React, { InputHTMLAttributes, ElementType, Ref, ReactNode } from 'react';
import isNumber from 'is-number';

import { InputContainer } from './InputContainer';
import { Icon } from '../Icon/Icon';
import {
  getTag,
  getFormControlClass,
  getClasses,
  getInfoTextControlClass
} from './utils';
import type { CSSModule } from 'reactstrap';
import { notifyDeprecation } from '../utils';
// taken from reactstrap types
type InputType =
  | 'text'
  | 'email'
  | 'select'
  | 'file'
  | 'radio'
  | 'checkbox'
  | 'textarea'
  | 'button'
  | 'reset'
  | 'submit'
  | 'date'
  | 'datetime-local'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'range'
  | 'search'
  | 'tel'
  | 'url'
  | 'week'
  | 'password'
  | 'datetime'
  | 'time'
  | 'color';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Il tipo specifico di input da utilizzare. Il valore di default è `text`. */
  type?: InputType;
  /** Dimensione personalizzate del campo di Input secondo le classi Bootstrap/Bootstrap Italia. */
  bsSize?: 'lg' | 'sm';
  size?: number;
  /** Etichetta del campo Input. */
  label?: string | ReactNode;
  /** Testo di esempio da utilizzare per il campo. */
  placeholder?: string;
  /** Testo di aiuto per l'elemento del moduleo form. Richiede che il componente `Input` abbia la prop `id` impostata. */
  infoText?: string;
  /** Il valore nel campo Input. */
  value?: string | number;
  /** Da utilizzare per impedire la modifica del valore contenuto. */
  readOnly?: boolean;
  /** Associato all'attributo readOnly mostra il campo con lo stile classico, mantenento lo stato di sola lettura. */
  normalized?: boolean;
  /** Utilizzare per mostrare il successo nella validazione del valore nel campo Input */
  valid?: boolean;
  /** Utilizzare per mostrare il fallimento nella validazione del valore nel campo Input */
  invalid?: boolean;
  innerRef?: Ref<HTMLInputElement>;
  /** Utilizzare per mostrare testo statico non modificabile. */
  plaintext?: boolean;
  /** Utilizzare per mostrare un elemento addon a fianco (prima o dopo) il campo input all'interno del componente */
  addon?: boolean;
  /** Oggetto contenente la nuova mappatura per le classi CSS. */
  cssModule?: CSSModule;
  /** Classi aggiuntive da usare per il wrapper del componente Input */
  wrapperClassName?: string;
  /**
   * Classi aggiuntive da usare per il wrapper del componente Input.
   * @deprecated. Usare `wrapperClassName`.
   * */
  wrapperClass?: string;
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente Input */
  className?: string;
  /**
   * Usare "valid" o "invalid" per indicare lo stato del componente.
   * @deprecated
   */
  state?: string;
  /**
   * Usare "plaintext".
   * @deprecated
   */
  static?: boolean;
}

type InputState = { isFocused: boolean; hidden: boolean; icon: boolean };

export class Input extends React.Component<InputProps, InputState> {
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
      type,
      state,
      tag,
      addon,
      static: staticInput,
      plaintext,
      innerRef,
      label,
      infoText,
      placeholder,
      normalized,
      value,
      wrapperClass: originalWrapperClassOld,
      wrapperClassName: originalWrapperClass,
      size,
      ...attributes
    } = this.props;
    let { bsSize, valid, invalid } = this.props;

    const Tag = getTag({ tag, plaintext, staticInput, type });
    const formControlClass = getFormControlClass(
      {
        plaintext,
        staticInput,
        type,
        addon
      },
      cssModule
    );
    const infoTextControlClass = getInfoTextControlClass(
      { valid, invalid },
      cssModule
    );

    if (state && valid == null && invalid == null) {
      invalid = state === 'danger';
      valid = state === 'success';
    }

    const extraAttributes: {
      type?: InputType;
      size?: number;
      ['aria-describedby']?: string;
    } = {};
    if (size && !isNumber(size)) {
      notifyDeprecation(
        'Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'
      );
      bsSize = (size as unknown) as InputProps['bsSize'];
    } else {
      extraAttributes.size = size;
    }

    if (Tag === 'input' || typeof tag !== 'string') {
      extraAttributes.type = type;
    }

    // associate the input field with the help text
    const infoId = id ? `${id}Description` : undefined;
    if (id) {
      extraAttributes['aria-describedby'] = infoId;
    }

    if (
      attributes.children &&
      !(
        plaintext ||
        staticInput ||
        type === 'select' ||
        typeof Tag !== 'string' ||
        Tag === 'select'
      )
    ) {
      notifyDeprecation(
        `Input with a type of "${type}" cannot have children. Please use "value"/"defaultValue" instead.`
      );
      delete attributes.children;
    }

    const inputPassword = extraAttributes.type === 'password';

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
        bsSize,
        placeholder,
        value,
        label,
        infoText,
        normalized: Boolean(normalized),
        inputPassword,
        formControlClass,
        infoTextControlClass,
        isFocused: this.state.isFocused,
        originalWrapperClass: originalWrapperClass || originalWrapperClassOld
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
          <Tag
            {...attributes}
            {...extraAttributes}
            {...sharedAttributes}
            className={inputClasses}
            placeholder={placeholder}
          />
        </InputContainer>
      );
    }

    if (inputPassword) {
      return (
        <InputContainer {...containerProps}>
          <Tag
            {...attributes}
            {...extraAttributes}
            {...sharedAttributes}
            type={this.state.hidden ? 'password' : 'text'}
            className={inputClasses}
            placeholder={placeholder}
          />
          <span className='password-icon' aria-hidden='true'>
            <Icon
              size='sm'
              icon={`it-password-${this.state.icon ? 'visible' : 'invisible'}`}
              className='password-icon-visible'
              onClick={this.toggleShow}
            />
          </span>
        </InputContainer>
      );
    }
    if (normalized) {
      return (
        <InputContainer {...containerProps}>
          <Tag
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
          <Tag
            {...attributes}
            {...extraAttributes}
            {...sharedAttributes}
            className={inputClasses}
          />
        </InputContainer>
      );
    }

    return (
      <Tag
        {...attributes}
        {...extraAttributes}
        ref={innerRef}
        className={inputClasses}
        {...sharedAttributes}
      />
    );
  }
}
