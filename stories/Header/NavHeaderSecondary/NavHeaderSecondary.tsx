import React from 'react';

import {
  Collapse,
  Header,
  HeaderContent,
  Icon,
  Nav,
  NavItem,
  NavLink,
  HeaderToggler
} from '../../../src';

const NavHeader = ({ theme, isOpen }) => {
  return (
    <Header type='navbar' theme={theme}>
      <HeaderContent expand='lg' megamenu>
        <HeaderToggler
          onClick={() => {
            /* set logic open state  */
          }}
          aria-controls='nav1'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <Icon icon='it-burger' />
        </HeaderToggler>
        <Collapse
          navbar
          header
          isOpen={isOpen}
          onOverlayClick={() => {
            /* set close logic here */
          }}
        >
          <div className='menu-wrapper'>
            <Nav navbar>
              <NavItem active>
                <NavLink href='#' active>
                  <span>link 1 active </span>
                  <span className='sr-only'>current</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>Link 2</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>Link 3</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>Link 4</NavLink>
              </NavItem>
            </Nav>
            <Nav navbar secondary>
              <NavItem>
                <NavLink href='#'>Link 5</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>Link 6</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>Link 7</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>Link 8</NavLink>
              </NavItem>
            </Nav>
          </div>
        </Collapse>
      </HeaderContent>
    </Header>
  );
};

export default NavHeader;
