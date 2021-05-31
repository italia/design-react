import React, { FC, HTMLAttributes, ElementType } from 'react';
import classNames from 'classnames';

export interface AvatarGroupContainerProps
  extends HTMLAttributes<HTMLUListElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente interno AvatarGroupContainer */
  className?: string;
  /** Classi aggiuntive da usare per il componente più esterno di AvatarGroupContainer */
  wrapperClassName?: string;
}

export const AvatarGroupContainer: FC<AvatarGroupContainerProps> = ({
  className,
  tag = 'ul',
  wrapperClassName,
  ...attributes
}) => {
  const Tag = tag;
  const wrapperClasses = classNames('avatar-group-stacked', wrapperClassName);
  return <Tag {...attributes} className={wrapperClasses}></Tag>;
};
