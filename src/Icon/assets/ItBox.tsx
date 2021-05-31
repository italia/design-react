import * as React from 'react';
export const SvgItBox = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M21 2H3v4h1v16h16V6h1V2zm-2 19H5V6h14v15zm1-16H4V3h16v2z' />
      <path d='M8 8h8v1H8z' />
      <g>
        <path fill='none' d='M0 0h24v24H0z' />
      </g>
    </svg>
  );
};
