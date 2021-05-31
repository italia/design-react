import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Icon } from '../Icon/Icon';

export interface TimelinePinProps extends HTMLAttributes<HTMLElement> {
  /** Classi aggiuntive da usare per il componente TimelinePin */
  className?: string;
  /** Mostra un'icona all'interno del TimelinePin. Passare il nome dell'icona per utilizzarlo. */
  iconName?: string;
  /**
   * Mostra un'icona all'interno del TimelinePin. Passare il nome dell'icona per utilizzarlo.
   * @deprecated. Utilizzare `iconName`.
   * */
  icon?: string;
  /** Etichetta da associare all'elemento */
  label: string;
  /** Quando abilitato indica che l'evento TimelinePin è collocato nel presente (azzurro) */
  now?: boolean;
  /** Da utilizzare per mostrare un'etichetta per l'evento nel presente */
  nowText?: string;
  /** Quando abilitato indica che l'evento TimelinePin è collocato nel passato (blu scuro) */
  past?: boolean;
}

export const TimelinePin: FC<TimelinePinProps> = ({
  iconName = 'it-code-circle',
  icon = 'it-code-circle',
  label = ' ',
  past,
  now,
  nowText,
  className,
  ...attributes
}) => {
  const { children, ...rest } = attributes;
  const classes = classNames('timeline-element', className);
  const innerClasses = classNames('it-pin-wrapper', className, {
    'it-evidence': past,
    'it-now': now
  });
  const pinIcon = (
    <div className='pin-icon'>
      <Icon icon={iconName || icon} />
    </div>
  );
  const pinLabel = (
    <div className='pin-text'>
      <span>{label}</span>
    </div>
  );

  const pinTextNow = now && (
    <span className='it-now-label d-none d-lg-flex'>{nowText}</span>
  );

  return (
    <div className={classes}>
      {pinTextNow}
      <div className={innerClasses} {...rest}>
        {pinIcon}
        {pinLabel}
      </div>
      {children}
    </div>
  );
};
