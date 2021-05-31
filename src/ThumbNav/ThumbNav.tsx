import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

export interface ThumbNavProps extends HTMLAttributes<HTMLUListElement> {
  fixedWidth?: boolean;
  isSmall?: boolean;
  isVertical?: boolean;
  noZoomOnHover?: boolean;
  overlayOnHover?: 'black' | 'primary';
  position?: 'top' | 'right' | 'bottom' | 'left';
  rowItems?: 2 | 3 | 4 | 5;
}

export const ThumbNav: FC<ThumbNavProps> = ({
  isSmall = false,
  fixedWidth = false,
  isVertical = false,
  noZoomOnHover = false,
  rowItems,
  overlayOnHover,
  position,
  ...attributes
}) => {
  const classes = classNames('thumb-nav', {
    'thumb-nav-fixed': fixedWidth,
    'thumb-nav-small': isSmall,
    'thumb-nav-vertical':
      isVertical || position === 'left' || position === 'right',
    'thumb-nav-nozoom': noZoomOnHover,
    [`thumb-nav-${overlayOnHover}`]: overlayOnHover,
    [`thumb-nav-${position}`]: position,
    'thumb-nav-auto': rowItems != null,
    [`thumb-nav-auto-${rowItems}`]: rowItems != null
  });

  return <ul className={classes} {...attributes} />;
};
