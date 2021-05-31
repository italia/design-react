import React from 'react';

import { Nav, NavItem, NavLink } from '../../src';

import {
  TabExampleText,
  TabExampleIcon,
  TabExampleTextIcon,
  TabExampleButton,
  TabExampleButtonVertical
} from './TabExample';

export default {
  title: 'Componenti/Tab'
};

export const Esempi = () => (
  <div>
    <Nav tabs className='mb-3'>
      <NavItem>
        <NavLink href='#' active>
          Link Attivo
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#' disabled>
          Link disabilitato
        </NavLink>
      </NavItem>
    </Nav>

    <Nav tabs className='nav-dark'>
      <NavItem>
        <NavLink href='#' active>
          Link Attivo
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#' disabled>
          Link disabilitato
        </NavLink>
      </NavItem>
    </Nav>
  </div>
);

export const _Contenuto = () => <TabExampleText />;

export const _Icone = () => <TabExampleIcon />;

export const IconeETesto = () => <TabExampleTextIcon />;

IconeETesto.story = {
  name: 'Icone e testo'
};

export const TabABottoni = () => <TabExampleButton />;

TabABottoni.story = {
  name: 'Tab a bottoni'
};

export const _AllineamentoVerticale = () => <TabExampleButtonVertical />;
