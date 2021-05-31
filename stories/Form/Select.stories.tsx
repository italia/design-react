import React, { useState } from 'react';

import { Select } from '../../src';

const defaultOptions = [
  { value: 'Value 1', label: 'Lorem ipsum dolor sit amet' },
  { value: 'Value 2', label: 'Duis vestibulum eleifend libero' },
  { value: 'Value 3', label: 'Phasellus pretium orci sed odio tempus' },
  {
    value: 'Value 4',
    label: 'Vestibulum bibendum ex vel augue porttitor sodales'
  },
  { value: 'Value 5', label: 'Praesent quis elementum turpis' }
];

const groupOneOptions = [
  { value: 'Value 1', label: 'Lorem ipsum dolor sit amet' },
  { value: 'Value 2', label: 'Duis vestibulum eleifend libero' },
  { value: 'Value 3', label: 'Phasellus pretium orci sed odio tempus' }
];

const groupTwoOptions = [
  {
    value: 'Value 4',
    label: 'Vestibulum bibendum ex vel augue porttitor sodales'
  },
  { value: 'Value 5', label: 'Praesent quis elementum turpis' }
];

const groupedOptions = [
  {
    label: 'Gruppo 1',
    options: groupOneOptions
  },
  {
    label: 'Gruppo 2',
    options: groupTwoOptions
  }
];

export default {
  title: 'Componenti/Form/Select'
};

export const SelectClassica = () => {
  const [, setValue] = useState(null);

  const handleChange = (selectedOption) => setValue(selectedOption);
  return (
    <div className='bootstrap-select-wrapper'>
      <label htmlFor='selectExampleClassic'>Etichetta di esempio</label>
      <Select
        id='selectExampleClassic'
        onChange={handleChange}
        options={defaultOptions}
        placeholder='Scegli una opzione'
        aria-label='Scegli una opzione'
      />
    </div>
  );
};

SelectClassica.story = {
  name: 'Select classica'
};

export const SelectDisabilitata = () => {
  const [, setValue] = useState(null);

  const handleChange = (selectedOption) => setValue(selectedOption);
  return (
    <div className='bootstrap-select-wrapper'>
      <label htmlFor='selectExampleDisabled'>Etichetta di esempio</label>
      <Select
        id='selectExampleDisabled'
        isDisabled={true}
        onChange={handleChange}
        options={defaultOptions}
        placeholder='Scegli una opzione'
        aria-label='Scegli una opzione'
      />
    </div>
  );
};

SelectDisabilitata.story = {
  name: 'Select disabilitata'
};

export const SelectConReset = () => {
  const [, setValue] = useState(null);

  const handleChange = (selectedOption) => setValue(selectedOption);
  return (
    <div className='bootstrap-select-wrapper'>
      <label htmlFor='selectExampleReset'>Etichetta di esempio</label>
      <Select
        id='selectExampleReset'
        isClearable={true}
        onChange={handleChange}
        options={defaultOptions}
        placeholder='Scegli una opzione'
        aria-label='Scegli una opzione'
      />
    </div>
  );
};

SelectConReset.story = {
  name: 'Select con reset'
};

export const SelectConRicerca = () => {
  const [, setValue] = useState(null);

  const handleChange = (selectedOption) => setValue(selectedOption);
  return (
    <div className='bootstrap-select-wrapper'>
      <label htmlFor='selectExampleSearch'>Etichetta di esempio</label>
      <Select
        id='selectExampleSearch'
        isSearchable={true}
        onChange={handleChange}
        options={defaultOptions}
        placeholder='Scegli una opzione'
        aria-label='Scegli una opzione'
      />
    </div>
  );
};

SelectConRicerca.story = {
  name: 'Select con ricerca'
};

export const _SelectMultipla = () => {
  const [, setValue] = useState(null);

  const handleChange = (selectedOption) => setValue(selectedOption);
  return (
    <div className='bootstrap-select-wrapper'>
      <label htmlFor='selectExampleMulti'>Etichetta di esempio</label>
      <Select
        id='selectExampleMulti'
        isMulti={true}
        onChange={handleChange}
        options={defaultOptions}
        placeholder='Scegli una opzione'
        aria-label='Scegli una opzione'
      />
    </div>
  );
};

export const SelectConGruppi = () => {
  const [, setValue] = useState(null);

  const handleChange = (selectedOption) => setValue(selectedOption);
  return (
    <div className='bootstrap-select-wrapper'>
      <label htmlFor='selectExampleGroups'>Etichetta di esempio</label>
      <Select
        id='selectExampleGroups'
        onChange={handleChange}
        options={groupedOptions}
        placeholder='Scegli una opzione'
        aria-label='Scegli una opzione'
      />
    </div>
  );
};

SelectConGruppi.story = {
  name: 'Select con gruppi'
};

type SelectOptions =
  | { value: string; label: string }
  | { label: string; options: { value: string; label: string }[] };

export const SelectInterattivo = ({
  search,
  multi,
  group,
  disabled,
  reset
}) => {
  const [, setValue] = useState(null);

  let options: SelectOptions[] = defaultOptions;

  if (group) {
    options = groupedOptions;
  }

  const handleChange = (selectedOption) => setValue(selectedOption);
  return (
    <div className='bootstrap-select-wrapper'>
      <label htmlFor='selectExampleInteractive'>Etichetta di esempio</label>
      <Select
        id='selectExampleInteractive'
        onChange={handleChange}
        options={options}
        placeholder='Scegli una opzione'
        isDisabled={!!disabled}
        isSearchable={!!search}
        isMulti={!!multi}
        isClearable={!!reset}
        aria-label='Scegli una opzione'
        classNamePrefix={'react-select'}
      />
    </div>
  );
};
SelectInterattivo.story = {
  name: 'Esempio interattivo'
};

SelectInterattivo.args = {
  search: false,
  multi: false,
  group: false,
  disabled: false,
  reset: false
};
