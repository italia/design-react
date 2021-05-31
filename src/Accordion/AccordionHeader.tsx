import React, { FC, ReactNode, ElementType } from 'react';
import classNames from 'classnames';

export interface AccordionHeaderProps {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente AccordionHeader */
  className?: string;
  /** Utilizzare questo attributo per indicare se l'elemento è attivo o no */
  active?: boolean;
  /** Questa funzione verrà chiamata quando avviene un click sul componente AccordionHeader */
  onToggle?: () => void;
  /** Contenuto aggiuntivo all'interno del bottone dell'AccordionHeader */
  append?: ReactNode;
}

export const AccordionHeader: FC<AccordionHeaderProps> = ({
  className,
  tag = 'button',
  active = false,
  append,
  onToggle,
  ...attributes
}) => {
  const Tag = tag;
  const toggleClasses = classNames(className, {
    collapsed: active
  });

  return (
    <div className='collapse-header'>
      <Tag
        data-toggle='collapse'
        aria-expanded={active ? 'true' : 'false'}
        className={toggleClasses}
        onClick={onToggle}
        {...attributes}
      />
      {append}
    </div>
  );
};

// AccordionHeader.propTypes = propTypes
// AccordionHeader.defaultProps = defaultProps
