import * as React from 'react';
export const SvgItNote = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M18.5 4h-13A1.5 1.5 0 004 5.5v13A1.5 1.5 0 005.5 20h10.2l4.3-4.3V5.5A1.5 1.5 0 0018.5 4zM5 18.5v-13a.5.5 0 01.5-.5h13a.5.5 0 01.5.5V15h-2.5a1.5 1.5 0 00-1.5 1.5V19H5.5a.5.5 0 01-.5-.5zM18.3 16L16 18.3v-1.8a.5.5 0 01.5-.5zM16 9H8V8h8zm0 2H8v-1h8zm-2 1v1H8v-1z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
