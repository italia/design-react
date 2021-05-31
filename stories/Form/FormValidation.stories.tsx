import React from 'react';

import { Button, Input, Form, FormGroup } from '../../src';

export default {
  title: 'Componenti/Form/Form Validation'
};

export const ValidazioneBase = () => (
  <div>
    <Input label='Valid Input' valid />
    <Input label='Invalid Input' invalid />
    <Input value='Mario' label='First name' infoText='Validated!' valid />
    <Input label='Username' infoText='Please choose a username.' invalid />
  </div>
);

export const ValidazioneCompleta = () => (
  <Form>
    <div className='form-row'>
      <FormGroup className='col-md-4 mb-3'>
        <Input
          type='text'
          value='Mario'
          label='Nome'
          infoText='Validato!'
          valid
        />
      </FormGroup>
      <FormGroup className='col-md-4 mb-3'>
        <Input
          type='text'
          value='Rossi'
          label='Cognome'
          infoText='Validato!'
          valid
        />
      </FormGroup>
      <FormGroup className='col-md-4 mb-3'>
        <Input
          type='text'
          value=''
          label='Username'
          infoText='Per favore scegli un username.'
          invalid
        />
      </FormGroup>
    </div>
    <div className='form-row'>
      <FormGroup className='col-md-6 mb-3'>
        <Input
          type='text'
          value=''
          label='Città'
          infoText='Per favore inserisci un nome di città valido.'
          invalid
        />
      </FormGroup>
      <FormGroup className='col-md-3 mb-3'>
        <Input
          type='text'
          value=''
          label='Provincia'
          infoText='Per favore inserisci un nome di provincia valida.'
          invalid
        />
      </FormGroup>
      <FormGroup className='col-md-3 mb-3'>
        <Input
          type='text'
          value=''
          label='CAP'
          infoText='Per favore inserisci un CAP valido.'
          invalid
        />
      </FormGroup>
    </div>
    <div className='form-check'>
      <Input
        id='checkbox1'
        type='checkbox'
        invalid
        infoText='Devi accettare i termini e le condizioni prima di inviare il modulo.'
        label='Accetto i termini e condizioni'
      />
    </div>
    <Button color='primary' type='submit'>
      Invia
    </Button>
  </Form>
);
