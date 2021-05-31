import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { StepperHeaderElement } from '../src';

// Test for breaking changes
test('Should support old variant "steppers-index" prop value as @deprecated', () => {
  const { container } = render(
    <StepperHeaderElement variant='steppers-index' />
  );
  expect(container.firstChild).toHaveClass('steppers-index');
});

test('Should support old icon prop as @deprecated', () => {
  const { getAllByRole } = render(<StepperHeaderElement icon='it-tool' />);
  expect(getAllByRole('img')).toHaveLength(1);
});

test('Should support old iconName prop as @deprecated', () => {
  const { getAllByRole } = render(<StepperHeaderElement iconName='it-tool' />);
  expect(getAllByRole('img')).toHaveLength(1);
});
