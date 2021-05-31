/* eslint jsx-a11y/anchor-is-valid: 0 */
import React, { useState } from 'react';
import {
  Button,
  Modal,
  FormGroup,
  Input,
  ModalHeader,
  ModalBody,
  ModalFooter,
  TextArea,
  UncontrolledTooltip,
  Popover,
  PopoverHeader,
  PopoverBody,
  Container,
  Row,
  Col
} from '../../src';

export default {
  title: 'Componenti/Modal'
};

export const BottoneDiChiusura = () => (
  <div className='p-3'>
    <button className='close position-absolute'>&times;</button>
  </div>
);

BottoneDiChiusura.story = {
  name: 'Bottone di chiusura'
};

export const _Esempi = () => (
  <div>
    <div className='modal-content'>
      <ModalHeader>Titolo della modale</ModalHeader>
      <ModalBody>Il testo del corpo della modale va qui.</ModalBody>
      <ModalFooter>
        <Button color='secondary'>Chiudi</Button>
        <Button color='primary'>Salva le modifiche</Button>
      </ModalFooter>
    </div>
  </div>
);

export const ModaleBase = () => {
  const [isOpen, toggleModal] = useState(false);

  return (
    <div>
      <Button color='primary' onClick={() => toggleModal(!isOpen)}>
        Lancia la demo della modale
      </Button>
      <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)}>
        <ModalHeader toggle={() => toggleModal(!isOpen)}>
          Titolo della modale
        </ModalHeader>
        <ModalBody>
          <p>Woohoo, stai leggendo questo testo in una modale!</p>
        </ModalBody>
        <ModalFooter>
          <Button color='secondary' onClick={() => toggleModal(!isOpen)}>
            Chiudi
          </Button>
          <Button color='primary' onClick={() => toggleModal(!isOpen)}>
            Salva modifiche
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export const ScrollDiContenutiLunghi = () => {
  const [isOpen, toggleModal] = useState(false);

  return (
    <div>
      <Button color='primary' onClick={() => toggleModal(!isOpen)}>
        Lancia la demo della modale
      </Button>
      <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)}>
        <ModalHeader toggle={() => toggleModal(!isOpen)}>
          Titolo della modale
        </ModalHeader>
        <ModalBody>
          <div>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color='secondary' onClick={() => toggleModal(!isOpen)}>
            Chiudi
          </Button>
          <Button color='primary' onClick={() => toggleModal(!isOpen)}>
            Salva modifiche
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
ScrollDiContenutiLunghi.story = {
  name: 'Scroll di contenuti lunghi'
};

