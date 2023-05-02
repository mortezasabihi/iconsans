import { SVGProps, Ref, forwardRef } from "react";
const SvgMenuStrawberry = (
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
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 16h6M7 12h10M5 8h14"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMenuStrawberry);
export default ForwardRef;
