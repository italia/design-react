import React from 'react';

import {
  AvatarIcon,
  AvatarContainer,
  AvatarPresence,
  AvatarWrapper,
  AvatarStatus,
  Icon
} from '../../src';

// import UserPresence from './UserPresence'
// import UserStatus from './UserStatus'

export default {
  title: 'Componenti/Avatar/Behavior'
};

export const UserPresence = () => {
  return (
    <div>
      <AvatarContainer>
        <AvatarWrapper>
          <AvatarIcon size='xl'>
            <img
              src='https://randomuser.me/api/portraits/men/43.jpg'
              alt='Mario Rossi'
            />
            <AvatarPresence presence='active'>
              <span className='sr-only'>Presenza:attivo</span>
            </AvatarPresence>
          </AvatarIcon>
        </AvatarWrapper>
        <AvatarWrapper>
          <AvatarIcon size='xl'>
            <img
              src='https://randomuser.me/api/portraits/women/41.jpg'
              alt='Luisa Neri'
            />
            <AvatarPresence presence='busy'>
              <Icon color='white' icon='it-minus' />
              <span className='sr-only'>Presenza: non disponibile</span>
            </AvatarPresence>
          </AvatarIcon>
        </AvatarWrapper>
        <AvatarWrapper>
          <AvatarIcon size='xl'>
            <img
              src='https://randomuser.me/api/portraits/men/33.jpg'
              alt='Gioacchino Romani'
            />
            <AvatarPresence presence='hidden'>
              <span className='sr-only'>Presenza: invisible</span>
            </AvatarPresence>
          </AvatarIcon>
        </AvatarWrapper>
      </AvatarContainer>
      <AvatarContainer>
        <AvatarWrapper>
          <AvatarIcon size='md'>
            <img
              src='https://randomuser.me/api/portraits/women/32.jpg'
              alt='Ludovica Galli'
            />
            <AvatarPresence presence='busy'>
              <Icon color='white' icon='it-minus' />
              <span className='sr-only'>Presenza: non disponibile</span>
            </AvatarPresence>
          </AvatarIcon>
        </AvatarWrapper>
        <AvatarWrapper>
          <AvatarIcon size='lg'>
            <img
              src='https://randomuser.me/api/portraits/women/32.jpg'
              alt='Ludovica Galli'
            />
            <AvatarPresence presence='busy'>
              <Icon color='white' icon='it-minus' />
              <span className='sr-only'>Presenza: non disponibile</span>
            </AvatarPresence>
          </AvatarIcon>
        </AvatarWrapper>
        <AvatarWrapper>
          <AvatarIcon size='xl'>
            <img
              src='https://randomuser.me/api/portraits/women/32.jpg'
              alt='Ludovica Galli'
            />
            <AvatarPresence presence='busy'>
              <Icon color='white' icon='it-minus' />
              <span className='sr-only'>Presenza: non disponibile</span>
            </AvatarPresence>
          </AvatarIcon>
        </AvatarWrapper>
        <AvatarWrapper>
          <AvatarIcon size='xxl'>
            <img
              src='https://randomuser.me/api/portraits/women/32.jpg'
              alt='Ludovica Galli'
            />
            <AvatarPresence presence='busy'>
              <Icon color='white' icon='it-minus' />
              <span className='sr-only'>Presenza: non disponibile</span>
            </AvatarPresence>
          </AvatarIcon>
        </AvatarWrapper>
      </AvatarContainer>
    </div>
  );
};

export const UserStatus = () => {
  return (
    <div>
      <AvatarContainer>
        <AvatarWrapper>
          <AvatarIcon size='xl'>
            <img
              src='https://randomuser.me/api/portraits/men/43.jpg'
              alt='Mario Rossi'
            />
            <AvatarStatus status='approved'>
              <Icon color='white' icon='it-check' />
              <span className='sr-only'>Stato: approvato</span>
            </AvatarStatus>
          </AvatarIcon>
        </AvatarWrapper>
        <AvatarWrapper>
          <AvatarIcon size='xl'>
            <img
              src='https://randomuser.me/api/portraits/women/41.jpg'
              alt='Luisa Neri'
            />
            <AvatarStatus status='declined'>
              <Icon color='white' icon='it-close' />
              <span className='sr-only'>Stato: respinto</span>
            </AvatarStatus>
          </AvatarIcon>
        </AvatarWrapper>
        <AvatarWrapper>
          <AvatarIcon size='xl'>
            <img
              src='https://randomuser.me/api/portraits/men/33.jpg'
              alt='Gioacchino Romani'
            />
            <AvatarStatus status='notify'>
              <span className='sr-only'>Testa notifica</span>
            </AvatarStatus>
          </AvatarIcon>
        </AvatarWrapper>
      </AvatarContainer>
      <AvatarContainer>
        <AvatarWrapper>
          <AvatarIcon size='md'>
            <img
              src='https://randomuser.me/api/portraits/women/32.jpg'
              alt='Ludovica Galli'
            />
            <AvatarStatus status='approved'>
              <Icon color='white' icon='it-check' />
              <span className='sr-only'>Stato: approvato</span>
            </AvatarStatus>
          </AvatarIcon>
        </AvatarWrapper>
        <AvatarWrapper>
          <AvatarIcon size='lg'>
            <img
              src='https://randomuser.me/api/portraits/women/32.jpg'
              alt='Ludovica Galli'
            />
            <AvatarStatus status='declined'>
              <Icon color='white' icon='it-close' />
              <span className='sr-only'>Stato: respinto</span>
            </AvatarStatus>
          </AvatarIcon>
        </AvatarWrapper>
        <AvatarWrapper>
          <AvatarIcon size='xl'>
            <img
              src='https://randomuser.me/api/portraits/women/32.jpg'
              alt='Ludovica Galli'
            />
            <AvatarStatus status='approved'>
              <Icon color='white' icon='it-check' />
              <span className='sr-only'>Stato: approvato</span>
            </AvatarStatus>
          </AvatarIcon>
        </AvatarWrapper>
        <AvatarWrapper>
          <AvatarIcon size='xxl'>
            <img
              src='https://randomuser.me/api/portraits/women/32.jpg'
              alt='Ludovica Galli'
            />
            <AvatarStatus status='declined'>
              <Icon color='white' icon='it-close' />
              <span className='sr-only'>Stato: approvato</span>
            </AvatarStatus>
          </AvatarIcon>
        </AvatarWrapper>
      </AvatarContainer>
    </div>
  );
};
