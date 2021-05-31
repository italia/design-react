import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Input } from '../src';

// Test for breaking changes
test('Should support old wrapperClass prop even as @deprecated', () => {
  const { container } = render(
    <Input wrapperClass='myClass' placeholder='write text here' />
  );
  expect(container.firstChild).toHaveClass('myClass');
});
