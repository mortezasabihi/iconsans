import { SVGProps, Ref, forwardRef } from "react";
const SvgMenuVeggieBurger = (
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
      d="M5 10h14M5 14h14"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMenuVeggieBurger);
export default ForwardRef;
