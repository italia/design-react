import React from 'react';

import { Pager, PagerItem, PagerLink, Icon } from '../../src';

const EsempiComponent = () => (
  <Pager aria-label='Esempio di navigazione'>
    <ul className='pagination'>
      <PagerItem>
        <PagerLink previous href='#'>
          <Icon icon='it-chevron-left' aria-hidden />
        </PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink href='#'>1</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink href='#'>2</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink href='#'>3</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink next href='#'>
          <Icon icon='it-chevron-right' aria-hidden />
        </PagerLink>
      </PagerItem>
    </ul>
  </Pager>
);

export const StatoDisabilitatoEAttivo = () => (
  <Pager aria-label='Esempio di navigazione'>
    <ul className='pagination'>
      <PagerItem disabled>
        <PagerLink previous href='#'>
          <Icon icon='it-chevron-left' aria-hidden />
        </PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink aria-current='page' href='#'>
          1
        </PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink href='#'>2</PagerLink>
      </PagerItem>
      <PagerItem disabled>
        <PagerLink href='#'>3</PagerLink>
      </PagerItem>
      <PagerItem disabled>
        <PagerLink next href='#'>
          <Icon icon='it-chevron-right' aria-hidden />
        </PagerLink>
      </PagerItem>
    </ul>
  </Pager>
);

const AllineamentoComponent = () => (
  <section>
    <Pager
      className='justify-content-center'
      aria-label='Esempio di navigazione'
    >
      <ul className='pagination'>
        <PagerItem disabled>
          <PagerLink previous href='#'>
            <Icon icon='it-chevron-left' aria-hidden />
          </PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink aria-current='page' href='#'>
            1
          </PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink href='#'>2</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink href='#'>3</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink next href='#'>
            <Icon icon='it-chevron-right' aria-hidden />
          </PagerLink>
        </PagerItem>
      </ul>
    </Pager>

    <Pager className='justify-content-end' aria-label='Esempio di navigazione'>
      <ul className='pagination'>
        <PagerItem disabled>
          <PagerLink previous href='#'>
            <Icon icon='it-chevron-left' aria-hidden />
          </PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink aria-current='page' href='#'>
            1
          </PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink href='#'>2</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink href='#'>3</PagerLink>
        </PagerItem>
        <PagerItem>
          <PagerLink next href='#'>
            <Icon icon='it-chevron-right' aria-hidden />
          </PagerLink>
        </PagerItem>
      </ul>
    </Pager>
  </section>
);

const ResponsiveComponent = () => (
  <Pager aria-label='Esempio di navigazione'>
    <ul className='pagination'>
      <PagerItem>
        <PagerLink previous href='#'>
          <Icon icon='it-chevron-left' aria-hidden />
        </PagerLink>
      </PagerItem>
      <PagerItem className='d-sm-block'>
        <PagerLink href='#'>9</PagerLink>
      </PagerItem>
      <PagerItem className='d-sm-block'>
        <PagerLink href='#'>10</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink aria-current='page' href='#'>
          <span className='d-sm-none'>Pagina&nbsp;</span>11
        </PagerLink>
      </PagerItem>
      <PagerItem className='d-sm-block'>
        <PagerLink href='#'>12</PagerLink>
      </PagerItem>
      <PagerItem className='d-sm-block'>
        <PagerLink href='#'>13</PagerLink>
      </PagerItem>
      <PagerItem>
        <PagerLink next href='#'>
          <Icon icon='it-chevron-right' aria-hidden />
        </PagerLink>
      </PagerItem>
    </ul>
  </Pager>
);

// export const _EsempiInterattivi = () => {
//   const active = boolean('Attivo', false)
//   const disabled = boolean('Disabilitato', false)

//   let current = {}
//   if (active) {
//     current = {
//       'aria-current': 'page'
//     }
//   }
//   return (
//     <Pager aria-label="Esempio di navigazione">
//       <ul className="pagination">
//         <PagerItem disabled={disabled}>
//           <PagerLink {...current} previous href="#">
//             <Icon icon="it-chevron-left" aria-hidden />
//           </PagerLink>
//         </PagerItem>
//         <PagerItem disabled={disabled}>
//           <PagerLink {...current} href="#">
//             1
//           </PagerLink>
//         </PagerItem>
//         <PagerItem disabled={disabled}>
//           <PagerLink {...current} next href="#">
//             <Icon icon="it-chevron-right" aria-hidden />
//           </PagerLink>
//         </PagerItem>
//       </ul>
//     </Pager>
//   )
// }

export default {
  title: 'Componenti/Pager',

  parameters: {
    viewport: { defaultViewport: 'iphone6' }
  }
};

export const _Esempi = EsempiComponent;

StatoDisabilitatoEAttivo.story = {
  name: 'Stato disabilitato e attivo'
};

export const _Allineamento = AllineamentoComponent;

export const _Responsive = ResponsiveComponent;

// _EsempiInterattivi.story = {
//   name: 'Esempi interattivi'
// }
