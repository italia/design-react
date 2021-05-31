import React, { ElementType, FC, HTMLAttributes, MouseEvent } from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon/Icon';

export interface BottomNavItemProps extends HTMLAttributes<HTMLLIElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente BottomNavItem */
  className?: string;
  /** Quando abilitato mostra l'elemento come attivo */
  active?: boolean;
  /** Indica l'URL a cui puntare (utilizzare o questo o onClick) */
  url?: string;
  /** Etichetta da associare all'elemento */
  label?: string;
  /** Testo esplicativo per dispositivi screen reader. */
  srText?: string;
  /** Icona da utilizzare per l'elemento */
  iconName?: string;
  /** Quando abilitato indica una sezione che richiede attenzione o presenta nuovi contenuti */
  alert?: boolean;
  /** Visualizza dei badge con indicazioni numeriche in alto a destra dell'icona */
  badge?: number;
  /** Da utilizzare al posto di url quando la gestione del click è in JS */
  onLinkClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  /**
   * Indica l'URL a cui far puntare il componente BottomNavItem.
   * @deprecated. Usare `url` o `onLinkClick`
   * */
  link?: string;
}

export const BottomNavItem: FC<BottomNavItemProps> = ({
  active = false,
  badge,
  alert = false,
  url,
  srText,
  iconName = 'it-comment',
  label,
  tag = 'a',
  onLinkClick,
  link,
  ...attributes
}) => {
  const Tag = tag;
  const activeClass = classNames({ active });
  const badgeWrapper = Boolean(badge) && (
    <div className='badge-wrapper'>
      <span className='bottom-nav-badge'>{badge}</span>
    </div>
  );
  const alertWrapper = Boolean(alert) && (
    <div className='badge-wrapper'>
      <span className='bottom-nav-alert' />
    </div>
  );
  return (
    <li {...attributes}>
      <Tag
        href={url || link || '#'}
        className={activeClass}
        onClick={onLinkClick}
      >
        {badgeWrapper}
        {alertWrapper}
        <Icon icon={iconName} />
        <span className='bottom-nav-label'>
          {label}
          {srText ? <span className='sr-only'>{srText}</span> : null}
        </span>
      </Tag>
    </li>
  );
};
