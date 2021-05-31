import React, { FC, HTMLAttributes, ReactChild, CSSProperties } from 'react';
import { Toast } from 'reactstrap';
import { Button } from '../Button/Button';
import classNames from 'classnames';
import { Icon } from '../Icon/Icon';
import { notifyDeprecation } from '../utils';

export interface NotificationProps extends HTMLAttributes<HTMLElement> {
  /** Id univoco da assegnare al titolo, necessario per motivi di accessibilità. */
  id: string;
  /**
   * Il titolo della notifica. Utilizzare al suo posto "title".
   * @deprecated
   */
  header?: string;
  /** Il titolo della notifica */
  title?: string;
  /** Il contenuto (messaggio) della notifica */
  children?: ReactChild;
  /** Lo stato corrente della notifica (modifica il colore delle icone e bordo) */
  state?: 'success' | 'error' | 'info' | 'warning' | string;
  /** Quando abilitata il timer automatico viene disabilitato e la notifica viene chiusa solamente al click sul rispettivo bottone di chiusura */
  dismissable?: boolean;
  /**
   * Posiziona la notifica a filo di uno dei margini indicati, modificandone l'arrotondamento.
   * La posizione predefinita è nella parte destra inferiore della finestra.
   * Su dispositivi mobile la Notification è *sempre* a piede della finestra occupandone tutta la lunghezza.
   *
   * I formati `*-fix` (i.e. `top-fix`) sono deprecati. Utilizzare il formato breve (i.e. `top`).
   */
  fix?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-fix'
    | 'bottom-fix'
    | 'right-fix'
    | 'left-fix';
  /** Indica se la notifica contiene una icona affianco al titolo. */
  withIcon?: boolean;
  /** Stili CSS aggiuntivi per il componente Notification */
  style?: CSSProperties;
}

function pickIcon(state: NotificationProps['state']) {
  switch (state) {
    case 'error':
      return 'it-close-circle';
    case 'info':
      return 'it-info-circle';
    case 'warning':
      return 'it-error';
    case 'success':
    default:
      return 'it-check-circle';
  }
}
const fixRegexp = /-fix$/;

export const Notification: FC<NotificationProps> = ({
  id,
  header,
  title = '',
  state,
  dismissable,
  fix,
  withIcon,
  style,
  children,
  ...attributes
}) => {
  if (header) {
    notifyDeprecation(
      'Please use the prop "title" instead of the "header" for the Notification component.'
    );
  }
  if (fixRegexp.test(fix || '')) {
    notifyDeprecation(
      `The "fix" prop format has changed: accepted values are now "top", "bottom", "left", "right". You passed ${fix}`
    );
  }

  const notificationTitle = header || title;
  const fixPosition = (fix || '').replace(fixRegexp, '');

  const wrapperClass = classNames('notification', state, {
    [`${fixPosition}-fix`]: fixPosition,
    'with-icon': withIcon,
    dismissable: dismissable
  });
  const icon = pickIcon(state);

  // Need to override some bootstrap toast styling here
  const borderReset = ['top', 'bottom', 'right', 'left']
    .filter((position) =>
      fixPosition === 'left' ? position !== 'right' : position !== 'left'
    )
    .map(
      (position) => `border${position[0].toUpperCase() + position.substring(1)}`
    );

  const customStyle = { ...style };
  for (const borderPos of borderReset) {
    customStyle[
      borderPos as 'borderTop' | 'borderBottom' | 'borderLeft' | 'borderRight'
    ] = 'none';
  }
  return (
    <Toast className={wrapperClass} style={customStyle} aria-labelledby={id}>
      <h5 id={id}>
        {notificationTitle}
        {withIcon ? <Icon icon={icon} /> : null}
      </h5>
      {children ? <p {...attributes}>{children}</p> : null}

      {dismissable && (
        <Button className='notification-close'>
          <Icon icon='it-close' />
          <span className='sr-only'>Chiudi notifica: {notificationTitle}</span>
        </Button>
      )}
    </Toast>
  );
};
