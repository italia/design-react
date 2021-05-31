import * as React from 'react';
export const SvgItInfoCircle = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 19a9 9 0 119-9 9 9 0 01-9 9zm-.7-15h1.5v2h-1.5zm0 3h1.5v9h-1.5z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
