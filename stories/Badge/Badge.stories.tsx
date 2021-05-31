import React from 'react';

import { Badge, Button } from '../../src';
import type { BadgeProps } from '../../src';

export default {
  title: 'Componenti/Badge'
};

export const Esempi = () => (
  <div>
    <h1>
      Titolo di esempio <Badge color='secondary'>New</Badge>
    </h1>
    <h2>
      Titolo di esempio <Badge color='secondary'>New</Badge>
    </h2>
    <h3>
      Titolo di esempio <Badge color='secondary'>New</Badge>
    </h3>
    <h4>
      Titolo di esempio <Badge color='secondary'>New</Badge>
    </h4>
    <h5>
      Titolo di esempio <Badge color='secondary'>New</Badge>
    </h5>
    <h6>
      Titolo di esempio <Badge color='secondary'>New</Badge>
    </h6>
  </div>
);

export const Contatore = () => (
  <Button color='primary'>
    Notifiche <Badge color='light'>4</Badge>
  </Button>
);

export const ContatoreTestoAggiuntivo = () => (
  <Button color='primary'>
    Notifiche <Badge color='light'>9</Badge>
    <span className='sr-only'>Messaggi non letti</span>
  </Button>
);

export const Variazioni = () => (
  <div>
    <Badge color='primary'>Primary</Badge>
    <Badge color='secondary'>Secondary</Badge>
    <Badge color='success'>Success</Badge>
    <Badge color='danger'>Danger</Badge>
    <Badge color='warning'>Warning</Badge>
  </div>
);

export const BordiArrotondati = () => (
  <div>
    <Badge color='primary' pill>
      Primary
    </Badge>
    <Badge color='secondary' pill>
      Secondary
    </Badge>
    <Badge color='success' pill>
      Success
    </Badge>
    <Badge color='danger' pill>
      Danger
    </Badge>
    <Badge color='warning' pill>
      Warning
    </Badge>
  </div>
);

export const ConLink = () => (
  <div>
    <Badge href='#' color='primary' tag='a'>
      Primary
    </Badge>
    <Badge href='#' color='secondary' tag='a'>
      Secondary
    </Badge>
    <Badge href='#' color='success' tag='a'>
      Success
    </Badge>
    <Badge href='#' color='danger' tag='a'>
      Danger
    </Badge>
    <Badge href='#' color='warning' tag='a'>
      Warning
    </Badge>
  </div>
);

const EsempiInterattiviComponent = ({
  color,
  pill,
  label
}: BadgeProps & { label: string }) => {
  return (
    <p>
      Testo di esempio
      <Badge color={color} pill={pill}>
        {`${label} ${color}`}
      </Badge>
    </p>
  );
};

// export const _Esempi = EsempiComponent

// export const _EsempiInterattivi = EsempiInterattiviComponent
EsempiInterattiviComponent.args = {
  color: 'info',
  pill: true,
  label: ''
};
EsempiInterattiviComponent.argTypes = {
  color: {
    control: {
      type: 'select',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'success',
        'danger',
        'warning'
      ]
    }
  }
};

// export const _Contatore = ContatoreComponent

// export const _Variazioni = VariazioniComponent

// export const _BordiArrotondati = ArrotondatiComponent

// export const ConLink = LinkComponent
