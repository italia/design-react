import React, { FC, AnchorHTMLAttributes, MutableRefObject } from 'react';
import classNames from 'classnames';

// SSR does have no access to the Element global variable, so mock it
if (typeof window === 'undefined') {
  global.Element =
    typeof Element === 'undefined'
      ? (function () {} as typeof Element)
      : Element;
}

export interface ForwardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Classi aggiuntive da usare per il componente Forward */
  className?: string;
  /** Riferimento al nodo a cui scorrere quando premuto */
  scrollToRef: MutableRefObject<Element>;
}

export const Forward: FC<ForwardProps> = ({
  className,
  scrollToRef,
  children,
  ...attributes
}) => {
  const classes = classNames(className, 'forward');
  return (
    <a
      className={classes}
      onClick={() =>
        scrollToRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
      {...attributes}
    >
      {children}
    </a>
  );
};
