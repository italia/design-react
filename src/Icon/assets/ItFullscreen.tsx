import * as React from 'react';
export const SvgItFullscreen = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M4 20h4.5v1H3v-5.5h1zM3 8.5h1V4h4.5V3H3zM20 20h-4.5v1H21v-5.5h-1zM15.5 3v1H20v4.5h1V3z' />
      <g>
        <path fill='none' d='M0 0h24v24H0z' />
      </g>
    </svg>
  );
};
