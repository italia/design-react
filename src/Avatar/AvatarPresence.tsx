import React, { FC, HTMLAttributes, ElementType } from 'react';
import classNames from 'classnames';

export interface AvatarPresenceProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente AvatarPresence */
  className?: string;
  /** Utilizzare questo attributo per indicare il tipo di presenza dell'utente. */
  presence: 'active' | 'busy' | 'hidden' | string;
}

export const AvatarPresence: FC<AvatarPresenceProps> = ({
  className,
  tag = 'div',
  presence,
  ...attributes
}) => {
  const Tag = tag;
  const typeClass = classNames('avatar-presence', {
    presence
  });
  return <Tag {...attributes} className={typeClass} />;
};
