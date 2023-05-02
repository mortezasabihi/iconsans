import { SVGProps, Ref, forwardRef } from "react";
const SvgPencil1 = (
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
      <path d="m4.83 14.93 10.1-10.1a1 1 0 0 1 1.42 0l2.82 2.82a1 1 0 0 1 0 1.42l-10.1 10.1a1 1 0 0 1-.71.3H5.53a1 1 0 0 1-1-1v-2.83a1 1 0 0 1 .3-.71ZM12.5 7.26l4.24 4.24" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgPencil1);
export default ForwardRef;
