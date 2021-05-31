import React, { useState } from 'react';

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  LinkList,
  LinkListItem,
  Icon
} from '../../src';

const _EsempiInterattivi = ({ variation, color, placement }) => {
  return (
    <Navbar
      light
      expand='lg'
      fixed={placement}
      sticky={placement}
      className={`bg-${variation}`}
      style={{ backgroundColor: color }}
    >
      <NavbarBrand href='#'>Brand</NavbarBrand>
    </Navbar>
  );
};

export default {
  title: 'Componenti/Navbar'
};

export const _Esempi = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggle = () => {
    setOpenNav(!openNav);
  };
  return (
    <section>
      <Navbar expand='lg'>
        <NavbarBrand />
        <NavbarToggler className='custom-navbar-toggler' onClick={toggle}>
          <span className='it-list' />
        </NavbarToggler>

        <Collapse isOpen={openNav} navbar>
          <Nav navbar className='mt-0'>
            <NavItem active>
              <NavLink active href='#'>
                link 1 active
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href='#'>
                link 2 disabilitato
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#'>link 3</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#'>link 4</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#'>link 5</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href='#'>link 6</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </section>
  );
};

export const ConDropdown = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggle = () => {
    setOpenNav(!openNav);
  };
  return (
    <section>
      <Navbar expand='lg'>
        <NavbarBrand />
        <NavbarToggler className='custom-navbar-toggler' onClick={toggle}>
          <span className='it-list' />
        </NavbarToggler>

        <Collapse isOpen={openNav} navbar>
          <Nav navbar className='mt-0'>
            <NavItem active>
              <NavLink active href='#'>
                link 1 active
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href='#'>
                link 2 disabilitato
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#'>link 3</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#'>link 4</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#'>link 5</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Dropdown item
              </DropdownToggle>
              <DropdownMenu>
                <LinkList>
                  <LinkListItem header>Header</LinkListItem>
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
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </section>
  );
};

export const ConMegamenuInProgress = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggle = () => {
    setOpenNav(!openNav);
  };
  return (
    <section>
      <Navbar expand='lg' className='megamenu'>
        <NavbarBrand />
        <NavbarToggler className='custom-navbar-toggler' onClick={toggle}>
          <span className='it-list' />
        </NavbarToggler>

        <Collapse isOpen={openNav} navbar>
          <Nav className='mt-0' navbar>
            <NavItem active>
              <UncontrolledDropdown tag='div' nav inNavbar>
                <DropdownToggle nav caret>
                  Megamenu 1
                </DropdownToggle>
                <DropdownMenu>
                  <LinkList>
                    <LinkListItem header>Header</LinkListItem>
                  </LinkList>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>
            <NavItem>
              <UncontrolledDropdown tag='div' nav inNavbar>
                <DropdownToggle nav caret>
                  Megamenu 2
                </DropdownToggle>
                <DropdownMenu>
                  <LinkList>
                    <LinkListItem header>Header</LinkListItem>
                  </LinkList>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>
            <NavItem>
              <UncontrolledDropdown tag='div' nav inNavbar>
                <DropdownToggle nav caret>
                  Megamenu 3
                </DropdownToggle>
                <DropdownMenu>
                  <LinkList>
                    <LinkListItem header>Header</LinkListItem>
                  </LinkList>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </section>
  );
};

ConMegamenuInProgress.story = {
  name: 'Con Megamenu (in progress)'
};

export const InlineMenu = () => {
  const [collapseOpen1, setCollapseOpen1] = useState(false);
  const [collapseOpen2, setCollapseOpen2] = useState(false);
  const [collapseOpen3, setCollapseOpen3] = useState(false);

  const expanded = {
    'aria-expanded': true
  };
  const toggle = (e, id) => {
    e.preventDefault();
    switch (id) {
      case 1:
        return setCollapseOpen1(!collapseOpen1);
      case 2:
        return setCollapseOpen2(!collapseOpen2);
      case 3:
        return setCollapseOpen3(!collapseOpen3);
    }
  };
  return (
    <nav className='inline-menu'>
      <LinkList>
        <LinkListItem
          size='large'
          className='right-icon'
          onClick={(e) => toggle(e, 1)}
          {...(collapseOpen1 ? expanded : {})}
        >
          <span>Link list 1 </span>
          <Icon className='right' icon='it-expand' aria-hidden />
        </LinkListItem>
        <Collapse isOpen={collapseOpen1}>
          <LinkList sublist>
            <LinkListItem>
              <span>Link list 4 </span>
            </LinkListItem>
            <LinkListItem>
              <span>Link list 5 </span>
            </LinkListItem>
            <LinkListItem>
              <span>Link list 6 </span>
            </LinkListItem>
          </LinkList>
        </Collapse>
        <LinkListItem
          size='large'
          className='right-icon'
          onClick={(e) => toggle(e, 2)}
          {...(collapseOpen2 ? expanded : {})}
        >
          <span>Link list 2 </span>
          <Icon className='right' icon='it-expand' aria-hidden />
        </LinkListItem>
        <Collapse isOpen={collapseOpen2}>
          <LinkList sublist>
            <LinkListItem>
              <span>Link list 7 </span>
            </LinkListItem>
            <LinkListItem>
              <span>Link list 8 </span>
            </LinkListItem>
            <LinkListItem>
              <span>Link list 9 </span>
            </LinkListItem>
          </LinkList>
        </Collapse>
        <LinkListItem
          size='large'
          className='right-icon'
          onClick={(e) => toggle(e, 3)}
          {...(collapseOpen3 ? expanded : {})}
        >
          <span>Link list 3 </span>
          <Icon className='right' icon='it-expand' aria-hidden />
        </LinkListItem>
        <Collapse isOpen={collapseOpen3}>
          <LinkList sublist>
            <LinkListItem>
              <span>Link list 10 </span>
            </LinkListItem>
            <LinkListItem>
              <span>Link list 11 </span>
            </LinkListItem>
            <LinkListItem>
              <span>Link list 12 </span>
            </LinkListItem>
          </LinkList>
        </Collapse>
      </LinkList>
    </nav>
  );
};

InlineMenu.story = {
  name: 'Inline Menù'
};

_EsempiInterattivi.story = {
  name: 'Esempi interattivi'
};

_EsempiInterattivi.args = {
  placement: '',
  variation: '',
  color: '#e3f2fd'
};
_EsempiInterattivi.argTypes = {
  placement: {
    control: {
      type: 'select',
      options: ['', 'top', 'bottom']
    }
  },
  variation: {
    control: {
      type: 'select',
      options: ['', 'primary', 'dark']
    }
  },
  color: {
    control: {
      type: 'color'
    }
  }
};
