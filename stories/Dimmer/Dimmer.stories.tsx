import React from 'react';

import {
  Dimmer,
  DimmerButtons,
  Button,
  Fade,
  Card,
  CardBody,
  CardTitle,
  CardText
} from '../../src';

export const Esempi = ({ fadeIn }) => {
  return (
    <div>
      <Fade in={fadeIn} tag='div' className='mt-3'>
        <Dimmer icon='it-unlocked'>
          <p>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper
            dignissim cras. Dictum sit amet justo donec enim diam vulputate ut.
            Eu nisl nunc mi ipsum faucibus.
          </p>
        </Dimmer>
      </Fade>
      <div className='row'>
        <div className='col-12 col-lg-4'>
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag='h5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
          {/* end card */}
        </div>

        <div className='col-12 col-lg-4 d-none d-lg-block'>
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag='h5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
          {/* end card */}
        </div>
        <div className='col-12 col-lg-4 d-none d-lg-block'>
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag='h5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export const ColorePrimario = ({ fadeIn }) => {
  return (
    <div>
      <Fade in={fadeIn} tag='div' className='mt-3'>
        <Dimmer color='primary' icon='it-unlocked'>
          <p>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper
            dignissim cras. Dictum sit amet justo donec enim diam vulputate ut.
            Eu nisl nunc mi ipsum faucibus.
          </p>
        </Dimmer>
      </Fade>
      <div className='row'>
        <div className='col-12 col-lg-4'>
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag='h5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
          {/* end card */}
        </div>

        <div className='col-12 col-lg-4 d-none d-lg-block'>
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag='h5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
          {/* end card */}
        </div>
        <div className='col-12 col-lg-4 d-none d-lg-block'>
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag='h5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export const DimmerConAzioni = ({ fadeIn }) => {
  return (
    <div>
      <Fade in={fadeIn} tag='div' className='mt-3'>
        <Dimmer icon='it-unlocked'>
          <h4>Titolo Dimmer</h4>
          <DimmerButtons>
            <Button color='primary' outline>
              Azione secondaria
            </Button>
            <Button color='primary'>Azione primaria</Button>
          </DimmerButtons>
        </Dimmer>
      </Fade>
      <div className='col'>
        <div className='col-12 col-lg-4'>
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag='h5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
          {/* end card */}
        </div>
        <div className='col-12 col-lg-4 d-none d-lg-block'>
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag='h5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
          {/* end card */}
        </div>
      </div>
    </div>
  );
};

export const DimmerConAzioniColorePrimario = ({ fadeIn }) => {
  return (
    <div>
      <Fade in={fadeIn} tag='div' className='mt-3'>
        <Dimmer color='primary' icon='it-unlocked'>
          <h4>Titolo Dimmer</h4>
          <DimmerButtons single>
            <Button color='primary'>Azione primaria</Button>
          </DimmerButtons>
        </Dimmer>
      </Fade>
      <div className='col'>
        <div className='col-12 col-lg-4'>
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag='h5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
          {/* end card */}
        </div>
        <div className='col-12 col-lg-4 d-none d-lg-block'>
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag='h5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
          {/* end card */}
        </div>
      </div>
    </div>
  );
};

export default {
  title: 'Componenti/Dimmer',
  args: {
    fadeIn: true
  }
};

DimmerConAzioni.story = {
  name: 'Dimmer con Azioni'
};

DimmerConAzioniColorePrimario.story = {
  name: 'Dimmer con Azioni Colore Primario'
};
