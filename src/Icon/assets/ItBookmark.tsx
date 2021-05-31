import * as React from 'react';
export const SvgItBookmark = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M18 22.7l-6-6-6 6V2h12v20.7zm-6-7.4l5 5V3H7v17.3l5-5z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
