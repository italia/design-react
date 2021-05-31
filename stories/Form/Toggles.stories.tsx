import React from 'react';

import { Row, Col, Form, FormGroup, FormText, Toggle } from '../../src';

export default {
  title: 'Componenti/Form/Toggles'
};

export const _Toggles = () => {
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

export const _TogglesDisabilitate = () => {
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
export const GruppiDiToggles = () => {
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

GruppiDiToggles.story = {
  name: 'Gruppi di Toggles'
};
