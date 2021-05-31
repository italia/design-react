import React, { FC, HTMLAttributes, ElementType } from 'react';
import classNames from 'classnames';

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente Sidebar */
  className?: string;
  /** Indica se il componente Sideebar corrente è di tipo annidato o no */
  secondary?: boolean;
  /** Quando attivo aggiunge una linea separatrice a sinistra */
  left?: boolean;
  /** Quando attivo aggiunge una linea separatrice a destra */
  right?: boolean;
  /** Quando attivo cambia il tema del componente Sidebar rendendola scura */
  dark?: boolean;
}

export const Sidebar: FC<SidebarProps> = ({
  className,
  tag = 'div',
  secondary = false,
  left = false,
  right = false,
  dark = false,
  ...attributes
}) => {
  const Tag = tag;
  const wrapperClasses = classNames('sidebar-wrapper', className, {
    'it-line-left-side': left,
    'it-line-right-side': right,
    'theme-dark': dark
  });

  const wrapperClassesLinkList = classNames('sidebar-linklist-wrapper', {
    'linklist-secondary': secondary
  });
  if (secondary) {
    return <Tag {...attributes} className={wrapperClassesLinkList} />;
  }
  return (
    <Tag className={wrapperClasses}>
      <Tag {...attributes} className={wrapperClassesLinkList} />
    </Tag>
  );
};
