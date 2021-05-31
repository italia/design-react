import React, { FC, HTMLAttributes, ElementType } from 'react';
import classNames from 'classnames';

export interface StepperContainerProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente Badge */
  className?: string;
  /** Abilita il tema scuro per il componente Stepper */
  dark?: boolean;
  /** Abilita la navigazione per mobile */
  mobile?: boolean;
}

export const StepperContainer: FC<StepperContainerProps> = ({
  tag = 'div',
  mobile,
  dark,
  className,
  ...attributes
}) => {
  const Tag = tag;
  const wrapperClass = classNames(
    'steppers',
    className,
    { 'bg-dark': dark },
    { 'mobile-examples': mobile }
  );
  return <Tag {...attributes} className={wrapperClass} />;
};
