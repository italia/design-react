import React, { FC, HTMLAttributes, ElementType } from 'react';
import classNames from 'classnames';

export interface AvatarExtraTextProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente AvatarExtraText */
  className?: string;
}

export const AvatarExtraText: FC<AvatarExtraTextProps> = ({
  className,
  tag = 'div',
  ...attributes
}) => {
  const Tag = tag;
  const wrapperClass = classNames('extra-text', className);
  return <Tag className={wrapperClass} {...attributes} />;
};
