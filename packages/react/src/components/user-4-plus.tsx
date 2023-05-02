import { SVGProps, Ref, forwardRef } from "react";
const SvgUser4Plus = (
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
      <path d="M19.75 18.1h-4.5M17.5 20.35v-4.5M11.75 9.65a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4.25 20a7.49 7.49 0 0 1 11.5-6.34" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgUser4Plus);
export default ForwardRef;
