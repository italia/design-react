import React, { FC, HTMLAttributes, ElementType } from 'react';
import classNames from 'classnames';

export interface PagerProps extends HTMLAttributes<HTMLElement> {
  /** Etichetta di descrizione del contenuto del componente Pager */
  'aria-label': string;
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati per la l'elemento lista interno */
  listTag?: ElementType;
  /** Classi aggiuntive da usare per il componente Pager */
  className?: string;
  /** Classi aggiuntive da usare per il componente di lista interno Pager */
  listClassName?: string;
  /** Utilizzare questo attributo per indicare il numero totale di pagine */
  total?: { ariaLabel: string; label: string };
}

export const Pager: FC<PagerProps> = ({
  className,
  tag = 'nav',
  listTag: ListTag = 'ul',
  listClassName,
  children,
  total,
  ...attributes
}) => {
  const Tag = tag;
  const classes = classNames(className, 'pagination-wrapper', {
    'pagination-total': total
  });
  const listClasses = classNames(listClassName, 'pagination');
  const { ariaLabel, label } = total || {};
  const totalAriaLabel = ariaLabel ? (
    <span className='sr-only'>{ariaLabel}</span>
  ) : null;
  return (
    <Tag className={classes} {...attributes}>
      <ListTag className={listClasses}>{children}</ListTag>
      {total ? (
        <p>
          {totalAriaLabel}
          {label}
        </p>
      ) : null}
    </Tag>
  );
};
