import React, {CSSProperties} from 'react';
import { theme } from './theme';
import {FontLoader} from '../src';

import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import '../assets/css/fonts.css';
import '../assets/css/storybook-fixes.css';

const order = {
  'documentazione': 1,
  'templates': 100,
  'componenti': 1000,
};

const prioritySections = ['welcome-page', 'organizzare', 'menu', 'componenti', 'form', 'utilities', 'domande-frequenti-page', 'changelog-page'];
const priorityPages = ["introduzione"];

const customStyle = {
  position: 'relative',
  boxSizing: 'border-box',
  margin: '0',
  padding: '48px 32px',
  textAlign: 'initial'
} as CSSProperties

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  options: {
    storySort: (a: string[], b: string[]) => {
      const [aGroups, aStory] = a[0].split('--');
      const [bGroups, bStory] = b[0].split('--');
      const [aSection, ...aSubSections] = aGroups.split('-');
      const [bSection, ...bSubSections] = bGroups.split('-');

      const aFullStoryName = `${aSubSections.join('-')}-${aStory}`
      const bFullStoryName = `${bSubSections.join('-')}-${bStory}`
      // Sort by Section 
      // @ts-ignore
      const groupScore = (order[aSection] - order[bSection]);


      // if pages have custom sort, compare them only if from the same section
      if (!groupScore) {
        const pageASectionIndex = prioritySections.indexOf(aFullStoryName) + 1 || prioritySections.indexOf(aSubSections[0]) + 1;
        const pageBSectionIndex = prioritySections.indexOf(bFullStoryName) + 1 || prioritySections.indexOf(bSubSections[0]) + 1;
        if (pageASectionIndex || pageBSectionIndex) {
          const sectionScore = pageASectionIndex - pageBSectionIndex;

          if (!sectionScore) {
            const pageAIndex = priorityPages.indexOf(aSubSections[aSubSections.length - 1]) + 1;
            const pageBIndex = priorityPages.indexOf(bSubSections[bSubSections.length - 1]) + 1;
            if (pageAIndex || pageBIndex) {
              return pageBIndex - pageAIndex;
            }
            return (aFullStoryName.localeCompare(bFullStoryName));
          }
          return sectionScore;
        }
      }

      // and lexycographic order of the story not mapped
      return groupScore + (aFullStoryName.localeCompare(bFullStoryName))
    },
    /**
     * where to show the addon panel
     * @type {('bottom'|'right')}
     */
    panelPosition: 'right',
    previewTabs: { 'storybook/docs/panel': { index: -1 } },
  },
  docs: {
    theme
  },
};

export const decorators = [
  (Story: Function) => <div style={customStyle}><FontLoader /><Story/></div>
]