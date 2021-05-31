import * as React from 'react';
export const SvgItMapMarkerPlus = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M15.1 2.8c-1-.5-2-.8-3.1-.8-3.6 0-6.5 2.9-6.5 6.5 0 1.1.3 2.2.8 3.1L12 22l5.7-10.4c1.7-3.2.5-7.1-2.6-8.8zm1.7 8.3L12 19.9l-4.8-8.8c-1.5-2.7-.5-6 2.1-7.5 2.7-1.5 6-.5 7.5 2.1.5.8.7 1.7.7 2.7 0 1-.2 1.9-.7 2.7z' />
      <path d='M12.5 8h3v1h-3v3h-1V9h-3V8h3V5h1z' />
      <g>
        <path fill='none' d='M0 0h24v24H0z' />
      </g>
    </svg>
  );
};
