import React from 'react';

import {
  Section,
  Container,
  Card,
  CardBody,
  CardText,
  Row,
  Col
} from '../../src';

export const Esempio = () => {
  return (
    <Section>
      <Container>
        <Row className='mb-3'>
          <Col xs={'12'}>
            <h4>Morbi fermentum amet</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={'12'} lg={'6'} xl={'4'} className='pr-0 pr-md-5 mb-3'>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper
            dignissim cras. Dictum sit amet justo donec enim diam vulputate ut.
            Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'} className='pr-0 pr-md-5 mb-3'>
            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget
            mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi
            ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'} className='pr-0 pr-md-5 mb-3'>
            Euismod lacinia at quis risus sed vulputate. Scelerisque purus
            semper eget duis at tellus at urna condimentum. Mattis enim ut
            tellus elementum sagittis.
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export const SfondoTenue = () => {
  return (
    <Section color='muted'>
      <Container>
        <Row className='mb-3'>
          <Col xs={'12'}>
            <h4>Morbi fermentum amet</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper
            dignissim cras. Dictum sit amet justo donec enim diam vulputate ut.
            Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget
            mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi
            ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Euismod lacinia at quis risus sed vulputate. Scelerisque purus
            semper eget duis at tellus at urna condimentum. Mattis enim ut
            tellus elementum sagittis.
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export const SfondoPrimario = () => {
  return (
    <Section color='primary'>
      <Container className='white-color'>
        <Row>
          <Col xs={'12'}>
            <h4>Morbi fermentum amet</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper
            dignissim cras. Dictum sit amet justo donec enim diam vulputate ut.
            Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget
            mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi
            ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Euismod lacinia at quis risus sed vulputate. Scelerisque purus
            semper eget duis at tellus at urna condimentum. Mattis enim ut
            tellus elementum sagittis.
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export const SfondoNeutrale = () => {
  return (
    <Section color='neutral'>
      <Container className='white-color'>
        <Row>
          <Col xs={'12'}>
            <h4>Morbi fermentum amet</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper
            dignissim cras. Dictum sit amet justo donec enim diam vulputate ut.
            Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget
            mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi
            ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Euismod lacinia at quis risus sed vulputate. Scelerisque purus
            semper eget duis at tellus at urna condimentum. Mattis enim ut
            tellus elementum sagittis.
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export const ImmagineDiSfondo = () => {
  return (
    <Section image='https://picsum.photos/1280/720?image=811'>
      <Container className='white-color'>
        <Row>
          <Col xs={'12'}>
            <h4>Morbi fermentum amet</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper
            dignissim cras. Dictum sit amet justo donec enim diam vulputate ut.
            Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget
            mauris pharetra et. Etiam dignissim diam quis enim. Eu nisl nunc mi
            ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Euismod lacinia at quis risus sed vulputate. Scelerisque purus
            semper eget duis at tellus at urna condimentum. Mattis enim ut
            tellus elementum sagittis.
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export const SectionConCard = () => {
  return (
    <Section color='muted'>
      <h4>Morbi fermentum amet</h4>
      <div className='card-deck'>
        <Card className='shadow' noWrapper>
          <CardBody>
            <CardText>
              Platea dictumst vestibulum rhoncus est pellentesque elit
              ullamcorper dignissim cras. Dictum sit amet justo donec enim diam
              vulputate ut. Eu nisl nunc mi ipsum faucibus. Eget egestas purus
              viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra
              et.{' '}
            </CardText>
          </CardBody>
        </Card>
        <Card className='shadow' noWrapper>
          <CardBody>
            <CardText>
              Etiam dignissim diam quis enim. Eu nisl nunc mi ipsum faucibus.
              Euismod lacinia at quis risus sed vulputate. Scelerisque purus
              semper eget duis at tellus at urna condimentum. Mattis enim ut
              tellus elementum sagittis.
            </CardText>
          </CardBody>
        </Card>
      </div>
    </Section>
  );
};

export default {
  title: 'Componenti/Section'
};

ImmagineDiSfondo.story = {
  name: 'Immagine di sfondo'
};

SectionConCard.story = {
  name: 'Section con Card'
};
