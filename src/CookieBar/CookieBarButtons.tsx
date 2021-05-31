import React, { ElementType, FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

export interface CookieBarButtonsProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente CookieBarButtons */
  className?: string;
}

export const CookieBarButtons: FC<CookieBarButtonsProps> = ({
  className,
  tag = 'div',
  ...attributes
}) => {
  const Tag = tag;
  const buttonClasses = classNames(className, 'cookiebar-buttons');
  return <Tag className={buttonClasses} {...attributes} />;
};
