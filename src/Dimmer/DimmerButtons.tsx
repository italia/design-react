import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

export interface DimmerButtonsProps extends HTMLAttributes<HTMLElement> {
  /** Le varianti di colore definite in Bootstrap Italia per il componente Dimmer */
  color?: 'primary' | string;
  /** Classi aggiuntive da usare per il componente Dimmer */
  className?: string;
  /** Da utilizzare in presenza di un singolo bottone: quando abilitato ne centra il contenuto. */
  single?: boolean;
  /** Da utilizzare con `false` per abilitare il precedente comportamento senza sfondo scuro.
   * @deprecated
   */
  dark?: boolean;
}

export const DimmerButtons: FC<DimmerButtonsProps> = ({
  color,
  className,
  single = false,
  dark = true,
  ...attributes
}) => {
  const { children, ...rest } = attributes;
  const classes = classNames('dimmer-buttons', className, {
    'bg-dark': dark,
    'single-button': single
  });

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
