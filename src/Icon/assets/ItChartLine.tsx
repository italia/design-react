import * as React from 'react';
export const SvgItChartLine = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M21 20v1H3V3h1v17z' />
      <path d='M10.5 9.2l2.5 2.5 6-6v3.8h1V4h-5.5v1h3.8L13 10.3l-2.5-2.5-4.3 4.3.6.8z' />
      <g>
        <path fill='none' d='M0 0h24v24H0z' />
      </g>
    </svg>
  );
};
