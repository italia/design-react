import React from 'react';

import { ThumbNav, ThumbNavItem } from '../../src';

export const Esempio = () => (
  <ThumbNav>
    <ThumbNavItem
      targetUrl='#'
      imageUrl='https://picsum.photos/480/320?image=1044'
      actionDescription='Visualizza immagine 1'
    />
    <ThumbNavItem
      targetUrl='#'
      imageUrl='https://picsum.photos/480/320?image=1050'
      actionDescription='Visualizza immagine 2'
    />
    <ThumbNavItem
      targetUrl='#'
      imageUrl='https://picsum.photos/480/320?image=1037'
      actionDescription='Visualizza immagine 3'
    />
  </ThumbNav>
);

export const EsempioSmall = () => (
  <ThumbNav isSmall>
    <ThumbNavItem
      targetUrl='#'
      imageUrl='https://picsum.photos/480/320?image=1044'
      actionDescription='Visualizza immagine 1'
    />
    <ThumbNavItem
      targetUrl='#'
      imageUrl='https://picsum.photos/480/320?image=1050'
      actionDescription='Visualizza immagine 2'
    />
    <ThumbNavItem
      targetUrl='#'
      imageUrl='https://picsum.photos/480/320?image=1037'
      actionDescription='Visualizza immagine 3'
    />
  </ThumbNav>
);

export const EsempioNoZoom = () => (
  <ThumbNav noZoomOnHover>
    <ThumbNavItem
      targetUrl='#'
      imageUrl='https://picsum.photos/480/320?image=1044'
      actionDescription='Visualizza immagine 1'
    />
    <ThumbNavItem
      targetUrl='#'
      imageUrl='https://picsum.photos/480/320?image=1050'
      actionDescription='Visualizza immagine 2'
    />
    <ThumbNavItem
      targetUrl='#'
      imageUrl='https://picsum.photos/480/320?image=1037'
      actionDescription='Visualizza immagine 3'
    />
  </ThumbNav>
);

export const EsempioBlackLayer = () => (
  <ThumbNav overlayOnHover='black'>
    <ThumbNavItem
      targetUrl='#'
      imageUrl='https://picsum.photos/480/320?image=1044'
      actionDescription='Visualizza immagine 1'
    />
    <ThumbNavItem
      targetUrl='#'
      imageUrl='https://picsum.photos/480/320?image=1050'
      actionDescription='Visualizza immagine 2'
    />
    <ThumbNavItem
      targetUrl='#'
      imageUrl='https://picsum.photos/480/320?image=1037'
      actionDescription='Visualizza immagine 3'
    />
  </ThumbNav>
);

export const EsempioPrimaryLayer = () => (
  <ThumbNav overlayOnHover='primary'>
    <ThumbNavItem
      targetUrl='#'
      imageUrl='https://picsum.photos/480/320?image=1044'
      actionDescription='Visualizza immagine 1'
    />
    <ThumbNavItem
      targetUrl='#'
      imageUrl='https://picsum.photos/480/320?image=1050'
      actionDescription='Visualizza immagine 2'
    />
    <ThumbNavItem
      targetUrl='#'
      imageUrl='https://picsum.photos/480/320?image=1037'
      actionDescription='Visualizza immagine 3'
    />
  </ThumbNav>
);

export const EsempioVerticale = () => (
  <ThumbNav isVertical>
    <ThumbNavItem
      targetUrl='#'
      imageUrl='https://picsum.photos/480/320?image=1044'
      actionDescription='Visualizza immagine 1'
    />
    <ThumbNavItem
      targetUrl='#'
      imageUrl='https://picsum.photos/480/320?image=1050'
      actionDescription='Visualizza immagine 2'
    />
    <ThumbNavItem
      targetUrl='#'
      imageUrl='https://picsum.photos/480/320?image=1037'
      actionDescription='Visualizza immagine 3'
    />
  </ThumbNav>
);

