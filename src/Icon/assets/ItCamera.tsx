import * as React from 'react';
export const SvgItCamera = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M20.5 20h-17A1.5 1.5 0 012 18.5v-10A1.5 1.5 0 013.5 7h4.3l1.5-2.3a1.5 1.5 0 011.2-.7h3a1.5 1.5 0 011.2.7L16.2 7h4.3A1.5 1.5 0 0122 8.5v10a1.5 1.5 0 01-1.5 1.5zM3.5 8a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5h-4.8l-1.8-2.8-.4-.2h-3l-.4.2L8.3 8zM12 18a5 5 0 115-5 5 5 0 01-5 5zm0-9a4 4 0 104 4 4 4 0 00-4-4zM7 5H4v1h3z' />
      <path fill='none' d='M0 0h24v24H0z' />
    </svg>
  );
};
