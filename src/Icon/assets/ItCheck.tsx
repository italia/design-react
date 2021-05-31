import * as React from 'react';
export const SvgItCheck = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M9.6 16.9L4 11.4l.8-.7 4.8 4.8 8.5-8.4.7.7z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
