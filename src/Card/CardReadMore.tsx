import React, { FC, HTMLAttributes, ElementType } from 'react';
import classNames from 'classnames';

import { Icon } from '../Icon/Icon';

export interface CardReadMoreProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente CardReadMore*/
  className?: string;
  /** Il contenuto in testo da mostrare */
  text: string;
  /** Passare l'URL target. */
  href?: string;
  /** Mostra un'icona nella Card per l'azione "Leggi di più". Passare il nome dell'icona per utilizzarlo. */
  iconName?: string;
}

export const CardReadMore: FC<CardReadMoreProps> = ({
  className,
  text,
  iconName = 'it-arrow-right',
  tag = 'a',
  href,
  ...attributes
}) => {
  const Tag = tag;
  const classes = classNames(className, 'read-more');
  return (
    <Tag className={classes} href={href} {...attributes}>
      <span className='text'>{text}</span>
      {iconName && <Icon icon={iconName} />}
    </Tag>
  );
};
