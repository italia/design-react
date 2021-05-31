/* eslint jsx-a11y/anchor-is-valid: 0 */
import React, { useRef } from 'react';
import {
  AvatarIcon,
  AvatarContainer,
  AvatarWrapper,
  AvatarExtraText,
  UncontrolledTooltip,
  Icon
} from '../../src';

export default {
  title: 'Componenti/Avatar'
};

export const AvatarWithImage = () => (
  <AvatarContainer>
    <AvatarIcon size='xs'>
      <img
        src='https://randomuser.me/api/portraits/men/46.jpg'
        alt='Mario Rossi'
      />
    </AvatarIcon>
    <AvatarIcon size='sm'>
      <img
        src='https://randomuser.me/api/portraits/women/44.jpg'
        alt='Luisa Neri'
      />
    </AvatarIcon>
    <AvatarIcon>
      <img
        src='https://randomuser.me/api/portraits/men/43.jpg'
        alt='Gioacchino Romani'
      ></img>
    </AvatarIcon>
    <AvatarIcon size='lg'>
      <img
        src='https://randomuser.me/api/portraits/women/41.jpg'
        alt='Anna Barbieri'
      />
    </AvatarIcon>
    <AvatarIcon size='xl'>
      <img
        src='https://randomuser.me/api/portraits/men/33.jpg'
        alt='Carlo Poli'
      />
    </AvatarIcon>
    <AvatarIcon size='xxl'>
      <img
        src='https://randomuser.me/api/portraits/women/24.jpg'
        alt='Giovanna Ferrero'
      />
    </AvatarIcon>
  </AvatarContainer>
);

AvatarWithImage.story = {
  name: 'Avatar with image'
};

export const AvatarWithText = () => (
  <AvatarContainer>
    <AvatarIcon size='xs'>
      <p aria-hidden='true'>M</p>
      <span className='sr-only'>Mario Rossi</span>
    </AvatarIcon>
    <AvatarIcon color='primary' size='sm'>
      <p aria-hidden='true'>M</p>
      <span className='sr-only'>Mario Rossi</span>
    </AvatarIcon>
    <AvatarIcon color='secondary'>
      <p aria-hidden='true'>MR</p>
      <span className='sr-only'>Mario Rossi</span>
    </AvatarIcon>
    <AvatarIcon color='green' size='lg'>
      <p aria-hidden='true'>MR</p>
      <span className='sr-only'>Mario Rossi</span>
    </AvatarIcon>
    <AvatarIcon color='orange' size='xl'>
      <p aria-hidden='true'>MR</p>
      <span className='sr-only'>Mario Rossi</span>
    </AvatarIcon>
    <AvatarIcon color='red' size='xxl'>
      <p aria-hidden='true'>MR</p>
      <span className='sr-only'>Mario Rossi</span>
    </AvatarIcon>
  </AvatarContainer>
);

AvatarWithText.story = {
  name: 'Avatar with text'
};

export const AvatarWithIcon = () => (
  <AvatarContainer>
    <AvatarIcon size='xs'>
      <Icon icon='it-search' />
    </AvatarIcon>
    <AvatarIcon size='sm'>
      <Icon icon='it-search' />
    </AvatarIcon>
    <AvatarIcon>
      <Icon icon='it-search' />
    </AvatarIcon>
    <AvatarIcon size='lg'>
      <Icon icon='it-search' />
    </AvatarIcon>
    <AvatarIcon size='xl'>
      <Icon icon='it-search' />
    </AvatarIcon>
    <AvatarIcon size='xxl'>
      <Icon icon='it-search' />
    </AvatarIcon>
  </AvatarContainer>
);

AvatarWithIcon.story = {
  name: 'Avatar with icon'
};

export const AvatarLink = () => (
  <AvatarContainer>
    <AvatarIcon size='xl' href='#'>
      <img
        src='https://randomuser.me/api/portraits/women/41.jpg'
        alt='Anna Barbieri'
      ></img>
    </AvatarIcon>
    <AvatarIcon size='xl' color='red' href='#'>
      <p aria-hidden='true'>MR</p>
      <span className='sr-only'>Mario Rossi</span>
    </AvatarIcon>
    <AvatarIcon size='xl'>
      <Icon icon='it-search' onClick={() => console.log('Click')} />
    </AvatarIcon>
  </AvatarContainer>
);

AvatarLink.story = {
  name: 'Avatar link'
};

export const AvatarLinkWithTooltip = () => {
  const withImageRef = useRef(null);
  const withTextRef = useRef(null);
  const withIconRef = useRef(null);
  return (
    <AvatarContainer>
      <AvatarIcon size='xl' href='#' innerRef={withImageRef}>
        <UncontrolledTooltip placement='left' target={withImageRef}>
          Anna Barbieri
          <br />
          <i>Administrator</i>
        </UncontrolledTooltip>
        <img
          src='https://randomuser.me/api/portraits/women/41.jpg'
          alt='Anna Barbieri'
        ></img>
      </AvatarIcon>
      <AvatarIcon size='xl' color='red' href='#' innerRef={withTextRef}>
        <UncontrolledTooltip placement='top' target={withTextRef}>
          Mario Rossi
          <br />
          <i>Editor</i>
        </UncontrolledTooltip>
        <p aria-hidden='true'>MR</p>
        <span className='sr-only'>Mario Rossi</span>
      </AvatarIcon>
      <AvatarIcon size='xl' href='#' innerRef={withIconRef}>
        <Icon icon='it-search' />
        <UncontrolledTooltip placement='right' target={withIconRef}>
          Search
          <br />
          <i>News Archive</i>
        </UncontrolledTooltip>
      </AvatarIcon>
    </AvatarContainer>
  );
};

AvatarLinkWithTooltip.story = {
  name: 'Avatar link with Tooltip'
};

export const AvatarWithAdditionalText = () => {
  return (
    <AvatarContainer>
      <AvatarWrapper extra='text'>
        <AvatarIcon size='xl'>
          <img
            src='https://randomuser.me/api/portraits/men/33.jpg'
            alt='Mario Rossi'
          />
        </AvatarIcon>
        <AvatarExtraText>
          <h4>
            <a href='#'>Mario Rossi</a>
          </h4>
          <time dateTime='2018-09-15'>15 Set 2018</time>
        </AvatarExtraText>
      </AvatarWrapper>
      <AvatarWrapper extra='text'>
        <AvatarIcon size='xl'>
          <img
            src='https://randomuser.me/api/portraits/women/33.jpg'
            alt='Guilia Neri'
          />
        </AvatarIcon>
        <AvatarExtraText>
          <h4>Guilia Neri</h4>
          <p>Lorem ipsum dolor</p>
        </AvatarExtraText>
      </AvatarWrapper>
      <AvatarWrapper extra='text'>
        <AvatarIcon size='xl'>
          <img
            src='https://randomuser.me/api/portraits/men/15.jpg'
            alt='Michele Dotti'
          />
        </AvatarIcon>
        <AvatarExtraText>
          <h4>
            <a href='#'>Micehele Dotti</a>
          </h4>
          <time dateTime='2018-09-15'>15 Mag 2018</time>
        </AvatarExtraText>
      </AvatarWrapper>
    </AvatarContainer>
  );
};

AvatarWithAdditionalText.story = {
  name: 'Avatar with additional text'
};
