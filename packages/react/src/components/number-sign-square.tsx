import { SVGProps, Ref, forwardRef } from "react";
const SvgNumberSignSquare = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4ZM7.5 10.31h9M7.5 13.69h9M7.5 10.31h9M7.5 13.69h9M13.69 7.5v9M10.31 7.5v9M13.69 7.5v9M10.31 7.5v9" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgNumberSignSquare);
export default ForwardRef;
