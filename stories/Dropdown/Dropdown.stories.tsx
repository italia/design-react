import React, { useState } from 'react';

import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  LinkList,
  LinkListItem,
  ButtonGroup
} from '../../src';

export const _VarianteBottoni = () => {
  const [openFirst, toggleFirst] = useState(false);
  const [openSecond, toggleSecond] = useState(false);
  const [openThird, toggleThird] = useState(false);

  return (
    <ButtonGroup>
      <Dropdown isOpen={openFirst} toggle={() => toggleFirst(!openFirst)}>
        <DropdownToggle color='primary' caret>
          Apri dropdown
        </DropdownToggle>
        <DropdownMenu>
          <LinkList>
            <LinkListItem>Azione 1</LinkListItem>
            <LinkListItem>Azione 2</LinkListItem>
            <LinkListItem>Azione 3</LinkListItem>
          </LinkList>
        </DropdownMenu>
      </Dropdown>
      <Dropdown isOpen={openSecond} toggle={() => toggleSecond(!openSecond)}>
        <DropdownToggle color='secondary' caret>
          Apri dropdown
        </DropdownToggle>
        <DropdownMenu>
          <LinkList>
            <LinkListItem>Azione 1</LinkListItem>
            <LinkListItem>Azione 2</LinkListItem>
            <LinkListItem>Azione 3</LinkListItem>
          </LinkList>
        </DropdownMenu>
      </Dropdown>
      <Dropdown isOpen={openThird} toggle={() => toggleThird(!openThird)}>
        <DropdownToggle color='danger' caret>
          Apri dropdown
        </DropdownToggle>
        <DropdownMenu>
          <LinkList>
            <LinkListItem>Azione 1</LinkListItem>
            <LinkListItem>Azione 2</LinkListItem>
            <LinkListItem>Azione 3</LinkListItem>
          </LinkList>
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  );
};

export default {
  title: 'Componenti/Dropdown'
};

export const _Esempi = () => {
  const [open, toggle] = useState(false);

  return (
    <section>
      <Dropdown className='mr-3' isOpen={open} toggle={() => toggle(!open)}>
        <DropdownToggle color='primary' caret>
          Apri dropdown
        </DropdownToggle>
        <DropdownMenu>
          <LinkList>
            <LinkListItem>Azione 1</LinkListItem>
            <LinkListItem>Azione 2</LinkListItem>
            <LinkListItem>Azione 3</LinkListItem>
          </LinkList>
        </DropdownMenu>
      </Dropdown>
    </section>
  );
};

export const _Link = () => {
  const [open, toggle] = useState(false);

  return (
    <section>
      <Dropdown className='mr-3' isOpen={open} toggle={() => toggle(!open)}>
        <DropdownToggle color='primary' caret tag='a'>
          Apri dropdown
        </DropdownToggle>
        <DropdownMenu>
          <LinkList>
            <LinkListItem>Azione 1</LinkListItem>
            <LinkListItem>Azione 2</LinkListItem>
            <LinkListItem>Azione 3</LinkListItem>
          </LinkList>
        </DropdownMenu>
      </Dropdown>
    </section>
  );
};
