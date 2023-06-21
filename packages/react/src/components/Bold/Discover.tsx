import { SVGProps, Ref, forwardRef } from "react";
const SvgDiscover = (
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
      d="M16.34 5.07 8.55 6.91a2.24 2.24 0 0 0-1.64 1.64l-1.84 7.79a2.14 2.14 0 0 0 2.59 2.59l7.79-1.84a2.24 2.24 0 0 0 1.64-1.64l1.84-7.79a2.14 2.14 0 0 0-2.59-2.59Zm-2.75 8.52a2.25 2.25 0 1 1 0-3.18 2.26 2.26 0 0 1 0 3.18Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDiscover);
export default ForwardRef;
