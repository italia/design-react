import React, { FC, HTMLAttributes, ElementType } from 'react';
import classNames from 'classnames';

export interface SkiplinkProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente Skiplink */
  className?: string;
}

export const Skiplink: FC<SkiplinkProps> = ({
  className,
  tag = 'div',
  ...attributes
}) => {
  const Tag = tag;
  const classes = classNames(className, 'skiplinks');

  return <Tag className={classes} {...attributes} />;
};
