import React from 'react';
import {
  StepperContainer,
  StepperHeader,
  StepperHeaderElement,
  StepperContent,
  StepperNav,
  Button,
  Icon
} from '../../src';

const StepperDarkVersion = () => {
  return (
    <StepperContainer dark>
      <StepperHeader>
        <StepperHeaderElement variant='confirmed' appendIcon='it-check'>
          Label Step 1
        </StepperHeaderElement>
        <StepperHeaderElement variant='active'>
          Label Step 2
        </StepperHeaderElement>
        <StepperHeaderElement>Label Step 3</StepperHeaderElement>
        <StepperHeaderElement variant='mobile'>2/6</StepperHeaderElement>
      </StepperHeader>
      <StepperContent dark>
        <p>Example content of the current step</p>
      </StepperContent>
      <StepperNav>
        <Button outline color='primary' size='sm' className='steppers-btn-prev'>
          <Icon icon='it-chevron-left' color='primary' />
          Back
        </Button>
        <Button outline color='primary' size='sm' className='steppers-btn-next'>
          Next
          <Icon icon='it-chevron-right' color='primary' />
        </Button>
        <Button
          color='primary'
          size='sm'
          className='stepper-btn-confirm d-none d-lg-block'
        >
          Confirmation
        </Button>
      </StepperNav>
    </StepperContainer>
  );
};

StepperDarkVersion.story = {
  name: 'Version on a dark background'
};

export default StepperDarkVersion;
