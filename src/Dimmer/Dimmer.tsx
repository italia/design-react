import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Icon } from '../Icon/Icon';

export interface DimmerProps extends HTMLAttributes<HTMLElement> {
  /** Il nome dell'icona da mostrare. Per una lista completa vedi: @TODO-URL */
  icon?: string;
  /** Le varianti di colore definite in Bootstrap Italia */
  color?: 'success' | 'warning' | 'danger' | 'note' | 'important' | string;
  /** Classi aggiuntive da usare per il componente Dimmer */
  className?: string;
  /**
   * Classi aggiuntive da usare per il componente contenitore del Dimmer
   * Per replicare il comportamento precedente, in cui `className` veniva applicato anche al wrapper,
   * passare `true`.
   * */
  wrapperClassName?: string | true;
}

export const Dimmer: FC<DimmerProps> = ({
  icon,
  color,
  className,
  wrapperClassName,
  ...attributes
}) => {
  const { children, ...rest } = attributes;
  const classes = classNames(
    'dimmer',
    wrapperClassName === true ? className : wrapperClassName,
    {
      [`dimmer-${color}`]: color
    }
  );
  const innerClasses = classNames('dimmer-inner', className);
  const dimmerIcon = icon && (
    <div className='dimmer-icon'>
      <Icon icon={icon} />
    </div>
  );

  return (
    <div className={classes} {...rest} style={{ display: 'flex' }}>
      <div className={innerClasses} {...rest}>
        {dimmerIcon}
        {children}
      </div>
    </div>
  );
};
