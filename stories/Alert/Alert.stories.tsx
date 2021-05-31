/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Alert, AlertProps } from '../../src';

const meta: Meta = {
  title: 'Componenti/Alert',
  component: Alert
};

export default meta;

export const _Esempi: Story<AlertProps> = () => (
  <div>
    <Alert color='info'>
      Questo è un alert di tipo <b>info</b>!
    </Alert>
    <Alert color='success'>
      Questo è un alert di <b>success</b>!
    </Alert>
    <Alert color='danger'>
      Questo è un alert di <b>danger</b>!
    </Alert>
    <Alert color='warning'>
      Questo è un alert di <b>warning</b>!
    </Alert>
  </div>
);
_Esempi.args = {};

export const _EsempiInterattivi: Story<AlertProps> = ({ ...args }) => (
  <Alert {...args}>
    Questo è un alert di <b>{args.color}</b>!
  </Alert>
);
_EsempiInterattivi.args = {
  color: 'info',
  isOpen: true
};
_EsempiInterattivi.argTypes = {
  color: {
    control: {
      type: 'select',
      options: ['info', 'success', 'danger', 'warning']
    }
  }
};

export const _LinkEvidenziato: Story<AlertProps> = () => (
  <Alert color='danger'>
    Questo è un alert con un esempio di{' '}
    <a href='#' className='alert-link'>
      link
    </a>{' '}
    evidenziato.
  </Alert>
);
_LinkEvidenziato.args = {};

export const _ContenutoAggiuntivo: Story<AlertProps> = () => (
  <Alert>
    <h4 className='alert-heading'>Avviso di successo!</h4>
    <p>
      Stai leggendo questo importante messaggio di avviso di successo. Questo
      testo di esempio sarà più a lungo in modo da poter vedere come funzioni la
      spaziatura all&#39;interno di un avviso con questo tipo di contenuto.
    </p>
    <hr />
    <p className='mb-0'>
      Quando necessario, assicurarti di inserire le utilità di margine per
      mantenere gli spazi equilibrati.
    </p>
  </Alert>
);
_ContenutoAggiuntivo.args = {};

// export const ChiusuraControllata: Story<AlertProps> = () => {
//   const [open, toggleAlert] = useState(true)
//   return (
//     <div>
//       <Button onClick={() => toggleAlert(!open)} disabled={open}>
//         Mostra Alert
//       </Button>

//       <Alert color="warning" isOpen={open} toggle={() => toggleAlert(!open)}>
//         <strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.
//       </Alert>
//     </div>
//   )
// }
// ChiusuraControllata.story = {
//   name: 'Chiusura Controllata'
// }
