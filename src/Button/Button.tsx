import React, { FC, ButtonHTMLAttributes, ElementType, Ref } from 'react';
import classNames from 'classnames';

import { Button as ButtonBase } from 'reactstrap';
import type { CSSModule } from 'reactstrap';

// reactstrap wrapper
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Quando abilitato, estende il componente Button fino a prendere tutta la larghezza disponibile */
  block?: boolean;
  /** Utilizzarlo disabilitare il colore di sfondo, ed applicarlo invece al bordo.  */
  outline?: boolean;
  /** Utilizzarlo in caso di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente Button */
  className?: string;
  /** Oggetto contenente la nuova mappatura per le classi CSS. */
  cssModule?: CSSModule;
  innerRef?: Ref<HTMLButtonElement>;
  /** Da utilizzare si usa una icona nel contenuto del Button */
  icon?: boolean;
  /** Da utilizzare per le varianti di dimensione del componente Button */
  size?: 'lg' | 'sm' | 'xs';
  /** Da utilizzare per i bottoni di chiusura all'interno di altri componenti (i.e. Chips, Modali, etc...) */
  close?: boolean;
  active?: boolean;
  href?: string;
}

export const Button: FC<ButtonProps> = ({
  tag = 'button',
  icon = false,
  color = '',
  className,
  ...attributes
}) => {
  const classes = classNames(className, {
    'btn-icon': icon
  });

  const ariaAttributes = {
    ...(attributes.disabled && { 'aria-disabled': true })
  };

  const baseProps = { color, tag };

  return (
    <ButtonBase
      className={classes}
      {...baseProps}
      {...attributes}
      {...ariaAttributes}
    />
  );
};