export const Overlay = ({ position }) => (
  <div className='position-relative'>
    <img
      src='https://picsum.photos/1280/720?image=1050'
      className='test-image'
      alt='Amazing landscape'
    />
    <ThumbNav isSmall position={position}>
      <ThumbNavItem
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1044'
        actionDescription='Visualizza immagine 1'
      />
      <ThumbNavItem
        active
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1050'
        actionDescription='Visualizza immagine 2'
      />
      <ThumbNavItem
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1037'
        actionDescription='Visualizza immagine 3'
      />
      <ThumbNavItem
        targetUrl='#'
        imageUrl='https://picsum.photos/480/320?image=1040'
        actionDescription='Visualizza immagine 4'
      />
    </ThumbNav>
  </div>
);

Overlay.args = {
  position: 'bottom'
};
Overlay.argTypes = {
  position: {
    control: {
      type: 'select',
      options: ['left', 'bottom', 'right', 'top']
    }
  }
};

export const OverlayBottom = Overlay.bind({});
OverlayBottom.args = { position: 'bottom' };
export const OverlayTop = Overlay.bind({ position: 'top' });
OverlayTop.args = { position: 'top' };
export const OverlayLeft = Overlay.bind({ position: 'left' });
OverlayLeft.args = { position: 'left' };
export const OverlayRight = Overlay.bind({ position: 'right' });
OverlayRight.args = { position: 'right' };

export const EsempioFixed = () => (
  <ThumbNav fixedWidth>
    <ThumbNavItem
      targetUrl='#'
      imageUrl='https://picsum.photos/480/320?image=1044'
      actionDescription='Visualizza immagine 1'
    />
    <ThumbNavItem
      targetUrl='#'
      imageUrl='https://picsum.photos/480/320?image=1050'
      actionDescription='Visualizza immagine 2'
    />
    <ThumbNavItem
      targetUrl='#'
      imageUrl='https://picsum.photos/480/320?image=1037'
      actionDescription='Visualizza immagine 3'
    />
    <ThumbNavItem
      targetUrl='#'
      imageUrl='https://picsum.photos/480/320?image=1040'
      actionDescription='Visualizza immagine 4'
    />
    <ThumbNavItem
      targetUrl='#'
      imageUrl='https://picsum.photos/480/320?image=1055'
      actionDescription='Visualizza immagine 5'
    />
    <ThumbNavItem
      targetUrl='#'
      imageUrl='https://picsum.photos/480/320?image=1057'
      actionDescription='Visualizza immagine 6'
    />
  </ThumbNav>
);

export const EsempioAutoWidth = ({ rowItems }) => (
  <ThumbNav rowItems={rowItems}>
    <ThumbNavItem
      targetUrl='#'
      imageUrl='https://picsum.photos/480/320?image=1044'
      actionDescription='Visualizza immagine 1'
    />
    <ThumbNavItem
      targetUrl='#'
      imageUrl='https://picsum.photos/480/320?image=1050'
      actionDescription='Visualizza immagine 2'
    />
    <ThumbNavItem
      targetUrl='#'
      imageUrl='https://picsum.photos/480/320?image=1037'
      actionDescription='Visualizza immagine 3'
    />
    <ThumbNavItem
      targetUrl='#'
      imageUrl='https://picsum.photos/480/320?image=1040'
      actionDescription='Visualizza immagine 4'
    />
    <ThumbNavItem
      targetUrl='#'
      imageUrl='https://picsum.photos/480/320?image=1055'
      actionDescription='Visualizza immagine 5'
    />
    <ThumbNavItem
      targetUrl='#'
      imageUrl='https://picsum.photos/480/320?image=1057'
      actionDescription='Visualizza immagine 6'
    />
  </ThumbNav>
);

EsempioAutoWidth.args = {
  rowItems: 3
};
EsempioAutoWidth.argTypes = {
  rowItems: {
    control: {
      type: 'select',
      options: [2, 3, 4, 5]
    }
  }
};

export const EsempioAutoWidthThree = EsempioAutoWidth.bind({});
EsempioAutoWidthThree.args = { rowItems: 3 };
export const EsempioAutoWidthFive = EsempioAutoWidth.bind({});
EsempioAutoWidthFive.args = { rowItems: 5 };

export default {
  title: 'Componenti/ThumbNav'
};
