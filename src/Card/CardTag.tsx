import React, { AnchorHTMLAttributes, FC, ElementType } from 'react';
import classNames from 'classnames';

export interface CardTagProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente CardTag*/
  className?: string;
}

export const CardTag: FC<CardTagProps> = ({
  className,
  tag = 'a',
  ...attributes
}) => {
  const Tag = tag;
  const classes = classNames(className, 'card-tag');
  return <Tag className={classes} {...attributes} />;
};
