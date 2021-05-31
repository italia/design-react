import React, { ElementType, FC } from 'react';
import classNames from 'classnames';

export interface AccordionProps {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente Badge */
  className?: string;
  /** Utilizzare questo attributo per ottenere header con sfondo di colore primario quando questi è attivo o all’hover. */
  background?: 'active' | 'hover';
  /** Utilizzare questo attributo per mostrare, mediante un'icona a sinistra, lo stato di apertura */
  iconLeft?: boolean;
}

export const Accordion: FC<AccordionProps> = ({
  tag = 'div',
  className,
  background,
  iconLeft = false,
  ...attributes
}) => {
  const Tag = tag;
  const classes = classNames('collapse-div', className, {
    'collapse-background-active': background === 'active',
    'collapse-background-hover': background === 'hover',
    'collapse-left-icon': iconLeft
  });

  return <Tag {...attributes} className={classes} />;
};
