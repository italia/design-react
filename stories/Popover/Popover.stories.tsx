/* eslint jsx-a11y/anchor-is-valid: 0 */
import React, { useState, useRef } from 'react';
import { Meta } from '@storybook/react';

import { Popover, PopoverHeader, PopoverBody, Button, Icon } from '../../src';

const meta: Meta = {
  title: 'Componenti/Popover',
  component: Popover
};
export default meta;

const PopoverExample = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const targetRef = useRef(null);

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };

  return (
    <div>
      <Button
        color='danger'
        size='lg'
        innerRef={targetRef}
        onClick={togglePopover}
      >
        Clicca per attivare/disattivare il popover
      </Button>

      <Popover
        placement='right'
        target={targetRef}
        isOpen={popoverOpen}
        toggle={togglePopover}
      >
        <PopoverHeader>Titolo del popover</PopoverHeader>
        <PopoverBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel
          finibus augue.
        </PopoverBody>
      </Popover>
    </div>
  );
};

export const _Esempi = PopoverExample.bind({});

const ElementiDisabilitatiComponent = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const targetRef = useRef(null);

  return (
    <>
      <span ref={targetRef}>
        <Button color='primary' disabled style={{ pointerEvents: 'none' }}>
          Popover disabilitato
        </Button>
      </span>
      <Popover
        placement='right'
        target={targetRef}
        trigger='hover'
        toggle={() => setPopoverOpen(!popoverOpen)}
        isOpen={popoverOpen}
      >
        <PopoverHeader>Titolo del popover</PopoverHeader>
        <PopoverBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel
          finibus augue.
        </PopoverBody>
      </Popover>
    </>
  );
};
export const _ElementiDisabilitati = ElementiDisabilitatiComponent.bind({});
_ElementiDisabilitati.story = {
  name: 'Elementi disabilitati'
};

const PopoverPositionExample = () => {
  const [popoverOpen1, setPopoverOpen1] = useState(false);
  const [popoverOpen2, setPopoverOpen2] = useState(false);
  const [popoverOpen3, setPopoverOpen3] = useState(false);
  const [popoverOpen4, setPopoverOpen4] = useState(false);

  const targetRef1 = useRef(null);
  const targetRef2 = useRef(null);
  const targetRef3 = useRef(null);
  const targetRef4 = useRef(null);

  return (
    <div className='d-flex flex-column'>
      <div className='mx-auto align-self-center p-2'>
        <span>
          <Button
            className='mr-1'
            color='secondary'
            innerRef={targetRef1}
            onClick={() => {
              setPopoverOpen1(!popoverOpen1);
            }}
          >
            Popover {'a sinistra'}
          </Button>
          <Popover
            placement={'left'}
            isOpen={popoverOpen1}
            target={targetRef1}
            toggle={() => {
              setPopoverOpen1(!popoverOpen1);
            }}
          >
            <PopoverBody>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus
            </PopoverBody>
          </Popover>
        </span>
      </div>
      <div className='mx-auto align-self-center p-2'>
        <span>
          <Button
            className='mr-1'
            color='secondary'
            innerRef={targetRef2}
            onClick={() => {
              setPopoverOpen2(!popoverOpen2);
            }}
          >
            Popover {'a destra'}
          </Button>
          <Popover
            placement={'right'}
            isOpen={popoverOpen2}
            target={targetRef2}
            toggle={() => {
              setPopoverOpen2(!popoverOpen2);
            }}
          >
            <PopoverBody>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus
            </PopoverBody>
          </Popover>
        </span>
      </div>
      <div className='mx-auto align-self-center p-2'>
        <span>
          <Button
            className='mr-1'
            color='secondary'
            innerRef={targetRef3}
            onClick={() => {
              setPopoverOpen3(!popoverOpen3);
            }}
          >
            Popover {'in alto'}
          </Button>
          <Popover
            placement={'top'}
            isOpen={popoverOpen3}
            target={targetRef3}
            toggle={() => {
              setPopoverOpen3(!popoverOpen3);
            }}
          >
            <PopoverBody>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus
            </PopoverBody>
          </Popover>
        </span>
      </div>
      <div className='mx-auto align-self-center p-2'>
        <span>
          <Button
            className='mr-1'
            color='secondary'
            innerRef={targetRef4}
            onClick={() => {
              setPopoverOpen4(!popoverOpen4);
            }}
          >
            Popover {'in basso'}
          </Button>
          <Popover
            placement={'bottom'}
            isOpen={popoverOpen4}
            target={targetRef4}
            toggle={() => {
              setPopoverOpen4(!popoverOpen4);
            }}
          >
            <PopoverBody>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus
            </PopoverBody>
          </Popover>
        </span>
      </div>
    </div>
  );
};
export const _LeQuattroDirezioni = PopoverPositionExample.bind({});
_LeQuattroDirezioni.story = {
  name: 'Le quattro direzioni'
};

