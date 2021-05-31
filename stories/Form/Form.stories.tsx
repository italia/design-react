import React from 'react';
import { actions } from '@storybook/addon-actions';

import { Button, Input, Col, Toggle, Label, Select } from '../../src';

export default {
  title: 'Componenti/Form/Form Layout'
};

export const DimensionamentoColonneBase = () => (
  <div>
    <div className='form-row'>
      <Input
        type='text'
        label='Nome'
        id='formNome'
        wrapperClass='col col-md-6'
      />
      <Input
        type='text'
        label='Cognome'
        id='formCognome'
        wrapperClass='col col-md-6'
      />
    </div>
    <div className='form-row'>
      <Input type='text' label='Città' id='Citta' wrapperClass='col col-7' />
      <Input type='text' label='Comune' id='Comune' wrapperClass='col' />
      <Input type='text' label='CAP' id='CAP' wrapperClass='col' />
    </div>
  </div>
);

export const DimensionamentoColonneComplesso = () => (
  <div>
    <div className='form-row'>
      <Input
        type='email'
        label='Nome'
        id='inputEmail4'
        placeholder='inserisci il tuo indirizzo email'
        wrapperClass='col col-md-6'
      />
      <Input
        type='password'
        label='Password'
        id='exampleInputPassword'
        placeholder='Inserisci la tua password'
        wrapperClass='col col-md-6'
      />
    </div>
    <div className='form-row'>
      <Input
        type='text'
        label='Indirizzo'
        id='inputAddress'
        placeholder='Via Roma, 1'
        wrapperClass='col'
      />
    </div>
    <div className='form-row'>
      <Input
        type='text'
        label='Comune'
        id='inputCity'
        wrapperClass='col col-md-6'
      />
      <Input
        type='text'
        label='CAP'
        id='inputCAP'
        wrapperClass='col col-md-2'
      />
      <Col md='4'>
        <div className='bootstrap-select-wrapper'>
          <label>Provincia</label>
          <Select
            id='selectExampleClassic'
            options={[
              { value: 'Value 1', label: 'Opzione 1' },
              { value: 'Value 2', label: 'Opzione 2' },
              { value: 'Value 3', label: 'Opzione 3' },
              {
                value: 'Value 4',
                label: 'Opzione 4'
              },
              { value: 'Value 5', label: 'Opzione 5' }
            ]}
            placeholder='Scegli una opzione'
            aria-label='Scegli una opzione'
            {...actions('onChange')}
          />
        </div>
      </Col>
    </div>
    <div className='form-row'>
      <Col md='6' className='form-group'>
        <Toggle
          label="Label dell'interruttore 1"
          disabled={false}
          id='toggleEsempio1a'
        />
      </Col>
    </div>
    <div className='form-row'>
      <Col className='form-group text-center'>
        <Button color='primary' outline>
          Annulla
        </Button>
        <Button type='submit' color='primary'>
          Conferma
        </Button>
      </Col>
    </div>
  </div>
);

export const AutoDimensionamento = () => (
  <div className='form-row align-items-center'>
    <Col>
      <label className='sr-only' htmlFor='inlineFormInput'>
        Nome
      </label>
      <input
        type='text'
        className='form-control'
        id='inlineFormInput'
        placeholder='Mario Rossi'
      />
    </Col>
    <Col>
      <label className='sr-only' htmlFor='inlineFormInputGroup'>
        Username
      </label>
      <div className='input-group'>
        <div className='input-group-prepend'>
          <div className='input-group-text'>@</div>
        </div>
        <input
          type='text'
          className='form-control'
          id='inlineFormInputGroup'
          placeholder='Username'
        />
      </div>
    </Col>
    <Col>
      <div className='form-check m-0'>
        <input
          className='form-check-input'
          type='checkbox'
          id='autoSizingCheck'
        />
        <label className='form-check-label' htmlFor='autoSizingCheck'>
          Ricordami
        </label>
      </div>
    </Col>
    <Col>
      <Button type='submit' color='primary'>
        Invia
      </Button>
    </Col>
  </div>
);

export const FormDisabilitato = () => (
  <div>
    <fieldset disabled aria-label='Form disabilitato'>
      <legend>Esempio di form disabilitato</legend>
      <div className='form-group'>
        <Input
          type='text'
          label='Input'
          id='disabledTextInput'
          placeholder='input disabilitato'
          disabled
        />
      </div>
      <div className='form-group'>
        <div className='bootstrap-select-wrapper'>
          <label>Field Label</label>
          <Select
            id='selectExampleClassic'
            options={[
              { value: 'Value 1', label: 'Opzione 1' },
              { value: 'Value 2', label: 'Opzione 2' },
              { value: 'Value 3', label: 'Opzione 3' },
              {
                value: 'Value 4',
                label: 'Opzione 4'
              },
              { value: 'Value 5', label: 'Opzione 5' }
            ]}
            placeholder='Seleziona una opzione'
            aria-label='Seleziona una opzione'
            classNamePrefix='react-select'
            {...actions('onChange')}
          />
        </div>
      </div>
      <div className='form-check'>
        <Input id='checkbox1' type='checkbox' disabled />
        <Label for='checkbox1' check>
          Check disabilitato
        </Label>
      </div>
      <Button type='submit' color='primary' className='mt-3'>
        Submit
      </Button>
    </fieldset>
  </div>
);
