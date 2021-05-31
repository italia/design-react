import React from 'react';

import {
  Button,
  Header,
  HeaderContent,
  HeaderRightZone,
  Icon,
  HeaderBrand,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Row,
  Col,
  LinkList,
  LinkListItem
} from '../../../src';

const SlimHeader = ({ theme }) => {
  return (
    <Header type='slim' theme={theme}>
      <HeaderContent>
        <HeaderBrand responsive>Ente appartenenza/Owner</HeaderBrand>
        <HeaderRightZone>
          <UncontrolledDropdown nav tag='div'>
            <DropdownToggle nav caret>
              ITA
              <Icon icon='it-expand' />
            </DropdownToggle>
            <DropdownMenu>
              <Row>
                <Col size='12'>
                  <LinkList>
                    <LinkListItem tag={DropdownItem} href='#'>
                      <span>ITA</span>
                    </LinkListItem>
                    <LinkListItem tag={DropdownItem} href='#'>
                      <span>ENG</span>
                    </LinkListItem>
                  </LinkList>
                </Col>
              </Row>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Button color='primary' size='full' className='btn-icon' href='#'>
            <span className='rounded-icon'>
              <Icon color='primary' icon='it-user' />
            </span>
            <span className='d-none d-lg-block'>
              Accedi all&#39;area personale
            </span>
          </Button>
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  );
};

export default SlimHeader;
