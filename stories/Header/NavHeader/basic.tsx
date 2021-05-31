import React from 'react';

import {
  Collapse,
  Header,
  HeaderContent,
  Icon,
  Nav,
  NavItem,
  NavLink,
  HeaderToggler,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  LinkList,
  LinkListItem
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
                <NavLink href='#' disabled>
                  Link 2
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>Link 3</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>Link 4</NavLink>
              </NavItem>
              <NavItem>
                <UncontrolledDropdown nav tag='div'>
                  <DropdownToggle nav caret>
                    Dropdown item
                    <Icon icon='it-expand' />
                  </DropdownToggle>
                  <DropdownMenu>
                    <LinkList>
                      <LinkListItem
                        header
                        tag='h3'
                        className='no_toc'
                        id='heading-es-1'
                      >
                        Heading
                      </LinkListItem>
                      <LinkListItem tag={DropdownItem} href='#'>
                        <span>Link list 1</span>
                      </LinkListItem>
                      <LinkListItem tag={DropdownItem} href='#'>
                        <span>Link list 2</span>
                      </LinkListItem>
                      <LinkListItem tag={DropdownItem} href='#'>
                        <span>Link list 3</span>
                      </LinkListItem>
                      <LinkListItem divider />
                      <LinkListItem tag={DropdownItem} href='#'>
                        <span>Link list 4</span>
                      </LinkListItem>
                    </LinkList>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
              <NavItem>
                <NavLink href='#' disabled>
                  Megamenu label
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </Collapse>
      </HeaderContent>
    </Header>
  );
};

export default NavHeader;
