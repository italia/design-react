import React, { PureComponent, ElementType, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import { NavbarToggler } from 'reactstrap';

import { HeaderContext, SLIM, NAVBAR } from './HeaderContext';

export interface HeaderTogglerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Tipo di elemento DOM da utilizzare: di default "a" per Header Slim, "button" per altri tipi di Header.
   * Se fornito questo sovrascriverà il valore di default.
   */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente HeaderToggler */
  className?: string;
  /** Indica l'attributo "type" sull'elemento DOM. Di default '' per Header Slim, "button" per altri tipi di Header.
   * Se fornito questo sovrascriverà il valore di default.
   */
  type?: 'button' | 'submit' | 'reset';
}

export class HeaderToggler extends PureComponent<HeaderTogglerProps> {
  static contextType = HeaderContext;
  render() {
    const { className, tag, type, ...attributes } = this.props;
    const { type: HeaderType } = this.context;
    const BUTTON = 'button';
    const defaultTag = HeaderType === SLIM ? 'a' : BUTTON;
    const defaultType = HeaderType === SLIM ? undefined : BUTTON;
    const classes = classNames(
      {
        'it-opener d-lg-none': HeaderType === SLIM,
        'custom-navbar-toggler': HeaderType === NAVBAR
      },
      className
    );
    return (
      <NavbarToggler
        className={classes}
        {...attributes}
        tag={tag || defaultTag}
        type={type || defaultType}
        href='#'
      />
    );
  }
}
