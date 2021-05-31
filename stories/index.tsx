import React from 'react';
import { storiesOf } from '@storybook/react';

import { requireContextPolyfill } from './utils';

import Welcome from './Welcome';

const stories = storiesOf('Introduzione/Introduzione', module);
stories
  .addParameters({
    options: {
      showAddonPanel: false
    }
  })
  .add('Benvenuto', () => <Welcome />);

// Used by Jest
if (process.env.NODE_ENV === 'test') {
  require.context = requireContextPolyfill();
}

// automatically import all files ending in *.stories.js
const req = require.context('./', true, /.stories.js$/);
req.keys().forEach((filename) => req(filename));
