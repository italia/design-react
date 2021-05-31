import React, { HTMLAttributes, FC, ElementType } from 'react';
import classNames from 'classnames';

export interface ChipProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente Chip */
  className?: string;
  /** Impostarlo su `true` per centrare la label all'interno */
  simple?: boolean;
  /** Impostarlo su `true` per una versione più grande del componente Chip. */
  large?: boolean;
  /** Impostarlo su `true` per renderizzare il componente Chip come disabilitato */
  disabled?: boolean;
  /** Le varianti di colore definite in Bootstrap Italia */
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | string;
}

export const Chip: FC<ChipProps> = ({
  className,
  color = '',
  tag = 'div',
  simple = false,
  large = false,
  disabled = false,
  ...attributes
}) => {
  const Tag = tag;
  const classes = classNames('chip', className, {
    'chip-simple': simple,
    'chip-lg': large,
    'chip-disabled': disabled,
    [`chip-${color}`]: color
  });

  return <Tag className={classes} {...attributes} />;
};
