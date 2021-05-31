import * as React from 'react';
export const SvgItList = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M4 12a.9.9 0 01-1 1 1 1 0 010-2 .9.9 0 011 1zM3 4.5a.9.9 0 00-1 1 .9.9 0 001 1 .9.9 0 001-1 .9.9 0 00-1-1zm0 13a1 1 0 000 2 1 1 0 000-2zM6 5v1h16V5zm0 7.5h16v-1H6zM6 19h16v-1H6z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
