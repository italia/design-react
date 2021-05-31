import * as React from 'react';
export const SvgItWarning = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M12.5 17h-1V2h1zm0 3h-1v2h1z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
