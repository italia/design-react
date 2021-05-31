import React, { useState } from 'react';
import { Icon } from '../../../../src';

const InputIconButtonExample = () => {
  const [isFocused, toggleFocus] = useState(false);

  const toggleFocusLabel = () => toggleFocus(true);
  const toggleBlurLabel = (e) => {
    if (e.target.value === '') {
      toggleFocus(!isFocused);
    }
  };
  return (
    <div>
      <div className='form-group'>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <div className='input-group-text'>
              <Icon icon='it-pencil' aria-hidden size='sm' />
            </div>
          </div>
          <label htmlFor='input-group-1' className={isFocused ? 'active' : ''}>
            Con Etichetta
          </label>
          <input
            type='text'
            className={isFocused ? 'form-control focus--mouse' : 'form-control'}
            onFocus={toggleFocusLabel}
            onBlur={toggleBlurLabel}
            id='input-group-1'
            name='input-group-1'
          />
          <div className='input-group-append'>
            <button className='btn' type='button' id='button-1'>
              Invio
            </button>
          </div>
        </div>
      </div>
      <div className='form-group'>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <div className='input-group-text'>
              <Icon icon='it-pencil' color='danger' aria-hidden size='sm' />
            </div>
          </div>
          <label htmlFor='input-group-2' className='active'>
            Con Etichetta e placeholder
          </label>
          <input
            type='text'
            className={isFocused ? 'form-control focus--mouse' : 'form-control'}
            onFocus={toggleFocusLabel}
            onBlur={toggleBlurLabel}
            id='input-group-2'
            name='input-group-2'
            placeholder='Lorem Ipsum'
          />
          <div className='input-group-append'>
            <button className='btn' type='button' id='button-2'>
              Invio
            </button>
          </div>
        </div>
      </div>
      <div className='form-group'>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <div className='input-group-text'>
              <Icon icon='it-pencil' color='primary' aria-hidden size='sm' />
            </div>
          </div>
          <label htmlFor='input-group-3' className={isFocused ? 'active' : ''}>
            Con Etichetta e bottone di tipo primary
          </label>
          <input
            type='text'
            className={isFocused ? 'form-control focus--mouse' : 'form-control'}
            onFocus={toggleFocusLabel}
            onBlur={toggleBlurLabel}
            id='input-group-3'
            name='input-group-3'
          />
          <div className='input-group-append'>
            <button className='btn btn-primary' type='button' id='button-3'>
              Invio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputIconButtonExample;
