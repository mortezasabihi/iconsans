import { SVGProps, Ref, forwardRef } from "react";
const SvgMenuFries = (
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
      d="M5 8h14M5 12h8m-8 4h14"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMenuFries);
export default ForwardRef;
