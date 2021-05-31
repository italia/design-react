import React from 'react';
import {
  Button,
  Icon,
  StepperContainer,
  StepperContent,
  StepperNav,
  StepperDots
} from '../../src';

const PalliniNavMobile = () => {
  return (
    <StepperContainer mobile>
      <StepperContent>
        <p>Example content of the current step</p>
      </StepperContent>
      <StepperNav>
        <Button outline color='primary' size='sm' className='steppers-btn-prev'>
          <Icon icon='it-chevron-left' color='primary' />
          Back
        </Button>
        <StepperDots>
          <li className='done'></li>
          <li className='done'></li>
          <li className='done'></li>
          <li></li>
          <li></li>
          <li></li>
        </StepperDots>
        <Button outline color='primary' size='sm' className='steppers-btn-next'>
          Next
          <Icon icon='it-chevron-right' color='primary' />
        </Button>
      </StepperNav>
    </StepperContainer>
  );
};

export default PalliniNavMobile;
