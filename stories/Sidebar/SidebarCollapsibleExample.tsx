import React, { useState } from 'react';
import { Collapse, LinkList, LinkListItem, Sidebar, Icon } from '../../src';

const SidebarCollapseExample = () => {
  const [collapseOpen1, toggleCollapse1] = useState(false);
  const [collapseOpen2, toggleCollapse2] = useState(false);
  const [collapseOpen3, toggleCollapse3] = useState(false);

  return (
    <Sidebar left>
      <LinkList>
        <LinkListItem
          size='medium'
          className='right-icon'
          onClick={(e) => {
            e.preventDefault();
            toggleCollapse1(!collapseOpen1);
          }}
          aria-expanded={collapseOpen1}
        >
          <span>Link list 1 </span>
          <Icon
            className='right'
            icon='it-expand'
            color='primary'
            aria-hidden
          />
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
          size='medium'
          className='right-icon'
          onClick={(e) => {
            e.preventDefault();
            toggleCollapse2(!collapseOpen2);
          }}
          aria-expanded={collapseOpen2}
        >
          <span>Link list 2 </span>
          <Icon
            className='right'
            icon='it-expand'
            color='primary'
            aria-hidden
          />
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
          size='medium'
          className='right-icon'
          onClick={(e) => {
            e.preventDefault();
            toggleCollapse3(!collapseOpen3);
          }}
          aria-expanded={collapseOpen3}
        >
          <span>Link list 3 </span>
          <Icon
            className='right'
            icon='it-expand'
            color='primary'
            aria-hidden
          />
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
        <Sidebar secondary />
        <LinkListItem>
          <span>Secondary item</span>
        </LinkListItem>
        <LinkListItem active>
          <span>Secondary item active</span>
        </LinkListItem>
        <LinkListItem disabled>
          <span>Secondary item disabled</span>
        </LinkListItem>
      </LinkList>
    </Sidebar>
  );
};

export default SidebarCollapseExample;
