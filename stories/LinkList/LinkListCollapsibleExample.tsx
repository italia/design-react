import React, { useState } from 'react';
import { Collapse, Icon, LinkList, LinkListItem } from '../../src';

const CollapseExample = () => {
  const [collapseOpen1, toggleCollapse1] = useState(false);
  const [collapseOpen2, toggleCollapse2] = useState(false);
  const [collapseOpen3, toggleCollapse3] = useState(false);

  const onToggle1 = (e) => {
    e.preventDefault();
    toggleCollapse1(!collapseOpen1);
  };

  const onToggle2 = (e) => {
    e.preventDefault();
    toggleCollapse2(!collapseOpen2);
  };

  const onToggle3 = (e) => {
    e.preventDefault();
    toggleCollapse3(!collapseOpen3);
  };

  const expanded = {
    'aria-expanded': true
  };
  return (
    <LinkList>
      <LinkListItem
        size='medium'
        className='right-icon'
        onClick={onToggle1}
        {...(collapseOpen1 ? expanded : {})}
      >
        <span>Link list 1 </span>
        <i className='it-expand right' />
        <Icon className='right' color='primary' icon='it-expand' aria-hidden />
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
        onClick={onToggle2}
        {...(collapseOpen2 ? expanded : {})}
      >
        <span>Link list 2 </span>
        <i className='it-expand right' />
        <Icon className='right' color='primary' icon='it-expand' aria-hidden />
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
        onClick={onToggle3}
        {...(collapseOpen3 ? expanded : {})}
      >
        <span>Link list 3 </span>
        <i className='it-expand right' />
        <Icon className='right' color='primary' icon='it-expand' aria-hidden />
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
  );
};

export default CollapseExample;
