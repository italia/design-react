import React, { Context } from 'react';

export const SLIM = 'slim';
export const CENTER = 'center';
export const NAVBAR = 'navbar';

export const HeaderContext: Context<{
  type?: typeof SLIM | typeof CENTER | typeof NAVBAR;
}> = React.createContext({});
