import React, { ElementType, FC, HTMLAttributes, Ref } from 'react';
import classNames from 'classnames';

import { Collapse as CollapseBase, CSSModule } from 'reactstrap';

// Copy over from reactstrap and add new ones
export interface CollapseProps extends HTMLAttributes<HTMLElement> {
  /** Indica se il menu HeaderNav sia aperto o meno. Usato unicamente nel caso della HeaderNav, ovvero con navbar e header entrambi true */
  isOpen?: boolean;
  /** Oggetto contenente la nuova mappatura per le classi CSS. */
  cssModule?: CSSModule;
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Indica se il componente Collapse è usato all'interno di un componente navbar */
  navbar?: boolean;
  /** Indica se il componente Collapse è usato all'interno di un componente Header */
  header?: boolean;
  delay?: {
    show: number;
    hide: number;
  };
  /** Funzione chiamata all'apertura del componente Collapse */
  onOpened?: () => void;
  /** Funzione chiamata alla chiusura del componente Collapse */
  onClosed?: () => void;
  /** Funzione chiamata durante la trasizione di apertura del componente Collapse */
  onEntering?: () => void;
  /** Funzione chiamata al termine della trasizione di apertura del componente Collapse */
  onEntered?: () => void;
  onExit?: () => void;
  /** Funzione chiamata durante la trasizione di chiusura del componente Collapse */
  onExiting?: () => void;
  /** Funzione chiamata al termine della trasizione di chiusura del componente Collapse */
  onExited?: () => void;
  /** Funzione chiamata su click di overlay dell'HeaderNav aperto. Usato unicamente nel caso della HeaderNav, ovvero con navbar e header entrambi true */
  onOverlayClick?: () => void;
  /** Da utilizzare per impostare un riferimento all'elemento DOM */
  innerRef?: Ref<HTMLElement>;
}

export const Collapse: FC<CollapseProps> = ({
  header = false,
  className,
  navbar,
  children,
  isOpen = false,
  onOverlayClick,
  ...attributes
}) => {
  if (navbar && header) {
    const classes = classNames(className, 'navbar-collapse', {
      expanded: isOpen
    });
    return (
      <CollapseBase
        className={classes}
        cssModule={{ 'navbar-collapse': 'navbar-collapsable' }}
        navbar={navbar}
        style={{ display: isOpen ? 'block' : 'none' }}
        {...attributes}
      >
        <div
          className='overlay'
          style={{ display: isOpen ? 'block' : 'none' }}
          onClick={onOverlayClick}
        ></div>
        <div className='close-div sr-only'>
          <button className='btn close-menu' type='button'>
            <span className='it-close'></span>close
          </button>
        </div>
        {children}
      </CollapseBase>
    );
  }
  const classes = classNames(className, {
    'link-list-wrapper': header
  });

  return (
    <CollapseBase
      className={classes}
      cssModule={{ 'navbar-collapse': 'navbar-collapsable' }}
      {...attributes}
      navbar={navbar}
      isOpen={isOpen}
    >
      {children}
    </CollapseBase>
  );
};
