import { SVGProps, Ref, forwardRef } from "react";
const SvgAsteriskCircle = (
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
      <path d="m9.17 9.17 5.66 5.66M14.83 9.17l-5.66 5.66M16 12H8M12 16V8M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgAsteriskCircle);
export default ForwardRef;
