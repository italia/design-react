import * as React from 'react';
export const SvgItLock = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M18.5 8.5H17V8A5 5 0 007 8v.5H5.5A1.5 1.5 0 004 10v8.5A1.5 1.5 0 005.5 20h13a1.5 1.5 0 001.5-1.5V10a1.5 1.5 0 00-1.5-1.5zM8 8a4 4 0 018 0v.5H8zm11 10.5a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5V10a.5.5 0 01.5-.5h13a.5.5 0 01.5.5z' />
      <path d='M12 13.25a1 1 0 11-1 1 1 1 0 011-1m0-1a2 2 0 102 2 2 2 0 00-2-2z' />
      <g>
        <path fill='none' d='M0 0h24v24H0z' />
      </g>
    </svg>
  );
};
