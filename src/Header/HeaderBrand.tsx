import React, {
  AnchorHTMLAttributes,
  ElementType,
  ReactChild,
  PureComponent
} from 'react';
import classNames from 'classnames';
import { CSSModule, NavbarBrand } from 'reactstrap';
import { HeaderContext, CENTER } from './HeaderContext';
import { Icon } from '../Icon/Icon';

export interface HeaderBrandProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente HeaderBrand */
  className?: string;
  /** Oggetto contenente la nuova mappatura per le classi CSS. */
  cssModule?: CSSModule;
  /** Da usare con il componente Header Nav in versione "responsive" */
  responsive?: boolean;
  /** Da utilizzare per specificare URL risorsa esterna. */
  href?: string;
  /** Icona da utilizzare nel componente. Utilizzata unicamente quando l'Header è di tipo Center.  */
  iconName?: string;
  /** Elementi React da renderizzare al proprio interno. */
  children: ReactChild | ReactChild[];
}

export class HeaderBrand extends PureComponent<HeaderBrandProps> {
  static contextType = HeaderContext;

  render() {
    const {
      className,
      href,
      iconName,
      children,
      tag = 'a',
      responsive = false,
      ...attributes
    } = this.props;
    const { type } = this.context;
    const defaultAttributes = { tag };
    if (type !== CENTER) {
      const classes = classNames('d-lg-block', className, {
        'd-none': !responsive
      });
      return (
        <NavbarBrand
          className={classes}
          href={href}
          {...attributes}
          {...defaultAttributes}
        >
          {children}
        </NavbarBrand>
      );
    }
    return (
      <div className='it-brand-wrapper'>
        <a href={href}>
          {iconName && <Icon icon={iconName} />}
          <div className='it-brand-text'>
            {React.Children.map(children, (child, i) => {
              if (
                typeof child !== 'object' ||
                child == null ||
                !('props' in child)
              ) {
                return child;
              }
              // convention here: first item is the main title, while others subtext
              const className = classNames(
                child.props.className,
                'no_toc',
                { 'd-none d-md-block': i } // subtext is anything but first element
              );

              const props = {
                className
              };

              return React.cloneElement(child, props);
            })}
          </div>
        </a>
      </div>
    );
  }
}
