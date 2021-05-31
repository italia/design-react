import React from 'react';

import {
  LinkList,
  LinkListItem,
  Icon,
  NavItem,
  NavLink,
  Navbar
} from '../../src';

export const TitoloLista = () => {
  return (
    <div className='sticky-wrapper navbar-wrapper'>
      <Navbar expand='lg' className='it-navscroll-wrapper it-top-navscroll'>
        <div className='menu-wrapper'>
          <LinkList
            wrapperClassName='menu-link-list'
            header={<h3 className='no_toc'>Indice della pagina</h3>}
          >
            <NavItem>
              <NavLink href='#cos-e'>
                <span>Cos&#39;è</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#luogo'>
                <span>Luogo</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#date-e-orari'>
                <span>Date e orari</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#costi'>
                <span>Costi</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#documenti'>
                <span>Documenti</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#contatti'>
                <span>Contatti</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#appuntamenti'>
                <span>Appuntamenti</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#ulteriori-informazioni'>
                <span>Ulteriori informazioni</span>
              </NavLink>
            </NavItem>
          </LinkList>
        </div>
      </Navbar>
    </div>
  );
};

export default {
  title: 'Componenti/LinkList'
};

export const _Esempi = () => (
  <LinkList>
    <LinkListItem>
      <span>Link list 1</span>
    </LinkListItem>
    <LinkListItem>
      <span>Link list 2</span>
    </LinkListItem>
    <LinkListItem>
      <span>Link list 3</span>
    </LinkListItem>
  </LinkList>
);

export const _StatoAttivo = () => (
  <LinkList>
    <LinkListItem>
      <span>Link list 1</span>
    </LinkListItem>
    <LinkListItem active>
      <span>Link list 2 active</span>
    </LinkListItem>
    <LinkListItem>
      <span>Link list 3</span>
    </LinkListItem>
  </LinkList>
);

export const _StatoDisabilitato = () => (
  <LinkList>
    <LinkListItem>
      <span>Link list 1</span>
    </LinkListItem>
    <LinkListItem disabled>
      <span>Link list 2 disabled</span>
    </LinkListItem>
    <LinkListItem>
      <span>Link list 3</span>
    </LinkListItem>
  </LinkList>
);

export const HeaderEDividerNoLink = () => (
  <LinkList>
    <LinkListItem header>Heading senza link</LinkListItem>
    <LinkListItem>
      <span>Link list 1</span>
    </LinkListItem>
    <LinkListItem>
      <span>Link list 2</span>
    </LinkListItem>
    <LinkListItem>
      <span>Link list 3</span>
    </LinkListItem>
    <LinkListItem divider />
    <LinkListItem>
      <span>Link list 4</span>
    </LinkListItem>
  </LinkList>
);

HeaderEDividerNoLink.story = {
  name: 'Header e Divider (senza link)'
};

export const HeaderEDividerConLink = () => (
  <LinkList>
    <LinkListItem header href='#'>
      Heading con link
    </LinkListItem>
    <LinkListItem>
      <span>Link list 1</span>
    </LinkListItem>
    <LinkListItem>
      <span>Link list 2</span>
    </LinkListItem>
    <LinkListItem>
      <span>Link list 3</span>
    </LinkListItem>
    <LinkListItem divider />
    <LinkListItem>
      <span>Link list 4</span>
    </LinkListItem>
  </LinkList>
);

HeaderEDividerConLink.story = {
  name: 'Header e Divider (con link)'
};

export const Sizing = () => (
  <LinkList>
    <LinkListItem header href='#'>
      Heading
    </LinkListItem>
    <LinkListItem size='large' href='#'>
      <span>Link list 1</span>
    </LinkListItem>
    <LinkListItem size='large' href='#'>
      <span>Link list 2</span>
    </LinkListItem>
    <LinkListItem size='large' href='#'>
      <span>Link list 3</span>
    </LinkListItem>
    <LinkListItem divider />
    <LinkListItem size='large' href='#'>
      <span>Link list 4</span>
    </LinkListItem>
  </LinkList>
);

TitoloLista.story = {
  name: 'Titolo lista'
};

export const EsempioMultiline = () => (
  <LinkList multiline>
    <LinkListItem active className='right-icon' href='#'>
      <span>Link list 1 active</span>
      <Icon color='primary' icon='it-chevron-right' aria-hidden />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
    </LinkListItem>
    <LinkListItem divider />
    <LinkListItem className='right-icon' href='#'>
      <span>Link list 2</span>
      <Icon color='primary' icon='it-chevron-right' aria-hidden />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
    </LinkListItem>
    <LinkListItem divider />
    <LinkListItem disabled className='right-icon' href='#'>
      <span>Link list 3 disabled</span>{' '}
      <Icon color='primary' icon='it-chevron-right' aria-hidden />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
    </LinkListItem>
  </LinkList>
);
