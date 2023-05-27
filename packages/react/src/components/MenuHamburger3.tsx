import { SVGProps, Ref, forwardRef } from "react";
const SvgMenuHamburger3 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.width || 16}
    height={props.height || 16}
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 16h14M5 12h9M5 8h6"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMenuHamburger3);
export default ForwardRef;
