import React, {
  FC,
  AnchorHTMLAttributes,
  ElementType,
  MouseEvent,
  MouseEventHandler
} from 'react';
import classNames from 'classnames';

export interface LinkListItemProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Indica se l'elemento è attivo o no */
  active?: boolean;
  /** Indica se l'elemento è disabilitato o no */
  disabled?: boolean;
  /** Indica se l'elemento è un titolo. */
  header?: boolean;
  /** Indica se l'elemento è un divisore */
  divider?: boolean;
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente LinkListItem */
  className?: string;
  /** Indica il link a cui l'elemento deve puntare. */
  href?: string;
  /** Utilizzato per aumentare taglia/grandezza dell'elemento: può essere "medium" o "large". */
  size?: 'medium' | 'large';
}

const handleDisabledOnClick = (e: MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
};

export const LinkListItem: FC<LinkListItemProps> = ({
  className,
  active,
  disabled,
  header,
  divider,
  href,
  size,
  tag = 'a',
  children,
  ...attributes
}) => {
  let Tag = tag;
  const classes = classNames(
    className,
    {
      active,
      disabled,
      header,
      divider,
      size
    },
    'list-item'
  );

  // Prevent click event when disabled.
  const handlers: { onClick?: MouseEventHandler<HTMLAnchorElement> } = {};
  if (disabled) {
    handlers.onClick = handleDisabledOnClick;
  }

  if (header) {
    Tag = 'h3';
  } else if (divider) {
    Tag = 'span';
  }

  if (header && href) {
    return (
      <li>
        <Tag>
          <a
            href={href || '#'}
            {...attributes}
            className={classes}
            {...handlers}
          >
            {children}
          </a>
        </Tag>
      </li>
    );
  }

  return (
    <li>
      <Tag {...attributes} className={classes} href={href} {...handlers}>
        {children}
      </Tag>
    </li>
  );
};
