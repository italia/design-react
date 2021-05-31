import React from 'react';
import { components } from 'react-select';
import './assets/css/autocomplete-styles.css';
import { Icon } from '../../../src';

export const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <span style={{ padding: '0px 5px' }} aria-hidden='true'>
        <Icon icon='it-search' aria-hidden size='sm' />
      </span>
    </components.DropdownIndicator>
  );
};

export const Input = (props) => {
  // eslint-disable-next-line react/prop-types
  if (props.isHidden) {
    return <components.Input {...props} />;
  }
  return (
    <div style={{ border: `1px dotted blue}` }}>
      <components.Input {...props} />
    </div>
  );
};

export const multiOptions = [
  { value: '1', label: 'Abruzzo' },
  { value: '2', label: 'Basilicata' },
  { value: '3', label: 'Calabria' },
  { value: '4', label: 'Campania' },
  { value: '5', label: 'Emilia Romagna' },
  { value: '6', label: 'Friuli Venezia Giulia' },
  { value: '7', label: 'Lazio' },
  { value: '8', label: 'Liguria' },
  { value: '9', label: 'Lombardia' },
  { value: '10', label: 'Marche' },
  { value: '11', label: 'Molise' },
  { value: '12', label: 'Piemonte' },
  { value: '13', label: 'Puglia' },
  { value: '14', label: 'Sardegna' },
  { value: '15', label: 'Sicilia' },
  { value: '16', label: 'Toscana' },
  { value: '17', label: 'Trentino Alto Adige' },
  { value: '18', label: 'Umbria' },
  { value: '19', label: "Valle d'Aosta" },
  { value: '20', label: 'Veneto' }
];
