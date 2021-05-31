import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Notification, NotificationProps } from '../src';
import { muteConsoleWithCheck } from './helper';

// Tests for breaking changes here
test('Should still support header prop as @deprecated', () => {
  const { container } = muteConsoleWithCheck(() =>
    render(<Notification header='Header title' />)
  );
  expect(container.firstChild).toHaveTextContent('Header title');
});

for (const position of ['top', 'bottom', 'right', 'left']) {
  test(`Should support ${position} positional props as @deprecated`, () => {
    const { container } = muteConsoleWithCheck(() =>
      render(
        <Notification fix={`${position}-fix` as NotificationProps['fix']} />
      )
    );
    expect(container.firstChild).toHaveClass(`${position}-fix`);
  });
}

// Write more proper tests here
