import React from 'react';

import { Row, Col, Form, FormGroup, Label, Input, FormText } from '../../src';

export default {
  title: 'Componenti/Form/Checkbox'
};

export const CheckboxBase = () => (
  <Form className='m-3'>
    <fieldset>
      <legend>Checkbox</legend>
      <FormGroup check>
        <Input id='checkbox1' type='checkbox' />
        <Label for='checkbox1' check>
          Checkbox di esempio
        </Label>
      </FormGroup>
    </fieldset>
  </Form>
);

export const CheckboxInline = () => (
  <section>
    <fieldset>
      <legend>Checkbox</legend>
      <Form className='m-3'>
        <FormGroup check inline>
          <Input id='checkbox1' type='checkbox' />
          <Label for='checkbox1' check>
            Checkbox non selezionato
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Input id='checkbox2' type='checkbox' defaultChecked />
          <Label for='checkbox2' check>
            Checkbox selezionato
          </Label>
        </FormGroup>
      </Form>
    </fieldset>
  </section>
);

export const CheckboxDisabilitato = () => (
  <section>
    <fieldset>
      <legend>Checkbox</legend>
      <Form className='m-3'>
        <FormGroup check>
          <Input disabled id='checkbox1' type='checkbox' />
          <Label for='checkbox1' check>
            Checkbox disabilitato non selezionato
          </Label>
        </FormGroup>
        <FormGroup check>
          <Input disabled id='checkbox2' type='checkbox' defaultChecked />
          <Label for='checkbox2' check>
            Checkbox disabilitato selezionato
          </Label>
        </FormGroup>
      </Form>
    </fieldset>
  </section>
);

export const CheckboxGruppi = () => (
  <section>
    <Row className='m-5'>
      <Col md={5}>
        <fieldset>
          <legend>Checkbox</legend>
          <Form>
            <FormGroup check className='form-check-group'>
              <Input id='checkbox1' type='checkbox' defaultChecked />
              <Label for='checkbox1' check>
                Checkbox selezionato
              </Label>
            </FormGroup>
            <FormGroup check className='form-check-group'>
              <Input id='checkbox2' type='checkbox' />
              <Label for='checkbox2' check>
                Checkbox non selezionato
              </Label>
            </FormGroup>
            <FormGroup check className='form-check-group'>
              <Input id='checkbox3' type='checkbox' disabled />
              <Label for='checkbox3' check>
                Checkbox disabilitato non selezionato
              </Label>
            </FormGroup>
          </Form>
        </fieldset>
      </Col>
      <Col md={2} />
      <Col md={5}>
        <fieldset>
          <legend>Checkbox</legend>
          <Form>
            <FormGroup check className='form-check-group'>
              <Input id='checkbox4' type='checkbox' defaultChecked />
              <Label for='checkbox4' check>
                Checkbox selezionato
              </Label>
              <FormText color=''>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas molestie libero
              </FormText>
            </FormGroup>
            <FormGroup check className='form-check-group'>
              <Input id='checkbox5' type='checkbox' />
              <Label for='checkbox5' check>
                Checkbox non selezionato
              </Label>
              <FormText color=''>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas molestie libero
              </FormText>
            </FormGroup>
            <FormGroup check className='form-check-group'>
              <Input id='checkbox6' type='checkbox' disabled />
              <Label for='checkbox6' check>
                Checkbox disabilitato non selezionato
              </Label>
              <FormText color=''>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas molestie libero
              </FormText>
            </FormGroup>
          </Form>
        </fieldset>
      </Col>
    </Row>
  </section>
);
