import React, { FC, HTMLAttributes, ElementType } from 'react';
import classNames from 'classnames';

export interface AvatarContainerProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente AvatarContainer */
  className?: string;
}

export const AvatarContainer: FC<AvatarContainerProps> = ({
  className,
  tag = 'div',
  ...attributes
}) => {
  const Tag = tag;
  const wrapperClasses = classNames(
    'd-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap',
    className
  );
  return <Tag {...attributes} className={wrapperClasses} />;
};
