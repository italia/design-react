import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Icon } from '../Icon/Icon';

export interface HeaderSearchProps extends HTMLAttributes<HTMLElement> {
  /** Classi aggiuntive da usare per il componente HeaderSearch */
  className?: string;
  /** Etichetta di testo da applicare all'elemento. In caso di stringa vuota non verrà mostrato alcun testo */
  label: string;
  /** Nome dell'icona da utilizzare */
  iconName: string;
  /** Indirizzo di indirizzamento al click dell'icona */
  href?: string;
}

export const HeaderSearch: FC<HeaderSearchProps> = ({
  className,
  label,
  href,
  iconName = 'it-search',
  ...attributes
}) => {
  const classes = classNames('it-search-wrapper', className);
  return (
    <div className={classes} {...attributes}>
      {label && <span className='d-none d-md-block'>{label}</span>}
      <a className='search-link rounded-icon' aria-label={label} href={href}>
        <Icon icon={iconName} />
      </a>
    </div>
  );
};
