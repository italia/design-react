import React from 'react';

import { Chip, ChipLabel, Button, Icon, Row, Col } from '../../src';

export default {
  title: 'Componenti/Chips'
};

export const Esempi = () => (
  <Row>
    <Col xs='12' md={{ size: 6 }}>
      <h4>Versione Standard</h4>
      <p className='mt-4 mb-2'>Solo testo</p>
      <Chip simple>
        <ChipLabel>Label</ChipLabel>
      </Chip>
      <p className='mt-4 mb-2'>Testo e chiusura</p>
      <Chip>
        <ChipLabel>Label</ChipLabel>
        <Button close>
          <Icon icon='it-close' />
        </Button>
      </Chip>
      <p className='mt-4 mb-2'>Icona, testo e chiusura</p>
      <Chip>
        <Icon icon='it-github' size='xs' />
        <ChipLabel>Label</ChipLabel>
        <Button close>
          <Icon icon='it-close' />
        </Button>
      </Chip>
      <p className='mt-4 mb-2'>Avatar, testo e chiusura</p>
      <Chip>
        <div className='avatar size-xs'>
          <img
            src='https://randomuser.me/api/portraits/men/46.jpg'
            alt='Mario Rossi'
          />
        </div>
        <ChipLabel>Label</ChipLabel>
        <Button close>
          <Icon icon='it-close' />
        </Button>
      </Chip>
    </Col>
    <Col xs='12' md={{ size: 6 }}>
      <h4>Versione Grande</h4>
      <p className='mt-4 mb-2'>Solo testo</p>
      <Chip simple large>
        <ChipLabel>Label</ChipLabel>
      </Chip>
      <p className='mt-4 mb-2'>Testo e chiusura</p>
      <Chip large>
        <ChipLabel>Label</ChipLabel>
        <Button close>
          <Icon icon='it-close' />
        </Button>
      </Chip>
      <p className='mt-4 mb-2'>Icona, testo e chiusura</p>
      <Chip large>
        <Icon icon='it-github' size='xs' />
        <ChipLabel>Label</ChipLabel>
        <Button close>
          <Icon icon='it-close' />
        </Button>
      </Chip>
      <p className='mt-4 mb-2'>Avatar, testo e chiusura</p>
      <Chip large>
        <div className='avatar size-xs'>
          <img
            src='https://randomuser.me/api/portraits/men/46.jpg'
            alt='Mario Rossi'
          />
        </div>
        <ChipLabel>Label</ChipLabel>
        <Button close>
          <Icon icon='it-close' />
        </Button>
      </Chip>
    </Col>
  </Row>
);

export const ChipDisabilitata = () => (
  <div>
    <Chip simple large disabled>
      <ChipLabel>Label Disabled</ChipLabel>
    </Chip>
    <Chip simple large disabled>
      <ChipLabel>Label Disabled</ChipLabel>
      <Button close disabled>
        <Icon icon='it-close' />
      </Button>
    </Chip>
    <Chip large disabled>
      <Icon icon='it-github' size='xs' />
      <ChipLabel>Label Disabled</ChipLabel>
      <Button close disabled>
        <Icon icon='it-close' />
      </Button>
    </Chip>
    <Chip large disabled>
      <div className='avatar size-xs'>
        <img
          src='https://randomuser.me/api/portraits/men/46.jpg'
          alt='Mario Rossi'
        />
      </div>
      <ChipLabel>Label</ChipLabel>
      <Button close disabled>
        <Icon icon='it-close' />
      </Button>
    </Chip>
  </div>
);

export const GruppiDiChip = () => (
  <div>
    <Chip simple>
      <ChipLabel>Label</ChipLabel>
    </Chip>
    <Chip>
      <ChipLabel>Label</ChipLabel>
      <Button close>
        <Icon icon='it-close' />
      </Button>
    </Chip>
    <Chip>
      <Icon icon='it-github' size='xs' />
      <ChipLabel>Label </ChipLabel>
      <Button close>
        <Icon icon='it-close' />
      </Button>
    </Chip>
    <Chip>
      <div className='avatar size-xs'>
        <img
          src='https://randomuser.me/api/portraits/men/46.jpg'
          alt='Mario Rossi'
        />
      </div>
      <ChipLabel>Label</ChipLabel>
      <Button close>
        <Icon icon='it-close' />
      </Button>
    </Chip>
    <hr />
    <Chip simple large>
      <ChipLabel>Label</ChipLabel>
    </Chip>
    <Chip large>
      <ChipLabel>Label</ChipLabel>
      <Button close>
        <Icon icon='it-close' />
      </Button>
    </Chip>
    <Chip large>
      <Icon icon='it-github' size='xs' />
      <ChipLabel>Label </ChipLabel>
      <Button close>
        <Icon icon='it-close' />
      </Button>
    </Chip>
    <Chip large>
      <div className='avatar size-xs'>
        <img
          src='https://randomuser.me/api/portraits/men/46.jpg'
          alt='Mario Rossi'
        />
      </div>
      <ChipLabel>Label</ChipLabel>
      <Button close>
        <Icon icon='it-close' />
      </Button>
    </Chip>
  </div>
);

export const VariantiDiColore = () => (
  <div>
    <p className='mt-4 mb-2'>Primary color</p>
    <Chip simple color='primary'>
      <ChipLabel>Primary</ChipLabel>
    </Chip>
    <p className='mt-4 mb-2'>Warning Color</p>
    <Chip simple color='warning'>
      <ChipLabel>Warning</ChipLabel>
    </Chip>
    <p className='mt-4 mb-2'>Success Color</p>
    <Chip simple color='success'>
      <ChipLabel>Success</ChipLabel>
    </Chip>
    <p className='mt-4 mb-2'>Danger Color</p>
    <Chip simple color='danger'>
      <ChipLabel>Danger</ChipLabel>
    </Chip>
    <p className='mt-4 mb-2'>Info Color</p>
    <Chip simple color='info'>
      <ChipLabel>Information</ChipLabel>
    </Chip>
  </div>
);
