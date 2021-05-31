import React, { FC, HTMLAttributes, ElementType } from 'react';
import classNames from 'classnames';

export interface AvatarStatusProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente AvatarStatus */
  className?: string;
  /** Utilizzare questo attributo per indicare il tipo di stato dell'utente. */
  status: 'approved' | 'declined' | 'notify' | string;
}

export const AvatarStatus: FC<AvatarStatusProps> = ({
  className,
  tag = 'div',
  status,
  ...attributes
}) => {
  const Tag = tag;
  const typeClass = classNames('avatar-status', {
    status
  });
  return <Tag {...attributes} className={typeClass} />;
};
