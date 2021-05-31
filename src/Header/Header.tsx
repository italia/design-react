import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

import { HeaderContext, CENTER, NAVBAR } from './HeaderContext';

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  /** Classi aggiuntive da usare per il componente Header */
  className?: string;
  /** Tipo di componente Header: può essere solamente uno di questi tre tipi */
  type: 'slim' | 'center' | 'navbar';
  /** Riduce la grandezza del componente Header. Funziona solamente con Header "center". */
  small?: boolean;
  /** Imposta il tema per il componente Header. Per gli Header di tipo "slim" o "center"
   *  il valore di default è "dark". Per l'Header di tipo "nav" il tema di default è "light"
   *  in mobile, mentre "dark" in versione desktop.
   */
  theme?: 'light' | 'dark';
}

export const Header: FC<HeaderProps> = ({
  className,
  small = false,
  theme = 'light',
  type,
  ...attributes
}) => {
  // use context here as theme
  const classes = classNames(className, {
    [`it-header-${type}-wrapper`]: type,
    'it-small-header': type === CENTER && small,
    [`theme-${theme}`]: type !== NAVBAR && theme,
    'theme-dark-mobile': type === NAVBAR && theme === 'dark',
    'theme-light-desk': type === NAVBAR && theme === 'light'
  });
  return (
    <HeaderContext.Provider value={{ type }}>
      <div className={classes} {...attributes} />
    </HeaderContext.Provider>
  );
};
