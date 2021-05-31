import React, { FC, HTMLAttributes, ReactChild } from 'react';
import classNames from 'classnames';

export interface HeaderSocialsZoneProps extends HTMLAttributes<HTMLElement> {
  /** Classi addizionali per il componente HeaderSocialsZone, verrà applicato all'elemento wrapper più esterno. */
  className?: string;
  /** Etichetta utilizzata per presentare i social presenti. In caso di stringa vuota non verrà mostrata alcuna etichetta */
  label?: string;
  /** Utilizzato per elencare i social da mostrare */
  children?: ReactChild;
}

export const HeaderSocialsZone: FC<HeaderSocialsZoneProps> = ({
  className,
  children,
  label,
  ...attributes
}) => {
  const classes = classNames('it-socials d-none d-md-flex', className);
  return (
    <div className={classes} {...attributes}>
      {label && <span>{label}</span>}
      {children}
    </div>
  );
};
