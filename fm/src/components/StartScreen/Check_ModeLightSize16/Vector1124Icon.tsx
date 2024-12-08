import { memo, SVGProps } from 'react';

const Vector1124Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.3333 0L3.71429 8L0.666667 4.8'
      stroke='#1D1B20'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Vector1124Icon);
export { Memo as Vector1124Icon };
