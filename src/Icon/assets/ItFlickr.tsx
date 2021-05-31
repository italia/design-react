import * as React from 'react';
export const SvgItFlickr = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path fill='none' d='M0 0h24v24H0z' />
      <circle cx={6.73} cy={12} r={4.73} />
      <circle cx={17.27} cy={12} r={4.73} />
    </svg>
  );
};
