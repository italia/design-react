import React from 'react';

import { CookieBar, CookieBarButtons, CookieBarButton } from '../../src';

export const ComeUsarlo = ({ open }) => {
  return (
    <CookieBar style={{ display: open ? 'block' : 'none' }}>
      <p>
        Questo sito utilizza cookie tecnici, analytics e di terze parti. <br />
        Proseguendo nella navigazione accetti l’utilizzo dei cookie.
      </p>
      <CookieBarButtons>
        <CookieBarButton href='#'>
          Preferenze<span className='sr-only'>cookies</span>
        </CookieBarButton>
        <CookieBarButton>
          Accetto<span className='sr-only'> i cookies</span>
        </CookieBarButton>
      </CookieBarButtons>
    </CookieBar>
  );
};

export default {
  title: 'Componenti/Cookiebar'
};

ComeUsarlo.args = {
  open: true
};
