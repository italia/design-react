import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Section } from '../src';
import { muteConsoleWithCheck } from './helper';

// Test for breaking changes
test('Should support old neutral prop even as @deprecated', () => {
  const { container } = muteConsoleWithCheck(() => render(<Section neutral />));
  expect(container.firstChild).toHaveClass('section section-neutral');
});

test('Should support old muted prop even as @deprecated', () => {
  const { container } = muteConsoleWithCheck(() => render(<Section muted />));
  expect(container.firstChild).toHaveClass('section section-muted');
});

test('Should support new color prop', () => {
  const { container } = render(<Section color='neutral' />);
  expect(container.firstChild).toHaveClass('section section-neutral');
});

test('Should support old className behaviour with special flag', () => {
  const { container } = render(
    <Section className='myClass' wrapperClassName={true} />
  );
  expect(container.firstChild).toHaveClass('myClass');
});

test('Should not apply className to the wrapper', () => {
  const { container } = render(<Section className='myClass' />);
  expect(container.firstChild).not.toHaveClass('myClass');
});

test('Should apply wrapperClassName to the wrapper', () => {
  const { container } = render(<Section wrapperClassName='myClass' />);
  expect(container.firstChild).toHaveClass('myClass');
});

// Write more proper tests here
