import React, { FC, HTMLAttributes, ElementType } from 'react';
import { CardText as InnerCardText, CSSModule } from 'reactstrap';

// Note: this is a wrapper class around a reactstrap component.
// TODO: remove this class and restore the direct import when
// https://github.com/storybookjs/storybook/issues/10536 gets resolved

export interface CardTextProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente CardText */
  className?: string;
  /** Oggetto contenente la nuova mappatura per le classi CSS. */
  cssModule?: CSSModule;
}

export const CardText: FC<CardTextProps> = (props) => {
  return <InnerCardText {...props} />;
};
