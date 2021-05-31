import React, { FC, HTMLAttributes, ReactChild } from 'react';
import classNames from 'classnames';
import { notifyDeprecation } from '../utils';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /**
   * Classi aggiuntive da usare per il contenitore più esterno
   * Per replicare il comportamento precedente, in cui `className` veniva applicato anche al wrapper,
   * passare `true`.
   * */
  wrapperClassName?: string | true;
  /** Classi aggiuntive da usare per il contenitore più interno */
  className?: string;
  /**
   * Colore utilizzato per lo sfondo del componente Section.
   * In caso di `primary` o `neutral` si consiglia di applicare la classe `.white-color` al contenuto per garantire la leggibilità dei testi.
   * */
  color?: 'primary' | 'neutral' | 'muted' | string;
  /**
   * Indicare l'URL dell'immagine da utilizzare come sfondo della sezione.
   */
  image?: string;
  /** Il contenuto della sezione */
  children?: ReactChild | ReactChild[];
  /** Quando abilitato applica lo sfondo di tipo "neutral" al componente.
   * @deprecated. Utilizzare `color="neutral"`
   */
  neutral?: boolean;
  /** Quando abilitato applica lo sfondo di tipo "muted" al componente.
   * @deprecated. Utilizzare `color="muted"`
   */
  muted?: boolean;
}

export const Section: FC<SectionProps> = ({
  color,
  image,
  wrapperClassName,
  className,
  children,
  neutral,
  muted,
  ...rest
}) => {
  const classes = classNames(
    'section',
    wrapperClassName === true ? className : wrapperClassName,
    {
      [`section-${color}`]: color,
      'section-image': image
    }
  );

  if (neutral || muted) {
    notifyDeprecation(
      `Please use the prop "color" instead of the "${
        neutral ? 'neutral' : 'muted'
      }" for the Section component.`
    );
  }

  // have them separated from the classes above or these will conflict with the color prop
  // concatenate them at the end. Worst case a duplicate class will appear
  const deprecatedClasses = classNames({
    'section-neutral': neutral,
    'section-muted': muted
  });

  const innerClasses = classNames('section-content', className);

  const styleClass = {
    backgroundImageClass: {
      backgroundImage: `url(${image})`
    }
  };

  return (
    <div
      className={`${classes}${
        deprecatedClasses ? ' ' + deprecatedClasses : ''
      }`}
      style={styleClass.backgroundImageClass}
      {...rest}
    >
      <div className={innerClasses}>{children}</div>
    </div>
  );
};
