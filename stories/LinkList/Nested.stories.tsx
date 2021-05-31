import React from 'react';

import { LinkList, LinkListItem, Icon } from '../../src';

import LinkListCollapsibleExample from './LinkListCollapsibleExample';

const NavigationComponent = () => (
  <LinkList>
    <LinkListItem size='medium' className='right-icon'>
      <span>Link list 1 </span>
      <i className='it-favorite right' />
      <Icon icon='it-link' color='primary' className='right' />
    </LinkListItem>
    <LinkListItem size='medium' className='right-icon'>
      <span>Link list 2 </span>
      <i className='it-favorite right' />
      <Icon icon='it-link' color='primary' className='right' />
    </LinkListItem>
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
    <LinkListItem size='medium' className='right-icon'>
      <span>Link list 3 </span>
      <i className='it-favorite right' />
      <Icon icon='it-link' color='primary' className='right' />
    </LinkListItem>
  </LinkList>
);

export default {
  title: 'Componenti/LinkList/Nested navigation'
};

export const Fixed = NavigationComponent;

export const _Collapsible = LinkListCollapsibleExample;
