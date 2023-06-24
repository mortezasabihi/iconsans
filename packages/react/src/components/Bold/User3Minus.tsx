import { SVGProps, Ref, forwardRef } from "react";
const SvgUser3Minus = (
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
      d="M11.21 10.44a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm.58 5.62a4.909 4.909 0 0 1 .5-2.17.31.31 0 0 0-.27-.45H5.65a1.94 1.94 0 0 0-1.94 1.93v3a.3.3 0 0 0 .3.3h8a.3.3 0 0 0 .26-.44 4.998 4.998 0 0 1-.48-2.17Zm5-3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm1.5 4.25h-3a.75.75 0 0 1 0-1.5h3a.75.75 0 1 1 0 1.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUser3Minus);
export default ForwardRef;
