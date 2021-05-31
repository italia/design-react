import ComponenteMenuInline from './ComponenteMenuInline';
import PosizionamentoFondoPagina from './PosizionamentoFondoPagina';
import PosizionamentoTestaAlla from './PosizionamentoTestaAlla';

export default {
  title: 'Componenti/NavScroll'
};

export const PosizionamentoAFondoPaginaConLineaASinistra = PosizionamentoFondoPagina.bind(
  {}
);

PosizionamentoAFondoPaginaConLineaASinistra.story = {
  name: 'Posizionamento a fondo pagina con linea a sinistra'
};

export const PosizionamentoInTestaAllaPaginaConLineaADestra = PosizionamentoTestaAlla.bind(
  {}
);

PosizionamentoInTestaAllaPaginaConLineaADestra.story = {
  name: 'Posizionamento in testa alla pagina con linea a destra'
};

export const _MenuInline = ComponenteMenuInline;
