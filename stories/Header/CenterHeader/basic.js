import React from 'react'

import { boolean, select } from '@storybook/addon-knobs/react'
import {
  Header,
  HeaderContent,
  HeaderSearch,
  HeaderRightZone,
  HeaderSocialsZone,
  Icon,
  Nav,
  NavItem,
  NavLink,
  HeaderBrand
} from '../../../src'

const CenterHeader = () => {
  const theme = select('Tema', { default: '', light: 'light' }, '')
  const isSmall = boolean('Versione Small', false)

  return (
    <Header type="center" theme={theme} small={isSmall}>
      <HeaderContent>
        <HeaderBrand iconName="it-code-circle">
          <h2>Lorem Ipsum Lorem Ipsum</h2>
          <h3>Inserire qui la tag line</h3>
        </HeaderBrand>
        <HeaderRightZone>
          <HeaderSocialsZone label="Seguici su">
            <Nav inHeader>
              <NavItem>
                <NavLink href="#" aria-label="Facebook" target="_blank">
                  <Icon icon="it-facebook" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" aria-label="Github" target="_blank">
                  <Icon icon="it-github" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" aria-label="Twitter" target="_blank">
                  <Icon icon="it-twitter" />
                </NavLink>
              </NavItem>
            </Nav>
          </HeaderSocialsZone>
          <HeaderSearch label="Cerca" iconName="it-search" />
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  )
}

export default CenterHeader
