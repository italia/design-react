import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Dimmer } from '../src';

// Test for breaking changes
test('Should support old className behaviour with the special flag', () => {
  const { container } = render(
    <Dimmer wrapperClassName={true} className={'myClass'} />
  );
  expect(container.firstChild).toHaveClass('myClass');
});
