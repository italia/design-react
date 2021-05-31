import React, { FC, HTMLAttributes, ElementType } from 'react';
import { CardTitle as InnerCardTitle } from 'reactstrap';

// Note: this is a wrapper class around a reactstrap component.
// TODO: remove this class and restore the direct import when
// https://github.com/storybookjs/storybook/issues/10536 gets resolved

export interface CardTitleProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente CardTitle */
  className?: string;
}

export const CardTitle: FC<CardTitleProps> = (props) => {
  return <InnerCardTitle {...props} />;
};
