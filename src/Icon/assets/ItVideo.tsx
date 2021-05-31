import * as React from 'react';
export const SvgItVideo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M17.5 7.3V6A1.5 1.5 0 0016 4.5H5.5A1.5 1.5 0 004 6v8a1.5 1.5 0 001.5 1.5h3.4L7.4 21h1l1.6-5.5h1.8l1.6 5.5h1l-1.6-5.5H16a1.5 1.5 0 001.5-1.5v-1.3l4 1.5V5.8zm3 5.5l-4-1.5V14a.5.5 0 01-.5.5H5.5A.5.5 0 015 14V6a.5.5 0 01.5-.5H16a.5.5 0 01.5.5v2.7l4-1.5zM2 8h1v4H2z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
