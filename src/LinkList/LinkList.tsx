import React, { FC, HTMLAttributes, ElementType, ReactNode } from 'react';
import classNames from 'classnames';

export interface LinkListProps extends HTMLAttributes<HTMLUListElement> {
  /** Da utilizzare in caso di titolo principale della lista. Passare una componente React da mostrare come titolo */
  header?: ReactNode;
  /** Classi aggiuntive da usare per il componente lista del LinkList */
  className?: string;
  /** Classi aggiuntive da usare per il componente wrapper del LinkList */
  wrapperClassName?: string;
  /**
   * Utilizzarlo in caso di utilizzo di componenti personalizzati per il wrapper della lista.
   * Nota: viene ignorato quando usato in lista annidate.
   * */
  tag?: ElementType;
  /** Quando abilitato gestisce una lista in cui ciascun elemento è composto da più componenti/elementi. */
  multiline?: boolean;
  /** Da utilizzare per una lista annidata */
  sublist?: boolean;
  /** Da utilizzare per una lista di avatar */
  avatar?: boolean;
}

export const LinkList: FC<LinkListProps> = ({
  className,
  wrapperClassName,
  tag = 'div',
  multiline,
  header,
  sublist,
  avatar,
  ...attributes
}) => {
  const Tag = tag;
  const wrapperClasses = classNames('link-list-wrapper', wrapperClassName, {
    multiline: multiline
  });
  const classes = classNames(className, {
    'link-list': !sublist,
    'link-sublist': sublist,
    'avatar-group': avatar
  });

  if (sublist) {
    return (
      <>
        {header}
        <ul {...attributes} className={classes} />
      </>
    );
  }
  return (
    <Tag className={wrapperClasses}>
      {header}
      <ul {...attributes} className={classes} />
    </Tag>
  );
};
