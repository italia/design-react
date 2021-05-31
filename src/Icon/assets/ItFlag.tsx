import * as React from 'react';
export const SvgItFlag = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M17.1 8l3.3-5H5V2H4v20h1v-9h15.4l-3.3-5zM5 4h13.6l-2.7 4 2.7 4H5V4z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
