/* eslint-disable react/prop-types */
import React from 'react';

import { Button, Icon } from '../../src';

export default {
  title: 'Componenti/Button'
};

export const Esempi = () => {
  return (
    <>
      <div className='mb-2'>
        <Button color='primary'>Primary</Button>{' '}
        <Button outline color='primary'>
          Primary Outline
        </Button>
      </div>
      <div className='mb-2'>
        <Button color='secondary'>Secondary</Button>{' '}
        <Button outline color='secondary'>
          Secondary Outline
        </Button>
      </div>
      <div className='mb-2'>
        <Button color='success'>Success</Button>{' '}
        <Button outline color='success'>
          Success Outline
        </Button>
      </div>
      <div className='mb-2'>
        <Button color='info'>Info</Button>{' '}
        <Button outline color='info'>
          Info Outline
        </Button>
      </div>
      <div className='mb-2'>
        <Button color='danger'>Danger</Button>{' '}
        <Button outline color='danger'>
          Danger Outline
        </Button>
      </div>
      <div className='mb-2'>
        <Button color='warning'>Warning</Button>{' '}
        <Button outline color='warning'>
          Warning Outline
        </Button>
      </div>
      <div className='mb-2'>
        <Button color='link'>Link</Button>{' '}
        <Button outline color='link'>
          Link Outline
        </Button>
      </div>
    </>
  );
};

export const VariantiColore = () => {
  return (
    <>
      <div className='btn-example'>
        <Button color='primary'>Primary</Button>{' '}
        <Button outline color='primary'>
          Primary Outline
        </Button>{' '}
        <Button color='primary' disabled>
          Primary disabled
        </Button>
      </div>
      <div className='btn-example'>
        <Button color='secondary'>Secondary</Button>{' '}
        <Button outline color='secondary'>
          Secondary Outline
        </Button>{' '}
        <Button color='secondary' disabled>
          Secondary disabled
        </Button>
      </div>
    </>
  );
};

export const SfondoScuro = () => (
  <div className='bg-dark py-1'>
    <div className='btn-example'>
      <Button color='primary'>Primary</Button>{' '}
      <Button outline color='primary'>
        Primary Outline
      </Button>{' '}
      <Button color='primary' disabled>
        Primary disabled
      </Button>
    </div>
    <div className='btn-example'>
      <Button color='secondary'>Secondary</Button>{' '}
      <Button outline color='secondary'>
        Secondary Outline
      </Button>{' '}
      <Button color='secondary' disabled>
        Secondary disabled
      </Button>
    </div>
  </div>
);

SfondoScuro.story = {
  name: 'Sfondo scuro'
};

export const VariantiDiDimensione = () => (
  <section>
    <div>
      <Button color='primary' size='lg'>
        Primary Large
      </Button>{' '}
      <Button color='secondary' size='lg'>
        Secondary Large
      </Button>{' '}
      <div className='mt-3' />
      <Button color='primary' size='sm'>
        Primary Small
      </Button>{' '}
      <Button color='secondary' size='sm'>
        Secondary Small
      </Button>{' '}
      <div className='mt-3' />
      <Button color='primary' size='xs'>
        Primary Mini
      </Button>{' '}
      <Button color='secondary' size='xs'>
        Secondary Mini
      </Button>{' '}
      <div className='mt-3' />
      <Button color='primary' block>
        Primary Block
      </Button>{' '}
      <Button color='secondary' block>
        Secondary Block
      </Button>{' '}
    </div>
  </section>
);

VariantiDiDimensione.story = {
  name: 'Varianti di dimensione'
};

export const BottoniConIcona = () => (
  <div>
    <Button color='success' size='lg' icon>
      <Icon color='white' icon='it-star-full' /> Icon Button Large
    </Button>{' '}
    <Button color='primary' icon>
      <Icon color='white' icon='it-star-full' /> Icon Button
    </Button>{' '}
    <Button color='danger' size='sm' icon>
      <Icon color='secondary' icon='it-star-full' /> Icon Button Small
    </Button>{' '}
    <Button color='info' size='xs' icon>
      <Icon color='danger' icon='it-star-full' /> Icon Button Extra Small
    </Button>
  </div>
);

BottoniConIcona.story = {
  name: 'Bottoni con icona'
};

export const BottoniConIconaCerchiata = () => (
  <div>
    <Button color='success' size='lg' icon>
      <span className='rounded-icon'>
        <Icon color='success' icon='it-user' />
      </span>
      <span>Round Icon Large</span>
    </Button>{' '}
    <Button color='primary' icon>
      <span className='rounded-icon'>
        <Icon color='primary' icon='it-user' />
      </span>
      <span>Round Icon</span>
    </Button>{' '}
    <Button color='danger' size='sm' icon>
      <span className='rounded-icon rounded-secondary'>
        <Icon color='white' icon='it-user' />
      </span>
      <span>Round Icon Small</span>
    </Button>{' '}
    <Button color='info' size='xs' icon>
      <span className='rounded-icon rounded-danger'>
        <Icon color='white' icon='it-user' />
      </span>
      <span>Round Icon Extra Small</span>
    </Button>
  </div>
);

BottoniConIconaCerchiata.story = {
  name: 'Bottoni con icona cerchiata'
};

export const StatoAttivo = () => (
  <div>
    {colors.map((color) => (
      <span key={color}>
        <Button color={color.toLowerCase()}>{color}</Button>{' '}
      </span>
    ))}
  </div>
);

export const StatoDisabilitato = () => (
  <div>
    {colors.map((color) => (
      <span key={color}>
        <Button color={color.toLowerCase()} disabled>
          {color}
        </Button>{' '}
      </span>
    ))}
  </div>
);

const colors = [
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Danger',
  'Warning',
  'Link'
];

export const EsempiInterattivi = ({
  color,
  dimension,
  block,
  disabled,
  label
}) => {
  return (
    <Button
      color={color.toLowerCase()}
      disabled={disabled}
      block={block}
      size={dimension}
    >
      {label} {color} {dimension} {block ? 'block' : ''}{' '}
      {disabled ? 'disabled' : ' '}
    </Button>
  );
};
EsempiInterattivi.args = {
  color: colors[0],
  dimension: ' ',
  block: false,
  disabled: false,
  label: ''
};
EsempiInterattivi.argTypes = {
  color: {
    control: {
      type: 'select',
      options: colors
    }
  },
  dimension: {
    control: {
      type: 'select',
      options: [' ', 'xs', 'sm', 'lg']
    }
  }
};

EsempiInterattivi.story = {
  name: 'Esempi interattivi',
  parameters: { controls: { expanded: true } }
};
