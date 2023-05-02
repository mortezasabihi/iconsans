import { SVGProps, Ref, forwardRef } from "react";
const SvgNumberSignCircle = (
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
      <path d="M7.5 10.31h9M7.5 13.69h9M7.5 10.31h9M7.5 13.69h9M13.69 7.5v9M10.31 7.5v9M13.69 7.5v9M10.31 7.5v9M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgNumberSignCircle);
export default ForwardRef;
