import React, { FC, HTMLAttributes, ElementType } from 'react';
import classNames from 'classnames';

export interface StepperHeaderProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente StepperHeader */
  className?: string;
}

export const StepperHeader: FC<StepperHeaderProps> = ({
  tag = 'ul',
  className,
  ...attributes
}) => {
  const Tag = tag;
  const wrapperClass = classNames('steppers-header', className);
  return <Tag {...attributes} className={wrapperClass} />;
};
