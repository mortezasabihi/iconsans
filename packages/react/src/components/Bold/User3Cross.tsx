import { SVGProps, Ref, forwardRef } from "react";
const SvgUser3Cross = (
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
      d="M11.21 10.44a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm.58 5.62a4.91 4.91 0 0 1 .5-2.17.31.31 0 0 0-.27-.45H5.65a1.94 1.94 0 0 0-1.94 1.93v3a.29.29 0 0 0 .3.3h8a.3.3 0 0 0 .26-.44 5 5 0 0 1-.48-2.17Zm5-3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm1.59 4a.75.75 0 0 1-1.06 1.06l-.53-.53-.53.53a.75.75 0 0 1-1.06-1.06l.53-.53-.53-.53a.75.75 0 0 1 1.06-1.06l.53.53.53-.53a.75.75 0 1 1 1.06 1.06l-.53.53.53.53Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUser3Cross);
export default ForwardRef;
