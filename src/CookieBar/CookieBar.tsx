import React, { ElementType, FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

export interface CookieBarProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente Cookie */
  className?: string;
}

export const CookieBar: FC<CookieBarProps> = ({
  tag = 'div',
  className,
  ...attributes
}) => {
  const Tag = tag;
  const wrapperClasses = classNames('cookiebar show', className);
  return <Tag {...attributes} className={wrapperClasses} />;
};
