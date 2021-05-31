import React, { FC, HTMLAttributes, ElementType } from 'react';
import { CSSModule, Jumbotron } from 'reactstrap';

export interface HeroProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Indica se il componente Hero deve estendersi per tutta la lunghezza disponibile. */
  fluid?: boolean;
  /** Oggetto contenente la nuova mappatura per le classi CSS. */
  cssModule?: CSSModule;
}

export const Hero: FC<HeroProps> = ({ tag = 'div', ...attributes }) => {
  return <Jumbotron tag={tag} {...attributes} />;
};
