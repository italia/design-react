import * as React from 'react';
export const SvgItCalendar = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M20.5 4H17V3h-1v1H8V3H7v1H3.5A1.5 1.5 0 002 5.5v13A1.5 1.5 0 003.5 20h17a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0020.5 4zm.5 14.5a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5v-13a.5.5 0 01.5-.5H7v1h1V5h8v1h1V5h3.5a.5.5 0 01.5.5zM4 8h16v1H4z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
