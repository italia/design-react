import * as React from 'react';
export const SvgItComment = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M19 3H5a2 2 0 00-2 2v10a2 2 0 002 2h2v5.4l1.7-1.7 3.7-3.7H19a2 2 0 002-2V5a2 2 0 00-2-2zm1 12a.9.9 0 01-1 1h-7l-4 4v-4H5a.9.9 0 01-1-1V5a.9.9 0 011-1h14a.9.9 0 011 1zM9 10a.9.9 0 01-1 1 .9.9 0 01-1-1 .9.9 0 011-1 .9.9 0 011 1zm4 0a1 1 0 01-2 0 1 1 0 012 0zm4 0a1 1 0 01-2 0 1 1 0 012 0z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
