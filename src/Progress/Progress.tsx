import React, { FC, HTMLAttributes, ElementType } from 'react';
import classNames from 'classnames';
import isNumber from 'is-number';
import { logError } from '../utils';

export interface ProgressProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /**
   * Classi aggiuntive da usare per il componente contenitore del Progress
   * Per replicare il comportamento precedente, in cui `className` veniva applicato anche al wrapper,
   * passare `true`.
   * */
  wrapperClassName?: string | true;
  /** Classi aggiuntive da usare per il componente interno del Progress */
  className?: string;
  /** Valore corrente (numerico) */
  value?: number | string;
  /** Etichetta con testo per indicare il progresso corrente da mostrare ai dispositivi screen reader */
  label?: string;
  /** Quando non è possibile stabilire una percentuale di progressione utilizzare una Progress Bar di tipo indeterminato */
  indeterminate?: boolean;
  /** Le varianti di colore definite in Bootstrap Italia */
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | string;
}

export const Progress: FC<ProgressProps> = ({
  wrapperClassName,
  className,
  tag = 'div',
  value,
  label,
  indeterminate = false,
  color,
  role = 'progressbar',
  ...attributes
}) => {
  const Tag = tag;
  if (!isNumber(value) && !indeterminate) {
    logError(`The passed "value" is not a valid number. You passed "${value}"`);
  }
  const numericValue = Number(value);
  const wrapperClasses = classNames('progress-bar-wrapper');
  const secondaryWrapperClasses = classNames(
    wrapperClassName === true ? className : wrapperClassName,
    'progress',
    {
      'progress-indeterminate': indeterminate,
      'progress-color': color
    }
  );
  const classes = classNames(className, 'progress-bar', {
    [`bg-${color}`]: color
  });

  if (label && numericValue) {
    return (
      <Tag className={wrapperClasses}>
        <div className='progress-bar-label'>
          <span className='sr-only'>{label}</span>
          {numericValue + '%'}
        </div>
        <Tag className={secondaryWrapperClasses}>
          <div
            {...attributes}
            className={classes}
            role='progressbar'
            style={{ width: numericValue + '%' }}
            aria-valuenow={numericValue}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </Tag>
      </Tag>
    );
  }

  return (
    <Tag className={secondaryWrapperClasses}>
      <div className='progress-bar-label'>
        <span className='sr-only'>{label}</span>
      </div>
      <div
        {...attributes}
        className={classes}
        role='progressbar'
        style={{ width: numericValue + '%' }}
        aria-valuenow={numericValue}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </Tag>
  );
};
