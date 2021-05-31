import * as React from 'react';
export const SvgItArrowRightTriangle = (
  props: React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M12 14.8V9.2a1 1 0 011.7-.7l3.5 3.5-3.5 3.5a1 1 0 01-1.7-.7z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
