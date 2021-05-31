import * as React from 'react';
export const SvgItPrint = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M21 9.5A1.5 1.5 0 0019.5 8H17V3H7v5H4.5A1.5 1.5 0 003 9.5V16h2v3h2v2h10v-2h2v-3h2zM8 4h8v4H8zM6 18v-4h1v4zm10 2H8v-6h8v6zm2-2h-1v-4h1v4zm2-3h-1v-2H5v2H4V9.5a.5.5 0 01.5-.5h15a.5.5 0 01.5.5zM6 11h4v1H6z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
