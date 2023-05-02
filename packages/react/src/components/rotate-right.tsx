import { SVGProps, Ref, forwardRef } from "react";
const SvgRotateRight = (
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
      <path d="M21 11.5a9 9 0 1 1-2.63-5.86" />
      <path d="M18.96 3.84v2.61h-2.61" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgRotateRight);
export default ForwardRef;
