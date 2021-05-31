import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { DimmerButtons } from '../src';

// Test for breaking changes
test('Should support old dark behaviour with the special flag', () => {
  const { container } = render(<DimmerButtons dark={false} />);
  expect(container.firstChild).not.toHaveClass('bg-dark');
});
