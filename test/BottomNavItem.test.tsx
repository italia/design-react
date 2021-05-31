import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { BottomNavItem } from '../src';

// Test for breaking changes
test('Should support old link props as @deprecated', () => {
  const { getByRole } = render(<BottomNavItem link={'/my-url'} />);
  expect(getByRole('link')).toHaveAttribute('href', '/my-url');
});
