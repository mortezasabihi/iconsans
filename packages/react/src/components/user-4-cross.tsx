import { SVGProps, Ref, forwardRef } from "react";
const SvgUser4Cross = (
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
      <path d="m19.09 19.69-3.18-3.19M15.91 19.69l3.18-3.19M11.75 9.65a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4.25 20a7.49 7.49 0 0 1 11.5-6.34" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgUser4Cross);
export default ForwardRef;
