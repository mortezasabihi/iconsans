import { SVGProps, Ref, forwardRef } from "react";
const SvgCategory2 = (
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
      <path d="M10.5 7.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0ZM19.5 7.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0ZM10.5 16.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0ZM19.5 16.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgCategory2);
export default ForwardRef;
