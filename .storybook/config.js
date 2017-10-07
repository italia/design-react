import { configure } from '@storybook/react'
import '@storybook/addon-actions/register';
import '@storybook/addon-console';
import '../src/styles/main.css';
import './utils.css';

// Get all files inside `components` directory which ends with `.story.js`
const req = require.context('../src', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)