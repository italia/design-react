import React from 'react';
import {
  Button,
  Icon,
  Progress,
  StepperContainer,
  StepperContent,
  StepperNav
} from '../../src';

const ProgressBarNavMobile = () => {
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
        <div className='steppers-progress'>
          <Progress
            indeterminate={false}
            value='33'
            tag='div'
            style={{ width: '33%' }}
          />
        </div>
        <Button outline color='primary' size='sm' className='steppers-btn-next'>
          Next
          <Icon icon='it-chevron-right' color='primary' />
        </Button>
      </StepperNav>
    </StepperContainer>
  );
};

ProgressBarNavMobile.story = {
  name: 'Progress bar'
};

export default ProgressBarNavMobile;
