import React from 'react';
import { Meta } from '@storybook/react';

import { Header } from '../../src';

import SlimHeaderBasic from './SlimHeader/basic';
import SlimHeaderFull from './SlimHeader/basic-full-responsive';
import CenterHeaderBasic from './CenterHeader/basic';
import NavHeaderBasic from './NavHeader/basic';
import CompleteHeaderBasic from './CompleteHeader/basic';
import NavHeaderSecondary from './NavHeaderSecondary/NavHeaderSecondary';

import Introduction from './Introduction';

const meta: Meta = {
  title: 'Componenti/Header',
  component: Header
};
export default meta;

export const Introduzione = () => <Introduction />;

export const _HeaderSlim = SlimHeaderBasic.bind({});
_HeaderSlim.args = {
  theme: '',
  isOpen: false,
  brandText: 'Ente appartenenza/Owner'
};
_HeaderSlim.argTypes = {
  theme: {
    name: 'Tema',
    control: {
      type: 'select',
      options: ['', 'dark', 'light']
    }
  }
};

export const _SlimHeaderWithFullButton = SlimHeaderFull.bind({});

_SlimHeaderWithFullButton.args = {
  theme: ''
};

_SlimHeaderWithFullButton.argTypes = {
  theme: {
    control: {
      type: 'select',
      options: ['', 'dark', 'light']
    }
  }
};

export const _HeaderCenter = CenterHeaderBasic.bind({});

_HeaderCenter.args = {
  theme: '',
  isSmall: false,
  type: 'center'
};

_HeaderCenter.argTypes = {
  theme: {
    control: {
      type: 'select',
      options: ['', 'dark', 'light']
    }
  }
};

export const _HeaderNav = NavHeaderBasic.bind({});

_HeaderNav.parameters = {
  options: {
    showPanel: false
  }
};
_HeaderNav.args = {
  theme: '',
  isOpen: false
};

_HeaderNav.argTypes = {
  theme: {
    control: {
      type: 'select',
      options: ['', 'dark', 'light']
    }
  }
};

export const _HeaderNavSecondary = NavHeaderSecondary.bind({});
_HeaderNavSecondary.args = {
  theme: ''
};

export const _HeaderComplete = CompleteHeaderBasic.bind({});
_HeaderComplete.args = {
  theme: '',
  slimHeaderType: 'default',
  sticky: false
};
_HeaderComplete.argTypes = {
  slimHeaderType: {
    control: {
      type: 'select',
      options: ['default', 'Full responsive']
    }
  },
  theme: {
    control: {
      type: 'select',
      options: ['', 'dark', 'light']
    }
  }
};

export const _HeaderSlimLight = SlimHeaderBasic.bind({});
_HeaderSlimLight.args = {
  theme: 'light',
  brandText: 'Ente appartenenza/Owner'
};

export const _HeaderCenterNarrow = CenterHeaderBasic.bind({});
_HeaderCenterNarrow.args = {
  theme: '',
  type: 'center',
  brandText: 'Ente appartenenza/Owner',
  isSmall: true
};
export const _HeaderCenterNarrowLight = CenterHeaderBasic.bind({});
_HeaderCenterNarrowLight.args = {
  theme: 'light',
  type: 'center',
  brandText: 'Ente appartenenza/Owner',
  isSmall: true
};
export const _HeaderNavLight = NavHeaderBasic.bind({});
_HeaderNavLight.args = {
  theme: 'light'
};
export const _HeaderCompleteLight = CompleteHeaderBasic.bind({});
_HeaderCompleteLight.args = {
  theme: 'light',
  slimHeaderType: 'default',
  sticky: false
};
