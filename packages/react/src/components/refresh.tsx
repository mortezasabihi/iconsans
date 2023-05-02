import { SVGProps, Ref, forwardRef } from "react";
const SvgRefresh = (
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
      <path d="M4.22 15.32a8.47 8.47 0 0 1-.59-1.69 8.31 8.31 0 0 1 14-7.77" />
      <path d="M18.26 3.9v2.61h-2.61M19.78 8.68a8.47 8.47 0 0 1 .59 1.69 8.31 8.31 0 0 1-14 7.77" />
      <path d="M5.74 20.1v-2.61h2.61" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgRefresh);
export default ForwardRef;