export const _CentraturaVerticale = () => {
  const [isOpen, toggleModal] = useState(false);

  return (
    <div>
      <Button color='primary' onClick={() => toggleModal(!isOpen)}>
        Lancia la demo della modale
      </Button>
      <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} centered>
        <ModalHeader toggle={() => toggleModal(!isOpen)}>
          Titolo della modale
        </ModalHeader>
        <ModalBody>
          <p>Woohoo, stai leggendo questo testo in una modale!</p>
        </ModalBody>
        <ModalFooter>
          <Button color='secondary' onClick={() => toggleModal(!isOpen)}>
            Chiudi
          </Button>
          <Button color='primary' onClick={() => toggleModal(!isOpen)}>
            Salva modifiche
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
_CentraturaVerticale.story = {
  name: 'Centratura verticale'
};

export const RimuovereLanimazione = () => {
  const [isOpen, toggleModal] = useState(false);

  return (
    <div>
      <Button color='primary' onClick={() => toggleModal(!isOpen)}>
        Lancia la demo della modale
      </Button>
      <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} fade={false}>
        <ModalHeader toggle={() => toggleModal(!isOpen)}>
          Titolo della modale
        </ModalHeader>
        <ModalBody>
          <p>Woohoo, stai leggendo questo testo in una modale!</p>
        </ModalBody>
        <ModalFooter>
          <Button color='secondary' onClick={() => toggleModal(!isOpen)}>
            Chiudi
          </Button>
          <Button color='primary' onClick={() => toggleModal(!isOpen)}>
            Salva modifiche
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
RimuovereLanimazione.story = {
  name: 'Rimuovere l’animazione'
};

export const _Dimensioni = () => {
  const [isOpen, toggleModal] = useState(false);
  const [size, setSize] = useState('');

  return (
    <div>
      <div>
        <Button
          color='primary'
          onClick={() => {
            setSize('lg');
            toggleModal(true);
          }}
          className='mr-3'
        >
          Modale grande
        </Button>
        <Button
          color='primary'
          onClick={() => {
            setSize('sm');
            toggleModal(true);
          }}
        >
          Modale piccola
        </Button>
      </div>
      <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)} size={size}>
        <ModalHeader toggle={() => toggleModal(!isOpen)}>
          Titolo della modale
        </ModalHeader>
        <ModalBody>
          <p>Woohoo, stai leggendo questo testo in una modale!</p>
        </ModalBody>
        <ModalFooter>
          <Button color='secondary' onClick={() => toggleModal(!isOpen)}>
            Chiudi
          </Button>
          <Button color='primary' onClick={() => toggleModal(!isOpen)}>
            Salva modifiche
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export const ContenutoDellaModaleVariabile = () => {
  const [open, toggleModal] = useState(false);
  const [username, setUsername] = useState('');

  const toggle = () => toggleModal(!open);
  const openModal = (name) => {
    setUsername(name);
    toggleModal(true);
  };

  return (
    <div>
      <div>
        <Button
          color='primary'
          onClick={() => openModal('Mario')}
          className='mr-3'
        >
          Apri la modale per Mario
        </Button>
        <Button
          color='primary'
          onClick={() => openModal('Paola')}
          className='mr-3'
        >
          Apri la modale per Paola
        </Button>
        <Button
          color='primary'
          onClick={() => openModal('Luca')}
          className='mr-3'
        >
          Apri la modale per Luca
        </Button>
      </div>

      <Modal fade centered isOpen={open} toggle={toggle}>
        <ModalHeader toggle={toggle}>New message for {username}</ModalHeader>
        <ModalBody>
          <form>
            <FormGroup>
              <Input
                type='text'
                id='recipient-name'
                value={username}
                label='Destinatario:'
              />
            </FormGroup>
            <FormGroup>
              <TextArea
                name='text'
                id='message-text'
                rows={3}
                label='Messaggio:'
              />
            </FormGroup>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color='secondary' onClick={toggle}>
            Chiudi
          </Button>
          <Button color='primary' onClick={toggle}>
            Salva modifiche
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

ContenutoDellaModaleVariabile.story = {
  name: 'Contenuto della modale variabile'
};

export const TooltipAndPopover = () => {
  const [isOpen, toggleModal] = useState(false);
  const [popoverOpen, togglePopover] = useState(false);

  return (
    <div>
      <Button color='primary' onClick={() => toggleModal(!isOpen)}>
        Lancia la demo della modale
      </Button>
      <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)}>
        <ModalHeader toggle={() => toggleModal(!isOpen)}>
          Titolo della modale
        </ModalHeader>
        <ModalBody>
          <h5>Popover in una modale</h5>
          <p>
            Questo{' '}
            <Button
              color='secondary'
              id='Example'
              onClick={() => togglePopover(!popoverOpen)}
            >
              Pulsante
            </Button>{' '}
            attiva un popover al click.
            <Popover
              placement='right'
              isOpen={popoverOpen}
              target='Example'
              toggle={() => togglePopover(!popoverOpen)}
            >
              <PopoverHeader>Titolo del popover</PopoverHeader>
              <PopoverBody>
                Il contenuto del corpo del popover è impostato in questo
                elemento.
              </PopoverBody>
            </Popover>
          </p>
          <hr />
          <h5>Tooltip in una modal</h5>
          <p>
            <a href='#' title='Tooltip' id='Example1'>
              Questo link
            </a>{' '}
            e{' '}
            <a href='#' title='Tooltip' id='Example2'>
              questo link
            </a>{' '}
            attivano un tooltip al passaggio del mouse.
            <UncontrolledTooltip placement='top' target='Example1'>
              Tooltip
            </UncontrolledTooltip>
            <UncontrolledTooltip placement='top' target='Example2'>
              Tooltip
            </UncontrolledTooltip>
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color='secondary' onClick={() => toggleModal(!isOpen)}>
            Chiudi
          </Button>
          <Button color='primary' onClick={() => toggleModal(!isOpen)}>
            Salva le modifiche
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

TooltipAndPopover.story = {
  name: 'Tooltip and popover'
};

export const UsoDellaGriglia = () => {
  const [isOpen, toggleModal] = useState(false);

  return (
    <div>
      <Button color='primary' onClick={() => toggleModal(!isOpen)}>
        Lancia la demo della modale
      </Button>
      <Modal isOpen={isOpen} toggle={() => toggleModal(!isOpen)}>
        <ModalHeader toggle={() => toggleModal(!isOpen)}>
          Le griglie nelle modali
        </ModalHeader>
        <ModalBody>
          <Container fluid className='bd-example-row'>
            <Row>
              <Col md='4'>.col-md-4</Col>
              <Col md='4' className='col-md-4 ml-auto'>
                .col-md-4 .ml-auto
              </Col>
            </Row>
            <Row>
              <Col md='3' className='col-md-3 ml-auto'>
                .col-md-3 .ml-auto
              </Col>
              <Col md='2' className='col-md-2 ml-auto'>
                .col-md-2 .ml-auto
              </Col>
            </Row>
            <Row>
              <Col md='6' className='col-md-6 ml-auto'>
                .col-md-6 .ml-auto
              </Col>
            </Row>
            <Row>
              <Col sm='9'>
                Level 1: .col-sm-9
                <Row>
                  <Col md='8' sm='6'>
                    Level 2: .col-8 .col-sm-6
                  </Col>
                  <Col md='4' sm='6'>
                    Level 2: .col-4 .col-sm-6
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button color='secondary' onClick={() => toggleModal(!isOpen)}>
            Chiudi
          </Button>
          <Button color='primary' onClick={() => toggleModal(!isOpen)}>
            Salva le modifiche
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
UsoDellaGriglia.story = {
  name: 'Uso della griglia'
};
