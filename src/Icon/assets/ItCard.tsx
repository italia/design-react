import * as React from 'react';
export const SvgItCard = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M20.5 5h-17A1.5 1.5 0 002 6.5v11A1.5 1.5 0 003.5 19h17a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0020.5 5zM3 9h18v3H3zm18 8.5a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5V13h18zM3 8V6.5a.5.5 0 01.5-.5h17a.5.5 0 01.5.5V8zm5 7H4v-1h4z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
