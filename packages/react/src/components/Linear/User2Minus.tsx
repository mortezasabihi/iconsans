import { SVGProps, Ref, forwardRef } from "react";
const SvgUser2Minus = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
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
      d="M11.75 9.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm3 10.5H6.19a1.94 1.94 0 0 1-1.94-1.94v-3.62a1.94 1.94 0 0 1 1.94-1.94h8.56m1.5 3.75h3.5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUser2Minus);
export default ForwardRef;
