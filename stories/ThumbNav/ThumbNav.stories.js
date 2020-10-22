import React from 'react'
import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import { ThumbNav, ThumbNavItem } from '../../src'

import Esempio from './docs/Esempio.md'
import Overlay from './docs/Overlay.md'

const EsempioComponent = () => (
  <ThumbNav overlayOnHover="black" rowItems="4">
    <ThumbNavItem targetUrl="#" imageUrl="https://picsum.photos/480/320?image=1044" actionDescription="Show image 1"/>
    <ThumbNavItem targetUrl="#" imageUrl="https://picsum.photos/480/320?image=1050" actionDescription="Show image 2"/>
    <ThumbNavItem targetUrl="#" imageUrl="https://picsum.photos/480/320?image=1037" actionDescription="Show image 3"/>
    <ThumbNavItem targetUrl="#" imageUrl="https://picsum.photos/480/320?image=1040" actionDescription="Show image 4"/>
    <ThumbNavItem targetUrl="#" imageUrl="https://picsum.photos/480/320?image=1055" actionDescription="Show image 5"/>
    <ThumbNavItem targetUrl="#" imageUrl="https://picsum.photos/480/320?image=1057" actionDescription="Show image 6"/>
  </ThumbNav>
)

const OverlayComponent = () => (
  <div class="test-gallery position-relative">
    <img src="https://picsum.photos/1280/720?image=1050" class="test-image" alt="Amazing landscape"/>
    <ThumbNav isSmall isVertical position="left">
    <ThumbNavItem targetUrl="#" imageUrl="https://picsum.photos/480/320?image=1044" actionDescription="Show image 1"/>
    <ThumbNavItem active targetUrl="#" imageUrl="https://picsum.photos/480/320?image=1050" actionDescription="Show image 2"/>
    <ThumbNavItem targetUrl="#" imageUrl="https://picsum.photos/480/320?image=1037" actionDescription="Show image 3"/>
    <ThumbNavItem targetUrl="#" imageUrl="https://picsum.photos/480/320?image=1040" actionDescription="Show image 4"/>
    </ThumbNav>
  </div>
)

storiesOf('Componenti/ThumbNav', module)
  .addDecorator(withA11y)
  .add(
    'Esempio',
    withInfo({
      text: Esempio,
      propTables: [ThumbNav, ThumbNavItem]
    })(EsempioComponent)
  )
  .add(
    'Overlay',
    withInfo({
      text: Overlay,
      propTables: [ThumbNav, ThumbNavItem]
    })(OverlayComponent)
  )
