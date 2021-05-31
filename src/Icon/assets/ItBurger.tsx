import * as React from 'react';
export const SvgItBurger = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M22 5v1H2V5zM2 12.5h20v-1H2zM2 19h20v-1H2z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
