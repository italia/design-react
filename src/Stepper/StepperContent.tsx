import React, { FC, HTMLAttributes, ElementType } from 'react';
import classNames from 'classnames';

export interface StepperContentProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente Badge */
  className?: string;
  /** Abilita il tema scuro per il componente StepperContent */
  dark?: boolean;
}

const contentStyleLight = {
  height: '400px',
  border: '2px dashed #eee',
  background: '#fafafa',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#333'
};

const contentStyleDark = {
  height: '400px',
  border: '2px dashed #eee',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#EEE',
  borderColor: '#aaa',
  background: '#17324d',
  opacity: 0.5
};

export const StepperContent: FC<StepperContentProps> = ({
  tag = 'div',
  className,
  dark,
  ...attributes
}) => {
  const Tag = tag;
  const classes = classNames('steppers-content', classNames);
  return (
    <Tag
      {...attributes}
      className={classes}
      style={(dark && contentStyleDark) || contentStyleLight}
      aria-live='polite'
    />
  );
};
