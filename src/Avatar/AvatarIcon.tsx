import React, { FC, HTMLAttributes, ElementType, Ref } from 'react';
import classNames from 'classnames';

export interface AvatarIconProps extends HTMLAttributes<HTMLElement> {
  /**
   * Utilizzarlo in caso di utilizzo di componenti personalizzati, come ad esempio
   * un link gestito da handler onClick.
   * */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente AvatarIcon */
  className?: string;
  /** Le varianti di colore definite in Bootstrap Italia */
  color?: 'primary' | 'secondary' | 'green' | 'orange' | 'red' | string;
  /** Le dimensioni dell'icona definite in Bootstrap Italia */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  /**
   * Quando definito rende l'icona un link cliccabile. Nota: se definito ignora la prop Tag.
   * */
  href?: string;
  /** Da utilizzare per impostare un riferimento all'elemento DOM */
  innerRef?: Ref<HTMLElement | HTMLAnchorElement>;
}

export const AvatarIcon: FC<AvatarIconProps> = ({
  className,
  tag = 'div',
  size = 'md',
  href,
  color,
  innerRef,
  children,
  ...attributes
}) => {
  const Tag = tag;
  const typeClass = classNames('avatar', {
    [`size-${size}`]: size,
    [`avatar-${color}`]: color
  });
  if (href) {
    return (
      <a
        href={href}
        {...attributes}
        className={typeClass}
        ref={innerRef as Ref<HTMLAnchorElement>}
      >
        {children}
      </a>
    );
  }

  return (
    <Tag {...attributes} className={typeClass}>
      {children}
    </Tag>
  );
};
