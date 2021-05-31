import React from 'react';
import {
  StepperContainer,
  StepperHeader,
  StepperHeaderElement,
  Icon
} from '../../src';

const StepperOrderOfSteps = () => {
  return (
    <StepperContainer>
      <StepperHeader>
        <StepperHeaderElement
          variant='confirmed'
          stepperNumber={<Icon icon='it-check' />}
        >
          Label Step 1
        </StepperHeaderElement>
        <StepperHeaderElement
          variant='active'
          noLine
          stepperNumber={<span>2</span>}
        >
          Label Step 2
        </StepperHeaderElement>
        <StepperHeaderElement stepperNumber={<span>3</span>}>
          Label Step 3
        </StepperHeaderElement>
      </StepperHeader>
    </StepperContainer>
  );
};

StepperOrderOfSteps.story = {
  name: 'Order of the steps'
};

export default StepperOrderOfSteps;
