/* eslint jsx-a11y/anchor-is-valid: 0 */
import React, { useState, useCallback } from 'react';
import { actions } from '@storybook/addon-actions';

import { components } from 'react-select';
import AsyncSelect from 'react-select/async';

import { multiOptions } from './Autocomplete/AutocompleteExample';

import { Input, Icon, TextArea, FormGroup } from '../../src';

export default {
  title: 'Componenti/Form/Input'
};

export const EsempiDiCampiDiInput = () => (
  <div>
    <Input type='text' label='Campo di tipo testuale' id='exampleInputText' />
    <Input type='email' label='Campo di tipo email' id='exampleInputEmail' />
    <Input
      type='number'
      label='Campo di tipo numerico'
      id='exampleInputNumber'
    />
    <Input type='tel' label='Campo di tipo telefono' id='exampleInputTel' />
    <Input
      type='time'
      label='Campo di tipo ora'
      id='exampleInputTime'
      min='9:00'
      max='18:00'
    />
  </div>
);

EsempiDiCampiDiInput.story = {
  name: 'Esempi di campi di input'
};

export const UtilizzoDiPlaceholderELabel = () => (
  <div>
    <Input label='Etichetta di esempio' id='exampleLabel' />
    <Input
      label='Etichetta di esempio'
      type='text'
      placeholder='Testo di esempio'
      id='examplePlaceholder'
    />
    <Input
      label='Etichetta di esempio'
      type='text'
      placeholder='Testo di esempio'
      infoText='Ulteriore testo informativo'
      id='exampleinfoText'
    />
  </div>
);

UtilizzoDiPlaceholderELabel.story = {
  name: 'Utilizzo di placeholder e label'
};

