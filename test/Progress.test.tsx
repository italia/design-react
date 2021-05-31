import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Progress } from '../src';
import { muteConsoleWithCheck } from './helper';

// Tests for breaking changes here
test('Should support old className behaviour with special flag', () => {
  const { container } = render(
    <Progress className='myClass' wrapperClassName={true} value={1} />
  );
  expect(container.firstChild).toHaveClass('myClass');
});

test('Should not apply className to the wrapper', () => {
  const { container } = render(<Progress className='myClass' value={1} />);
  expect(container.firstChild).not.toHaveClass('myClass');
});

test('Should apply wrapperClassName to the wrapper', () => {
  const { container } = render(
    <Progress wrapperClassName='myClass' value={1} />
  );
  expect(container.firstChild).toHaveClass('myClass');
});

// Write more proper tests here
test('Should log an error when value is not a number', () => {
  const { container } = muteConsoleWithCheck(() =>
    render(<Progress wrapperClassName='myClass' value={'a'} />)
  );
  expect(container.firstChild).toHaveClass('myClass');
});

test('Should be ok with a numeric string as for value', () => {
  const { container } = render(
    <Progress wrapperClassName='myClass' value={'1'} />
  );
  expect(container.firstChild).toHaveClass('myClass');
});
