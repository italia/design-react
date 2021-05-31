import * as React from 'react';
export const SvgItPa = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M3 21h18v1H3zm0-1h18v-1H3zM22 9H2l10-7zM5.2 8h13.6L12 3.2zM6 18v-8H5v8zm4 0v-8H9v8zm5 0v-8h-1v8zm4 0v-8h-1v8z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
