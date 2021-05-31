import React, { PureComponent, HTMLAttributes } from 'react';
import classNames from 'classnames';

import { HeaderContext, SLIM } from './HeaderContext';

export interface HeaderRightZoneProps extends HTMLAttributes<HTMLElement> {
  /** Classi addizionali per il componente HeaderLinkZone, applicata all'element "nav" annidato */
  className?: string;
}

export class HeaderRightZone extends PureComponent<HeaderRightZoneProps> {
  static contextType = HeaderContext;

  render() {
    const { className, ...attributes } = this.props;
    const { type } = this.context;
    const classes = classNames(className, {
      // BI >= 1.3.6
      'it-header-slim-right-zone': type === SLIM,
      // BI < 1.3.6
      'header-slim-right-zone': type === SLIM,
      'it-right-zone': type !== SLIM
    });
    return <div className={classes} {...attributes} />;
  }
}
