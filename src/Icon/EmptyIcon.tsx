import React, { FC, SVGProps } from 'react';

export const EmptyIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
    <path fill='none' d='M0 0h24v24H0z' />
  </svg>
);
