import React, { ElementType, FC, HTMLAttributes } from 'react';

export interface BottomNavProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente BottomNav */
  className?: string;
}

export const BottomNav: FC<BottomNavProps> = ({
  tag = 'nav',
  ...attributes
}) => {
  const Tag = tag;
  return (
    <Tag className='bottom-nav'>
      <ul {...attributes} />
    </Tag>
  );
};
