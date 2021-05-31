import React, { FC, HTMLAttributes, ElementType } from 'react';
import classNames from 'classnames';

export interface CardTagsHeaderProps extends HTMLAttributes<HTMLElement> {
  /** Mostra la data nella Card. Passare una data già formattata come stringa. */
  date?: string;
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente CardTagsHeader */
  className?: string;
}

export const CardTagsHeader: FC<CardTagsHeaderProps> = ({
  date,
  children,
  className,
  tag = 'div',
  ...attributes
}) => {
  const Tag = tag;
  const classes = classNames('head-tags', className);
  return (
    <Tag className={classes} {...attributes}>
      {children}
      {date && <span className='data'>{date}</span>}
    </Tag>
  );
};
