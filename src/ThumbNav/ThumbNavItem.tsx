import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

import resizer from 'bootstrap-italia/dist/assets/resizer-3x2.svg';

export interface ThumbNavItemProps extends HTMLAttributes<HTMLLIElement> {
  active?: boolean;
  targetUrl?: string;
  imageUrl: string;
  actionDescription?: string;
}

export const ThumbNavItem: FC<ThumbNavItemProps> = ({
  active = false,
  targetUrl,
  imageUrl,
  actionDescription,
  ...attributes
}) => {
  const classes = classNames({ active: active });

  return (
    <li {...attributes}>
      <img
        src={resizer}
        className='thumb-nav-resizer'
        aria-hidden='true'
        alt=''
      />
      <a href={targetUrl} className={classes}>
        <img src={imageUrl} alt={actionDescription} />
      </a>
    </li>
  );
};
