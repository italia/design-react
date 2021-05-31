import * as React from 'react';
export const SvgItInbox = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M4 2v14h3.7l1 2h6.6l1-2H20V2H4zm15 13h-3.3l-1 2H9.3l-1-2H5V3h14v12z' />
      <path d='M19 17h1v5H4v-5h1v4h14zM7 5h10v1H7zM7 8h10v1H7zM7 11h10v1H7z' />
      <g>
        <path fill='none' d='M0 0h24v24H0z' />
      </g>
    </svg>
  );
};
