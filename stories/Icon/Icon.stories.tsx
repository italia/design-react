import React from 'react';

import { Icon, Row, Col, icons } from '../../src';

export default {
  title: 'Componenti/Icon'
};

export const EsempioInterattivo = ({
  icon,
  size,
  padding,
  background,
  color
}) => {
  return (
    <Icon
      icon={icon}
      size={size}
      padding={padding}
      color={color}
      className={background}
    />
  );
};

EsempioInterattivo.story = {
  name: 'Esempio interattivo'
};
EsempioInterattivo.args = {
  icon: 'it-tool',
  size: '',
  padding: false,
  color: '',
  background: ''
};
EsempioInterattivo.argTypes = {
  icon: {
    control: {
      type: 'select',
      options: icons
    }
  },
  size: {
    control: {
      type: 'select',
      options: {
        'Extra small': 'xs',
        Small: 'sm',
        default: '',
        Large: 'lg',
        'Extra Large': 'xl'
      }
    }
  },
  background: {
    control: {
      type: 'select',
      options: {
        default: '',
        Scuro: 'bg-dark',
        Chiaro: 'bg-light'
      }
    }
  },
  color: {
    control: {
      type: 'select',
      options: [
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
        'light',
        'white'
      ]
    }
  }
};

export const EsempioDimensioni = ({ icon, padding, background, color }) => {
  const dimensions = ['xs', 'sm', '', 'lg', 'xl'] as const;
  return (
    <>
      {dimensions.map((size) => (
        <Icon
          key={size}
          icon={icon}
          size={size}
          padding={padding}
          color={color}
          className={background}
        />
      ))}
    </>
  );
};

EsempioDimensioni.story = {
  name: 'Esempio dimensioni'
};
EsempioDimensioni.args = {
  icon: 'it-check-circle',
  padding: false,
  color: '',
  background: 'bg-grey'
};

export const EsempioPadding = EsempioDimensioni.bind({});
EsempioPadding.story = {
  name: 'Esempio dimensioni'
};
EsempioPadding.args = {
  icon: 'it-check-circle',
  padding: true,
  color: '',
  background: 'bg-grey'
};

export const EsempioColori = ({ icon }) => {
  return (
    <>
      {['primary', 'secondary', 'success', 'warning', 'danger'].map((color) => (
        <Icon key={color} icon={icon} color={color} className='bg-grey' />
      ))}
      {['light', 'white'].map((color) => (
        <Icon key={color} icon={icon} color={color} className='bg-dark' />
      ))}
    </>
  );
};
EsempioColori.story = {
  name: 'Esempio colori'
};
EsempioColori.args = {
  icon: 'it-check-circle'
};

export const EsempioAllineamento = () => {
  return (
    <div style={{ lineHeight: '4em' }}>
      <Icon className='bg-light align-bottom' icon='it-check-circle' />
      <Icon className='bg-light align-middle' icon='it-check-circle' />
      <Icon className='bg-light align-top' icon='it-check-circle' />
    </div>
  );
};
EsempioAllineamento.story = {
  name: 'Esempio allineamento'
};

export const ListaIcone = () => {
  return (
    <Row>
      {icons.map((icon) => (
        <Col md={{ size: 6 }} lg={{ size: 4 }} key={icon}>
          <Icon icon={icon} /> {icon}
        </Col>
      ))}
    </Row>
  );
};

ListaIcone.story = {
  name: 'Lista icone'
};
