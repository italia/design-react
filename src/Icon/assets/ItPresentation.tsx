import * as React from 'react';
export const SvgItPresentation = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M4 5v10.6A2.4 2.4 0 006.4 18h3.1l-1.1 4h1l1.1-4h2.7l1.2 4h1l-1.2-4h3.5a2.3 2.3 0 002.3-2.3V5zm15 10.7a1.3 1.3 0 01-1.3 1.3H6.4A1.4 1.4 0 015 15.6V6h14zM21 3v1H3V3zm-9 13a4.5 4.5 0 10-4.5-4.5A4.5 4.5 0 0012 16zm-.5-7.9V11H8.6a3.4 3.4 0 012.9-2.9zm1 3.9V8a3.5 3.5 0 01-.5 7 3.4 3.4 0 01-3.4-3z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
