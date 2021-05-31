import * as React from 'react';
export const SvgItMapMarkerCircle = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M17.7 5.3C16 2.2 12 1.1 8.9 2.8s-4.3 5.7-2.5 8.8L12 22l5.7-10.4c.5-1 .8-2 .8-3.1s-.3-2.2-.8-3.2zm-.9 5.8L12 19.9l-4.8-8.8c-.5-.8-.7-1.7-.7-2.7C6.5 5.4 9 3 12 3s5.5 2.5 5.5 5.5c0 .9-.2 1.8-.7 2.6z' />
      <path d='M12 5c-1.9 0-3.5 1.6-3.5 3.5S10.1 12 12 12s3.5-1.6 3.5-3.5S13.9 5 12 5zm0 6c-1.4 0-2.5-1.1-2.5-2.5S10.6 6 12 6s2.5 1.1 2.5 2.5S13.4 11 12 11z' />
      <g>
        <path fill='none' d='M0 0h24v24H0z' />
      </g>
    </svg>
  );
};
