import React from 'react';

import { Row, Col, Form, FormGroup, FormText, Toggle } from '../../../src';

const TogglesGroupsExample = () => {
  return (
    <Row className='m-5'>
      <Col md={5}>
        <Form>
          <FormGroup check className='form-check-group'>
            <Toggle defaultChecked label='Toggle acceso' />
          </FormGroup>
          <FormGroup check className='form-check-group'>
            <Toggle label='Toggle spento' />
          </FormGroup>
          <FormGroup check className='form-check-group'>
            <Toggle disabled label='Toggle disabilitato' />
          </FormGroup>
        </Form>
      </Col>
      <Col md={2} />
      <Col md={5}>
        <Form>
          <FormGroup check className='form-check-group'>
            <Toggle defaultChecked label='Toggle acceso' />
            <FormText color='muted'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              molestie libero
            </FormText>
          </FormGroup>
          <FormGroup check className='form-check-group'>
            <Toggle label='Toggle spento' />
            <FormText color='muted'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              molestie libero
            </FormText>
          </FormGroup>
          <FormGroup check className='form-check-group'>
            <Toggle disabled label='Toggle disabilitato' />
            <FormText color='muted'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              molestie libero
            </FormText>
          </FormGroup>
        </Form>
      </Col>
    </Row>
  );
};

export default TogglesGroupsExample;
