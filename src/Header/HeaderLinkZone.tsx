import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

export interface HeaderLinkZoneProps extends HTMLAttributes<HTMLElement> {
  /** Classi addizionali per il componente HeaderLinkZone, applicata all'element "nav" annidato */
  className?: string;
}

export const HeaderLinkZone: FC<HeaderLinkZoneProps> = ({
  className,
  ...attributes
}) => {
  const classes = classNames(className);
  return (
    <div className='nav-mobile'>
      <nav className={classes} {...attributes} />
    </div>
  );
};
