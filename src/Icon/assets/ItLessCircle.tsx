import * as React from 'react';
export const SvgItLessCircle = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M12 3a9 9 0 016.36 15.36A9 9 0 015.64 5.62 8.93 8.93 0 0112 3m0-1a10 10 0 107.07 2.93A9.93 9.93 0 0012 2z' />
      <rect x={7} y={11.25} width={10} height={1.5} rx={0.75} />
      <g>
        <path fill='none' d='M0 0h24v24H0z' />
      </g>
    </svg>
  );
};
