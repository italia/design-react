import React from 'react';
import { AvatarIcon, LinkListItem, LinkList, Icon } from '../../src';

export default {
  title: 'Componenti/Avatar/Avatar groups List'
};

export const AvatarSmallList = () => {
  return (
    <LinkList avatar>
      <LinkListItem href='#'>
        <AvatarIcon size='sm'>
          <img
            src='https://randomuser.me/api/portraits/men/43.jpg'
            alt='Mario Rossi'
          />
        </AvatarIcon>
        <span>Mario Rossi</span>
      </LinkListItem>
      <LinkListItem href='#'>
        <AvatarIcon size='sm' color='orange'>
          <p aria-hidden='true'>A</p>
        </AvatarIcon>
        <span>Arianna Gallo</span>
      </LinkListItem>
      <LinkListItem>
        <AvatarIcon size='sm' color='red'>
          <p aria-hidden='true'>S</p>
        </AvatarIcon>
        <span>Sara Ghione</span>
      </LinkListItem>
      <LinkListItem>
        <AvatarIcon size='sm'>
          <Icon icon='it-user' />
        </AvatarIcon>
        <span>Antonio Esposito</span>
      </LinkListItem>
    </LinkList>
  );
};

export const AvatarMediaList = () => {
  return (
    <LinkList avatar>
      <LinkListItem href='#'>
        <AvatarIcon size='md'>
          <img
            src='https://randomuser.me/api/portraits/men/43.jpg'
            alt='Mario Rossi'
          />
        </AvatarIcon>
        <span>Mario Rossi</span>
      </LinkListItem>
      <LinkListItem href='#'>
        <AvatarIcon size='md' color='green'>
          <p aria-hidden='true'>AG</p>
        </AvatarIcon>
        <span>Arianna Gallo</span>
      </LinkListItem>
      <LinkListItem>
        <AvatarIcon size='md' color='primary'>
          <p aria-hidden='true'>S</p>
        </AvatarIcon>
        <span>Sara Ghione</span>
      </LinkListItem>
      <LinkListItem>
        <AvatarIcon size='md'>
          <Icon icon='it-user' />
        </AvatarIcon>
        <span>Antonio Esposito</span>
      </LinkListItem>
    </LinkList>
  );
};
