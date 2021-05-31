import React, { FC, HTMLAttributes, ElementType, Ref } from 'react';
import classNames from 'classnames';
import { Card as CardBase, CSSModule } from 'reactstrap';

export interface CardProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente Card */
  className?: string;
  /** Da utilizzare per impostare un riferimento all'elemento DOM */
  innerRef?: Ref<HTMLElement>;
  /** Oggetto contenente la nuova mappatura per le classi CSS. */
  cssModule?: CSSModule;
  /** Abilita la versione teaser della Card */
  teaser?: boolean;
  /** Quando attivo distanzia la Card nella versione mobile */
  spacing?: boolean;
  /** Quando attivo rimuove il componente contenitore della carta. Utile per card multiple nello stesso contenitore */
  noWrapper?: boolean;
  /** Classi aggiuntive per l'elemento contenitore */
  wrapperClassName?: string;
}

export const Card: FC<CardProps> = ({
  tag = 'div',
  teaser,
  spacing,
  noWrapper = false,
  wrapperClassName,
  ...attributes
}) => {
  const wrapperClasses = classNames('card-wrapper', wrapperClassName, {
    'card-space': spacing,
    'card-teaser-wrapper': teaser
  });
  const cardClasses = classNames(attributes.className, {
    'card-teaser': teaser
  });

  if (noWrapper) {
    return <CardBase {...attributes} className={cardClasses} tag={tag} />;
  }

  return (
    <div className={wrapperClasses}>
      <CardBase {...attributes} className={cardClasses} tag={tag} />
    </div>
  );
};
