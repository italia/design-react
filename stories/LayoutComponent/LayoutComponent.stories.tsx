import React from 'react';

import { Container, Row, Col } from '../../src';

export default {
  title: 'Componenti/Layout Component'
};

export const StandardizeWidths = () => (
  <div>
    <Container>
      <Row>
        <Col className='p-3 mb-2 text-white bg-dark'> 1 di 2</Col>
        <Col className='p-3 mb-2 text-white bg-primary'>2 di 2</Col>
      </Row>
      <Row>
        <Col className='p-3 mb-2 text-white bg-dark'>1 di 3</Col>
        <Col className='p-3 mb-2 text-white bg-primary'>2 di 3</Col>
        <Col className='p-3 mb-2 text-white bg-dark'>3 di 3</Col>
      </Row>
    </Container>
  </div>
);

StandardizeWidths.story = {
  name: 'Larghezze standard'
};

export const SetWidthOfColumn = () => (
  <div>
    <Container>
      <Row>
        <Col className='p-3 mb-2 text-white bg-dark'> 1 di 3</Col>
        <Col xs='6' className='p-3 mb-2 text-white bg-primary'>
          2 di 3 (larga 6/12)
        </Col>
        <Col className='p-3 mb-2 text-white bg-dark'>3 di 3</Col>
      </Row>
      <Row>
        <Col className='p-3 mb-2 text-white bg-dark'>1 di 3</Col>
        <Col xs='5' className='p-3 mb-2 text-white bg-primary'>
          2 di 3 (larga 5/12)
        </Col>
        <Col className='p-3 mb-2 text-white bg-dark'>3 di 3</Col>
      </Row>
    </Container>
  </div>
);

SetWidthOfColumn.story = {
  name: 'Imposta larghezza colonne'
};

export const VariableWidthContent = () => (
  <div>
    <Container>
      <Row>
        <Col lg='2' className='p-3 mb-2 text-white bg-dark'>
          1 di 3
        </Col>
        <Col xs='auto' className='p-3 mb-2 text-white bg-primary'>
          Contenuto a larghezza variabile
        </Col>
        <Col lg='2' className='p-3 mb-2 text-white bg-dark'>
          3 di 3
        </Col>
      </Row>
      <Row>
        <Col className='p-3 mb-2 text-white bg-dark'>1 di 3</Col>
        <Col md='auto' className='p-3 mb-2 text-white bg-primary'>
          Contenuto a larghezza variabile
        </Col>
        <Col lg='2' className='p-3 mb-2 text-white bg-dark'>
          3 di 3
        </Col>
      </Row>
    </Container>
  </div>
);

VariableWidthContent.story = {
  name: 'Variable width content'
};

export const EqualWidthMultiRow = () => (
  <div>
    <Container>
      <Row>
        <Col className='p-3 mb-2 text-white bg-dark'>col</Col>
        <Col className='p-3 mb-2 text-white bg-primary'>col</Col>
      </Row>
      <Row>
        <Col className='p-3 mb-2 text-white bg-primary'>col</Col>
        <Col className='p-3 mb-2 text-white bg-dark'>col</Col>
      </Row>
    </Container>
  </div>
);

EqualWidthMultiRow.story = {
  name: 'Equal-width multi-row'
};

export const TuttiIBreakpoint = () => (
  <div>
    <Container>
      <Row>
        <Col className='p-3 mb-2 text-white bg-dark'>col</Col>
        <Col className='p-3 mb-2 text-white bg-primary'>col</Col>
        <Col className='p-3 mb-2 text-white bg-dark'>col</Col>
        <Col className='p-3 mb-2 text-white bg-primary'>col</Col>
      </Row>
      <Row>
        <Col xs={8} className='p-3 mb-2 text-white bg-primary'>
          col-8
        </Col>
        <Col xs={4} className='p-3 mb-2 text-white bg-dark'>
          col-4
        </Col>
      </Row>
    </Container>
  </div>
);

TuttiIBreakpoint.story = {
  name: 'Tutti i breakpoint'
};

export const RaccoltiInOrizzontale = () => (
  <div>
    <Container>
      <Row>
        <Col sm='8' className='p-3 mb-2 text-white bg-dark'>
          col-sm-8
        </Col>
        <Col sm='4' className='p-3 mb-2 text-white bg-primary'>
          col-sm-4
        </Col>
      </Row>
      <Row>
        <Col widths={['sm']} className='p-3 mb-2 text-white bg-primary'>
          col-sm
        </Col>
        <Col widths={['sm']} className='p-3 mb-2 text-white bg-dark'>
          col-sm
        </Col>
        <Col widths={['sm']} className='p-3 mb-2 text-white bg-primary'>
          col-sm
        </Col>
      </Row>
    </Container>
  </div>
);

RaccoltiInOrizzontale.story = {
  name: 'Raccolti in orizzontale'
};

export const MischiareEAbbinare = () => (
  <div>
    <Container>
      <Row>
        <Col xs='12' md='8' className='p-3 mb-2 text-white bg-dark'>
          .col-12 .col-md-8
        </Col>
        <Col xs='6' md='4' className='p-3 mb-2 text-white bg-primary'>
          .col-6 .col-md-4
        </Col>
      </Row>
      <Row>
        <Col xs='6' md='4' className='p-3 mb-2 text-white bg-primary'>
          .col-6 .col-md-4
        </Col>
        <Col xs='6' md='4' className='p-3 mb-2 text-white bg-dark'>
          .col-6 .col-md-4
        </Col>
        <Col xs='6' md='4' className='p-3 mb-2 text-white bg-primary'>
          .col-6 .col-md-4
        </Col>
      </Row>
      <Row>
        <Col xs='6' className='p-3 mb-2 text-white bg-primary'>
          .col-6
        </Col>
        <Col xs='6' className='p-3 mb-2 text-white bg-dark'>
          .col-6
        </Col>
      </Row>
    </Container>
  </div>
);

MischiareEAbbinare.story = {
  name: 'Mischiare e abbinare'
};
