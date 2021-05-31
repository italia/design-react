import React, { FC, HTMLAttributes, ElementType } from 'react';
import { Nav as NavBase } from 'reactstrap';
import classNames from 'classnames';

export interface NavProps extends HTMLAttributes<HTMLUListElement> {
  /**
   * Renderizza i componenti NavItem al suo interno come tab.
   */
  tabs?: boolean;
  /**
   * Renderizza i componenti NavItem al suo interno come pills.
   */
  pills?: boolean;
  /**
   * Renderizza i componenti NavItem al suo interno come card.
   */
  card?: boolean;
  /**
   * Se utilizzata all'interno di una navbar, impostarlo su `true`. In caso di Header Nav, impostarlo a `true`.
   */
  navbar?: boolean;
  /** Se abilitato tutti i NavItem all'interno avranno la stessa larghezza */
  justified?: boolean;
  /** Se abilitato i NavItem all'intero occuperanno tutto lo spazio disponibile  */
  fill?: boolean;
  /** Da utilizzare per rendere il componente Nav verticale. Viene abilitato automaticamente in versione mobile. Valori possibili sono `true`, `false` o `"xs"` */
  vertical?: boolean | 'xs';
  /** Da utilizzare per cambiare l'allineamento all'interno della Nav. Valori possibili sono `"center"` o `"end"` per posizionare il contenuto a centro o sulla destra. */
  horizontal?: 'center' | 'end';
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente Nav */
  className?: string;
  /** Adds ability to incorporate secondary nav items */
  secondary?: boolean;
}

export const Nav: FC<NavProps> = ({
  className,
  tag = 'ul',
  vertical = false,
  secondary,
  ...attributes
}) => {
  const classes = classNames(className, {
    'navbar-secondary': secondary
  });
  return (
    <NavBase
      className={classes}
      tag={tag}
      vertical={vertical}
      {...attributes}
    />
  );
};
