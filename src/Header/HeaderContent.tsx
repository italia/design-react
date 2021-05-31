import React, { HTMLAttributes, PureComponent } from 'react';
import classNames from 'classnames';
import { Navbar } from 'reactstrap';

import { HeaderContext, SLIM, CENTER, NAVBAR } from './HeaderContext';

export interface HeaderContentProps extends HTMLAttributes<HTMLElement> {
  /** Classi aggiuntive da usare per il componente HeaderContent */
  className?: string;
  /** Da utilizzare per indicare che all'interno dell'Header verrà utilizzato un Megamenu */
  megamenu?: boolean;
  /** Parametro per il controllo responsive del componente secondo Bootstrap Italia. */
  expand?: boolean | 'sm' | 'md' | 'lg' | 'xl';
}

export class HeaderContent extends PureComponent<HeaderContentProps> {
  static contextType = HeaderContext;
  render() {
    const { className, megamenu, ...attributes } = this.props;
    const { type } = this.context;
    const classes = classNames(className, {
      'it-header-slim-wrapper-content': type === SLIM,
      'it-header-center-content-wrapper': type === CENTER,
      navbar: type === NAVBAR,
      'has-megamenu': megamenu
    });

    const Content =
      type === NAVBAR ? (
        <Navbar className={classes} {...attributes} />
      ) : (
        <div className={classes} {...attributes} />
      );
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12'>{Content}</div>
        </div>
      </div>
    );
  }
}
