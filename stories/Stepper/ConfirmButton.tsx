import React from 'react';
import {
  Button,
  Icon,
  StepperContainer,
  StepperContent,
  StepperNav
} from '../../src';

const ConfirmButton = () => {
  return (
    <StepperContainer mobile>
      <StepperContent>
        <p>Example content of the current step</p>
      </StepperContent>
      <StepperNav>
        <Button outline color='primary' size='sm' className='steppers-btn-prev'>
          <Icon icon='it-chevron-left' />
          Back
        </Button>
        <Button color='primary' size='sm' className='steppers-btn-confirm'>
          Confirm
        </Button>
      </StepperNav>
    </StepperContainer>
  );
};

export default ConfirmButton;
