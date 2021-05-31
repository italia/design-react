import React from 'react';

const HeaderIntroduction = () => (
  <div>
    <h1>Header</h1>

    <h3>
      Documentazione ed esempi per la creazione di una testata di navigazione.
    </h3>

    <p>
      L’header di un sito della Pubblica Amministrazione è solitamente composto
      di 3 elementi principali:
    </p>
    <ul>
      <li>
        Un cosiddetto “slim header”, una sottile fascia dello stesso colore o,
        preferibilmente, di colore lievemente più scuro rispetto al tema
        principale del sito, che mostra alcuni link funzionali con impatto
        globale o esterno al sito stesso.
      </li>
      <li>
        Una parte centrale “center header“ che identifica in modo chiaro il sito
        attraverso logo, testo e social, e può contenere un link per effettuare
        ricerche sul sito.
      </li>
      <li>
        Una parte dedicata alla navigazione “nav header“, visibile su schermi di
        grandi dimensioni ed accessibile attraverso il classico bottone di tipo
        “burger menu” per dispositivi mobili.
      </li>
    </ul>
  </div>
);

export default HeaderIntroduction;
