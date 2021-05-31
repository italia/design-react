import React from 'react';

import { Row, Col, FormGroup, Toggle } from '../../../src';

export const TogglesExampleEnabled = () => {
  return (
    <Row>
      <Col sm='6'>
        <FormGroup check className='m-3'>
          <Toggle label="Label dell'interruttore 1" disabled={false} />
        </FormGroup>
      </Col>
      <Col sm='6'>
        <FormGroup check className='m-3'>
          <Toggle
            label={<span>Label dell&apos;interruttore 2</span>}
            defaultChecked
            disabled={false}
          />
        </FormGroup>
      </Col>
    </Row>
  );
};

export const TogglesExampleDisabled = () => {
  return (
    <Row>
      <Col sm='6'>
        <FormGroup check className='m-3'>
          <Toggle label="Label dell'interruttore 1" disabled={true} />
        </FormGroup>
      </Col>
      <Col sm='6'>
        <FormGroup check className='m-3'>
          <Toggle
            label={<span>Label dell&apos;interruttore 2</span>}
            defaultChecked
            disabled={true}
          />
        </FormGroup>
      </Col>
    </Row>
  );
};
