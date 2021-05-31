import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  LinkList,
  LinkListItem
} from '../../src';

const PageChangerExample = () => {
  const [dropdownToggle, setDropdownToggle] = useState(false);
  return (
    <Dropdown
      isOpen={dropdownToggle}
      toggle={() => setDropdownToggle(!dropdownToggle)}
    >
      <DropdownToggle
        tag='a'
        id='pagerChanger'
        className='btn btn-dropdown'
        caret
      >
        pag.10
      </DropdownToggle>
      <DropdownMenu>
        <LinkList>
          <LinkListItem active>pag. 10</LinkListItem>
          <LinkListItem>pag. 20</LinkListItem>
          <LinkListItem>pag. 30</LinkListItem>
          <LinkListItem>pag. 40</LinkListItem>
          <LinkListItem>pag. 50</LinkListItem>
        </LinkList>
      </DropdownMenu>
    </Dropdown>
  );
};
export default PageChangerExample;