const PopoverIconLink = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const targetRef = useRef(null);

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };
  return (
    <div>
      <Button color='secondary' innerRef={targetRef} onClick={togglePopover}>
        Popover con icona e link
      </Button>

      <Popover
        placement='right'
        target={targetRef}
        isOpen={popoverOpen}
        toggle={togglePopover}
      >
        <PopoverHeader>
          <Icon icon='it-help-circle' aria-hidden />
          Titolo con icona
        </PopoverHeader>
        <PopoverBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel
          finibus augue.
          <a href='#' className='popover-inner-link'>
            More info
            <Icon icon='it-arrow-right' aria-hidden />
          </a>
        </PopoverBody>
      </Popover>
    </div>
  );
};
export const _TitoloConIconaELink = PopoverIconLink.bind({});
_TitoloConIconaELink.story = {
  name: 'Titolo con icona e link'
};

const PopoverHover = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const targetRef = useRef(null);

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };
  return (
    <div>
      <Button color='secondary' innerRef={targetRef}>
        Apertura in Hover
      </Button>

      <Popover
        placement='right'
        trigger='hover'
        target={targetRef}
        isOpen={popoverOpen}
        toggle={togglePopover}
      >
        <PopoverHeader>Popover in Hover</PopoverHeader>
        <PopoverBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel
          finibus augue.
        </PopoverBody>
      </Popover>
    </div>
  );
};
export const _ModalitaHover = PopoverHover.bind({});
_ModalitaHover.story = {
  name: 'Modalità Hover'
};

const PopoverFocus = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const targetRef = useRef(null);

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };
  return (
    <div>
      <Button tabIndex={0} color='danger' innerRef={targetRef}>
        Popover richiudibile
      </Button>

      <Popover
        placement='right'
        trigger='focus'
        target={targetRef}
        isOpen={popoverOpen}
        toggle={togglePopover}
      >
        <PopoverHeader>Dismissible popover</PopoverHeader>
        <PopoverBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel
          finibus augue.
        </PopoverBody>
      </Popover>
    </div>
  );
};
export const DismissAlClickSuccessivo = PopoverFocus.bind({});
DismissAlClickSuccessivo.story = {
  name: 'Dismiss al click successivo'
};

export const _EsempiInterattivi = ({ disabled, placement, title, text }) => {
  const [isOpen, toggle] = useState(false);

  const id = 'example';
  // Avoid Jest complaints
  // const target = () => document.getElementById(id)
  return (
    <div style={{ padding: 250, textAlign: 'center' }}>
      <Button
        id={id}
        color='primary'
        disabled={disabled}
        onClick={() => toggle(!isOpen)}
      >
        Popover {disabled ? 'Disabilitato' : ''}
      </Button>

      <Popover
        placement={placement}
        target={id}
        toggle={() => toggle(!isOpen)}
        isOpen={isOpen}
      >
        <PopoverHeader>{title}</PopoverHeader>
        <PopoverBody>{text}</PopoverBody>
      </Popover>
    </div>
  );
};

_EsempiInterattivi.story = {
  name: 'Esempi interattivi'
};

_EsempiInterattivi.args = {
  disabled: false,
  placement: 'top',
  title: 'Titolo del popover',
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.'
};
_EsempiInterattivi.argTypes = {
  placement: {
    control: {
      type: 'select',
      options: ['top', 'bottom', 'left', 'right']
    }
  }
};
