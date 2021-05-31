import * as React from 'react';
export const SvgItBan = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM5.2 17.6C3.8 16 3.1 14 3.1 11.9s.7-4.1 2.1-5.7l12.7 12.7C14 22 8.3 21.4 5.2 17.6zm13.4.5L5.9 5.4c3.7-3.3 9.4-3 12.7.7 3.1 3.4 3.1 8.6 0 12z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
