import { SVGProps, Ref, forwardRef } from "react";
const SvgSheild = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13 20.52-1 .57-1-.57A14 14 0 0 1 4 8.39a2 2 0 0 1 1-1.73l6.08-3.51a1.83 1.83 0 0 1 1.84 0L19 6.66a2 2 0 0 1 1 1.73 14 14 0 0 1-7 12.13Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSheild);
export default ForwardRef;
