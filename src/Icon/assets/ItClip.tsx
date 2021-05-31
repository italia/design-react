import * as React from 'react';
export const SvgItClip = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M11 22a2.9 2.9 0 01-3-3V6a4 4 0 018 0v10h-1V6a3 3 0 00-6 0v13a2 2 0 004 0V8a1 1 0 00-2 0v8h-1V8a2 2 0 014 0v11a2.9 2.9 0 01-3 3z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
