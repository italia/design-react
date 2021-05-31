import React, { FC, ElementType, HTMLAttributes } from 'react';
import classNames from 'classnames';

export interface CalloutTitleProps extends HTMLAttributes<HTMLElement> {
  /** Classi aggiuntive per il componente */
  className?: string;
  /** Permette personalizzare il tag utilizzato per il contenitore del titolo (diverso da "div"). Accetta sia tag HTML che componenti React. */
  tag?: ElementType;
}

export const CalloutTitle: FC<CalloutTitleProps> = ({
  children,
  className,
  tag = 'div',
  ...attributes
}) => {
  const Tag = tag;
  const classes = classNames(className, 'callout-title');
  return (
    <Tag className={classes} {...attributes}>
      {children}
    </Tag>
  );
};