export const InputConIconaOBottoni = () => {
  const [isFocused, toggleFocus] = useState(false);

  const toggleFocusLabel = () => toggleFocus(true);
  const toggleBlurLabel = (e) => {
    if (e.target.value === '') {
      toggleFocus(!isFocused);
    }
  };
  return (
    <div>
      <div className='form-group'>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <div className='input-group-text'>
              <Icon icon='it-pencil' aria-hidden size='sm' />
            </div>
          </div>
          <label htmlFor='input-group-1' className={isFocused ? 'active' : ''}>
            Con Etichetta
          </label>
          <input
            type='text'
            className={isFocused ? 'form-control focus--mouse' : 'form-control'}
            onFocus={toggleFocusLabel}
            onBlur={toggleBlurLabel}
            id='input-group-1'
            name='input-group-1'
          />
          <div className='input-group-append'>
            <button className='btn' type='button' id='button-1'>
              Invio
            </button>
          </div>
        </div>
      </div>
      <div className='form-group'>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <div className='input-group-text'>
              <Icon icon='it-pencil' color='danger' aria-hidden size='sm' />
            </div>
          </div>
          <label htmlFor='input-group-2' className='active'>
            Con Etichetta e placeholder
          </label>
          <input
            type='text'
            className={isFocused ? 'form-control focus--mouse' : 'form-control'}
            onFocus={toggleFocusLabel}
            onBlur={toggleBlurLabel}
            id='input-group-2'
            name='input-group-2'
            placeholder='Lorem Ipsum'
          />
          <div className='input-group-append'>
            <button className='btn' type='button' id='button-2'>
              Invio
            </button>
          </div>
        </div>
      </div>
      <div className='form-group'>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <div className='input-group-text'>
              <Icon icon='it-pencil' color='primary' aria-hidden size='sm' />
            </div>
          </div>
          <label htmlFor='input-group-3' className={isFocused ? 'active' : ''}>
            Con Etichetta e bottone di tipo primary
          </label>
          <input
            type='text'
            className={isFocused ? 'form-control focus--mouse' : 'form-control'}
            onFocus={toggleFocusLabel}
            onBlur={toggleBlurLabel}
            id='input-group-3'
            name='input-group-3'
          />
          <div className='input-group-append'>
            <button className='btn btn-primary' type='button' id='button-3'>
              Invio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

InputConIconaOBottoni.story = {
  name: 'Input con icona o bottoni'
};

export const InputPassword = () => (
  <Input
    type='password'
    id='exampleInputPassword'
    label='Password con label, placeholder e testo di aiuto'
    infoText='Inserisci almeno 8 caratteri e una lettera maiuscola'
  />
);

InputPassword.story = {
  name: 'Input password'
};

export const _Disabilitato = () => (
  <Input label='Contenuto disabilitato' id='exampleDisabled' disabled />
);

export const _Readonly = () => (
  <Input label='Contenuto in sola lettura' id='examplereadOnly' readOnly />
);

export const ReadonlyNormalizzato = () => (
  <Input label='Contenuto in sola lettura' id='exampleNormalized' normalized />
);

ReadonlyNormalizzato.story = {
  name: 'Readonly normalizzato'
};

export const _InputAutocompleteConDati = () => {
  // "value" is used to show or propagate it externally
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [value, setValue] = useState('');

  // memoize the component
  const AutocompleteDropdownIndicator = useCallback(
    (props) => (
      <components.DropdownIndicator {...props}>
        <span style={{ padding: '0px 5px' }} aria-hidden='true'>
          <Icon icon='it-search' aria-hidden size='sm' />
        </span>
      </components.DropdownIndicator>
    ),
    []
  );

  const AutocompleteInput = useCallback((props) => {
    if (props.isHidden) {
      return <components.Input {...props} />;
    }
    return (
      <div style={{ border: `1px dotted blue}` }}>
        <components.Input {...props} />
      </div>
    );
  }, []);

  const handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, '');
    setValue(inputValue);
    return inputValue;
  };

  return (
    <FormGroup>
      <AsyncSelect
        components={{
          DropdownIndicator: AutocompleteDropdownIndicator,
          Input: AutocompleteInput,
          IndicatorSeparator: null
        }}
        loadOptions={(inputValue, callback) => {
          setTimeout(() => {
            callback(
              multiOptions.filter((i) =>
                i.label.toLowerCase().includes(inputValue.toLowerCase())
              )
            );
          }, 1000);
        }}
        cacheOptions
        defaultOptions
        onInputChange={handleInputChange}
        classNamePrefix='react-autocomplete'
        placeholder='Testo da cercare'
      />
      <label htmlFor='autocomplete-regioni' className='sr-only'>
        Cerca nel sito
      </label>
    </FormGroup>
  );
};

_InputAutocompleteConDati.story = {
  name: 'Input autocomplete'
};

export const AreaDiTesto = () => (
  <TextArea label='Esempio di area di testo' rows={3} />
);

AreaDiTesto.story = {
  name: 'Area di testo'
};

export const AreaDiTestoConSegnaposto = () => (
  <TextArea
    rows={3}
    label='Esempio di area di testo'
    placeholder='Testo di esempio'
  />
);

AreaDiTestoConSegnaposto.story = {
  name: 'Area di testo con segnaposto'
};

export const InputNumericoDimensionamento = () => (
  <>
    <div className='w-100'>
      <Input
        type='number'
        label='Input Number inserito in una colonna a tutta larghezza'
        value='100'
        {...actions('onChange')}
      />
    </div>
    <div className='w-50 mt-5'>
      <Input
        type='number'
        label='Input Number inserito in una colonna di larghezza 50%'
        value='100'
        {...actions('onChange')}
      />
    </div>
  </>
);

export const InputNumericoSteps = () => {
  const [value, setValue] = useState('100');
  return (
    <Input
      type='number'
      label='Min, Max & Step'
      value={value}
      min={-2000}
      max={15000}
      step={500}
      onChange={(ev) => {
        setValue(ev.target.value);
      }}
    />
  );
};

export const InputNumericoDisabilitato = () => {
  return (
    <Input
      type='number'
      label='Disabled'
      value='50'
      min={0}
      max={100}
      disabled
    />
  );
};
