import React, { Fragment, FC, ReactNode } from 'react';
import classNames from 'classnames';

import { FormGroup, Label } from 'reactstrap';
import { Input } from '../Input/Input';
import type { InputProps } from '../Input/Input';
import { Icon } from '../Icon/Icon';
import { noop } from '../utils';

export interface RatingProps extends InputProps {
  /** La lista di 5 id, per ciascun elemento intero del Rating. La lista deve essere ordinata dal rating 1 al rating 5.  */
  inputs: string[];
  /** Il campo "label" è impostato di default su "Valuta ${n} stelle su 5", ma può essere personalizzato con questa funzione che riceve il numero input come argomento `function (n: number) => string`. */
  labelTemplate?: (value: 1 | 2 | 3 | 4 | 5) => string;
  /** Da utilizzare in caso legenda principale del Rating. Passare una componente React da mostrare come legenda (all'interno del tag `<legend>`). È possibile mostrare la leggenda solo ai dispositivi screen reader */
  legend?: ReactNode | { content: ReactNode; srOnly: boolean };
  /** Parametro name da dare all'input */
  name: string;
  /** Classi aggiuntive da usare per il componente wrapper del Rating */
  wrapperClassName?: string;
  /** Classi aggiuntive da usare per ciascun elemento all'interno del componente Rating */
  className?: string;
  /** Callback chiamata ad ogni cambio di valore di rating. Il nuovo valore ed il name verranno passati: `function (n, name) => void` */
  onChangeRating?: (value: 1 | 2 | 3 | 4 | 5 | number, name: string) => void;
  /** Rende il componente read-only */
  readOnly?: boolean;
  /** Il valore corrente del componente: deve essere compreso tra 1 e 5 */
  value?: 1 | 2 | 3 | 4 | 5 | number;
}

function isCustomLegendObject(
  legend: ReactNode | { content: ReactNode; srOnly: boolean }
): legend is { content: ReactNode; srOnly: boolean } {
  return legend != null && typeof legend === 'object' && 'content' in legend;
}

export const Rating: FC<RatingProps> = ({
  className,
  inputs,
  legend,
  name,
  readOnly,
  value,
  wrapperClassName,
  labelTemplate = (value: 1 | 2 | 3 | 4 | 5) => `Valuta ${value} stelle su 5`,
  onChangeRating = noop,
  ...attributes
}) => {
  // Input data
  // On the DOM we have to go from 5 to 1
  const safeInputs = (inputs || []).reverse();

  // Fields
  const labelFn = labelTemplate;

  const onChange = readOnly ? onChangeRating : noop;

  const wrapperClasses = classNames(wrapperClassName, {
    'rating-read-only': readOnly,
    'rating-label': legend
  });
  const fieldClasses = classNames(className);
  const extraFieldAttrs = readOnly ? { ariaHidden: 'true' } : {};

  // Legend
  const isLegendString = typeof legend === 'string';

  let legendClass: string = '';
  let legendText: ReactNode = legend as string;

  if (isCustomLegendObject(legend)) {
    legendClass = classNames({
      'sr-only': legend.srOnly
    });
    legendText = legend.content;
  }

  const legendContent =
    isCustomLegendObject(legend) || isLegendString ? (
      <legend className={legendClass}>{legendText}</legend>
    ) : (
      legend
    );

  return (
    <FormGroup
      cssModule={{ 'form-group': 'rating' }}
      tag='fieldset'
      className={wrapperClasses}
      {...attributes}
    >
      {legend && legendContent}
      {safeInputs.map((id, i) => {
        const currentValue = (5 - i) as 1 | 2 | 3 | 4 | 5;

        return (
          <Fragment key={id}>
            <Input
              type='radio'
              id={id}
              name={name}
              value={String(currentValue)}
              cssModule={{ 'form-control': ' ' }}
              className={fieldClasses}
              onClick={() => onChange(currentValue, name)}
              checked={value === currentValue}
              disabled={readOnly}
              {...extraFieldAttrs}
            />
            <Label className='full' for={id}>
              <Icon icon='it-star-full' size='sm' />
              <span className='sr-only'>{labelFn(currentValue)}</span>
            </Label>
          </Fragment>
        );
      })}
    </FormGroup>
  );
};
