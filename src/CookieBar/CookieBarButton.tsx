import React, {
  ElementType,
  FC,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes
} from 'react';
import classNames from 'classnames';

export type CookieBarButtonProps = {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente CookieBarButton */
  className?: string;
} & (
  | ButtonHTMLAttributes<HTMLButtonElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>
);

export const CookieBarButton: FC<CookieBarButtonProps> = ({
  tag = 'button',
  className,
  ...attributes
}) => {
  const Tag = tag;
  const activeClass = classNames(className, 'cookiebar-btn');
  return <Tag className={activeClass} {...attributes} />;
};
