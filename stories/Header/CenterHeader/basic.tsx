/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from 'react';

import {
  Header,
  HeaderContent,
  HeaderSearch,
  HeaderRightZone,
  HeaderSocialsZone,
  Icon,
  HeaderBrand
} from '../../../src';

const CenterHeader = ({ type, theme, isSmall }) => {
  return (
    <Header type={type} theme={theme} small={isSmall}>
      <HeaderContent>
        <HeaderBrand iconName='it-code-circle'>
          <h2>Lorem Ipsum Lorem Ipsum</h2>
          <h3>Inserire qui la tag line</h3>
        </HeaderBrand>
        <HeaderRightZone>
          <HeaderSocialsZone label='Seguici su'>
            <ul>
              <li>
                <a href='#' aria-label='Facebook' target='_blank'>
                  <Icon icon='it-facebook' />
                </a>
              </li>
              <li>
                <a href='#' aria-label='Github' target='_blank'>
                  <Icon icon='it-github' />
                </a>
              </li>
              <li>
                <a href='#' aria-label='Twitter' target='_blank'>
                  <Icon icon='it-twitter' />
                </a>
              </li>
            </ul>
          </HeaderSocialsZone>
          <HeaderSearch label='Cerca' iconName='it-search' />
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  );
};

export default CenterHeader;
