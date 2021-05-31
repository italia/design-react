import React, { FC, HTMLAttributes, MouseEvent } from 'react';
import classNames from 'classnames';

import { Icon } from '../Icon/Icon';

export interface CardCategoryProps extends HTMLAttributes<HTMLElement> {
  /** Mostra un'icona nella Card. Passare il nome dell'icona per utilizzarlo. */
  iconName?: string;
  /** Mostra la data nella Card. Passare una data già formattata come stringa. */
  date?: string;
  /** Se usato come link, passare l'URL target. */
  href?: string;
  /** Da utilizzare al posto di url quando la gestione del click è in JS */
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

export const CardCategory: FC<CardCategoryProps> = ({
  iconName,
  date,
  href,
  onClick,
  children,
  ...rest
}) => {
  const classes = classNames({
    'category-top': date || ' ',
    'categoryicon-top': iconName
  });
  // Simple category link
  const categoryLink = !iconName && (
    <a href={href} className='category' onClick={onClick}>
      {children}
    </a>
  );
  const categoryDate = date && <span className='data'>{date}</span>;
  // Category with icon
  const categoryText = iconName && <span className='text'>{children}</span>;
  const categoryIcon = iconName && <Icon icon={iconName} />;

  return (
    <div className={classes} {...rest}>
      {categoryLink}
      {categoryIcon}
      {categoryText}
      {categoryDate}
    </div>
  );
};
