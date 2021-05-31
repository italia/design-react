import React from 'react';

import { DropdownMenu, Icon, LinkList, LinkListItem } from '../../src';

export const _MenuVociAttive = () => (
  <div className='docs-show-dropdown-open'>
    <DropdownMenu isOpen>
      <LinkList>
        <LinkListItem active>
          <span>
            Azione 1<span className='sr-only'> attivo</span>
          </span>
        </LinkListItem>
        <LinkListItem>
          <span>Azione 2</span>
        </LinkListItem>
        <LinkListItem>
          <span>Azione 3</span>
        </LinkListItem>
      </LinkList>
    </DropdownMenu>
  </div>
);

export const _MenuVociDisabilitate = () => (
  <div className='docs-show-dropdown-open'>
    <DropdownMenu isOpen>
      <LinkList>
        <LinkListItem>
          <span>Azione 1</span>
        </LinkListItem>
        <LinkListItem disabled aria-disabled='true'>
          <span>Azione 2</span>
        </LinkListItem>
        <LinkListItem>
          <span>Azione 3</span>
        </LinkListItem>
      </LinkList>
    </DropdownMenu>
  </div>
);

export const MenuHeadersESeparatori = () => (
  <div className='docs-show-dropdown-open'>
    <DropdownMenu isOpen>
      <LinkList>
        <LinkListItem header>Header</LinkListItem>
        <LinkListItem>
          <span>Azione 1</span>
        </LinkListItem>
        <LinkListItem>
          <span>Azione 2</span>
        </LinkListItem>
        <LinkListItem>
          <span>Azione 3</span>
        </LinkListItem>
        <LinkListItem divider />
        <LinkListItem>
          <span>Azione 4</span>
        </LinkListItem>
      </LinkList>
    </DropdownMenu>
  </div>
);

export const MenuConVociLarge = () => (
  <div className='docs-show-dropdown-open'>
    <DropdownMenu isOpen>
      <LinkList>
        <LinkListItem size='large'>
          <span>Azione 1</span>
        </LinkListItem>
        <LinkListItem size='large'>
          <span>Azione 2</span>
        </LinkListItem>
        <LinkListItem size='large'>
          <span>Azione 3</span>
        </LinkListItem>
      </LinkList>
    </DropdownMenu>
  </div>
);

export const MenuFullWidth = () => (
  <div className='docs-show-dropdown-open'>
    <DropdownMenu isOpen className='full-width'>
      <LinkList>
        <LinkListItem size='large'>
          <span>Azione 1</span>
        </LinkListItem>
        <LinkListItem size='large'>
          <span>Azione 2</span>
        </LinkListItem>
        <LinkListItem size='large'>
          <span>Azione 3</span>
        </LinkListItem>
        <LinkListItem size='large'>
          <span>Azione 4</span>
        </LinkListItem>
        <LinkListItem size='large'>
          <span>Azione 5</span>
        </LinkListItem>
      </LinkList>
    </DropdownMenu>
  </div>
);

export const MenuIconaADestra = () => (
  <div className='docs-show-dropdown-open'>
    <DropdownMenu isOpen>
      <LinkList>
        <LinkListItem className='right-icon'>
          <span>Azione 1</span>
          <Icon
            className='right'
            color='primary'
            icon='it-info-circle'
            aria-hidden
            size='sm'
          />
        </LinkListItem>
        <LinkListItem className='right-icon'>
          <span>Azione 2</span>
          <Icon
            className='right'
            color='primary'
            icon='it-info-circle'
            aria-hidden
            size='sm'
          />
        </LinkListItem>
        <LinkListItem className='right-icon'>
          <span>Azione 3</span>
          <Icon
            className='right'
            color='primary'
            icon='it-info-circle'
            aria-hidden
            size='sm'
          />
        </LinkListItem>
      </LinkList>
    </DropdownMenu>
  </div>
);

export const MenuIconaASinistra = () => (
  <div className='docs-show-dropdown-open'>
    <DropdownMenu isOpen>
      <LinkList>
        <LinkListItem className='left-icon'>
          <Icon
            className='left'
            color='primary'
            icon='it-info-circle'
            aria-hidden
            size='sm'
          />
          <span>Azione 1</span>
        </LinkListItem>
        <LinkListItem className='left-icon'>
          <Icon
            className='left'
            color='primary'
            icon='it-info-circle'
            aria-hidden
            size='sm'
          />
          <span>Azione 2</span>
        </LinkListItem>
        <LinkListItem className='left-icon'>
          <Icon
            className='left'
            color='primary'
            icon='it-info-circle'
            aria-hidden
            size='sm'
          />
          <span>Azione 3</span>
        </LinkListItem>
      </LinkList>
    </DropdownMenu>
  </div>
);

export const _MenuDark = () => (
  <div className='docs-show-dropdown-open'>
    <DropdownMenu isOpen className='dark'>
      <LinkList>
        <LinkListItem header>Header</LinkListItem>
        <LinkListItem active className='right-icon'>
          <span>Azione 1 (attivo)</span>
          <Icon
            className='right'
            color='light'
            icon='it-info-circle'
            aria-hidden
            size='sm'
          />
        </LinkListItem>
        <LinkListItem className='right-icon'>
          <span>Azione 2</span>
          <Icon
            className='right'
            color='light'
            icon='it-info-circle'
            aria-hidden
            size='sm'
          />
        </LinkListItem>
        <LinkListItem className='right-icon'>
          <span>Azione 3</span>
          <Icon
            className='right'
            color='light'
            icon='it-info-circle'
            aria-hidden
            size='sm'
          />
        </LinkListItem>
        <LinkListItem divider />
        <LinkListItem className='right-icon'>
          <span>Azione 4</span>
          <Icon
            className='right'
            color='light'
            icon='it-info-circle'
            aria-hidden
            size='sm'
          />
        </LinkListItem>
        <LinkListItem disabled className='right-icon'>
          <span>Azione 5 (disabilitato)</span>
          <Icon
            className='right'
            color='light'
            icon='it-info-circle'
            aria-hidden
            size='sm'
          />
        </LinkListItem>
      </LinkList>
    </DropdownMenu>
  </div>
);

export default {
  title: 'Componenti/Dropdown/Dropdown menu'
};

_MenuVociAttive.story = {
  name: 'Menù voci attive'
};

_MenuVociDisabilitate.story = {
  name: 'Menù voci disabilitate'
};

MenuHeadersESeparatori.story = {
  name: 'Menù headers e separatori'
};

MenuConVociLarge.story = {
  name: 'Menu con voci large'
};

MenuFullWidth.story = {
  name: 'Menù full width'
};

MenuIconaADestra.story = {
  name: 'Menù icona a destra'
};

MenuIconaASinistra.story = {
  name: 'Menù icona a sinistra'
};

_MenuDark.story = {
  name: 'Menù dark'
};
