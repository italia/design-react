import React, { FC, ElementType, AnchorHTMLAttributes } from 'react';
import classNames from 'classnames';

export interface SkiplinkItemProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente Skiplink */
  className?: string;
  /** Abilitare questo attributo per renderizzare lo SkipLinkItem al focus */
  focusable?: boolean;
}

export const SkiplinkItem: FC<SkiplinkItemProps> = ({
  className,
  tag = 'a',
  focusable = true,
  ...attributes
}) => {
  const Tag = tag;
  const classes = classNames(className, 'sr-only', {
    'sr-only-focusable': focusable
  });

  // Add an extra href for focusable if the user passes an onClick rather than href prop
  const extraHref = attributes.onClick ? { href: '#' } : {};

  return <Tag className={classes} {...attributes} {...extraHref} />;
};
