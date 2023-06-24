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
      fill="currentColor"
      d="M5 10.75h14a.75.75 0 1 0 0-1.5H5a.75.75 0 0 0 0 1.5Zm14 2.5H5a.75.75 0 1 0 0 1.5h14a.75.75 0 1 0 0-1.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMenuVeggieBurger);
export default ForwardRef;
