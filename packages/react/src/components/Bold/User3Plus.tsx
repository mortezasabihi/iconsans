import { SVGProps, Ref, forwardRef } from "react";
const SvgUser3Plus = (
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
      d="M11.21 10.44a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm1.08 3.45a.31.31 0 0 0-.27-.45H5.65a1.94 1.94 0 0 0-1.94 1.93v3a.3.3 0 0 0 .3.3h8a.3.3 0 0 0 .26-.44 4.999 4.999 0 0 1-.5-2.19 4.91 4.91 0 0 1 .52-2.15Zm4.5-1.33a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm1.5 4.25h-.75v.75a.75.75 0 1 1-1.5 0v-.75h-.75a.75.75 0 0 1 0-1.5H16v-.75a.75.75 0 0 1 1.5 0v.75h.75a.75.75 0 1 1 0 1.5h.04Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUser3Plus);
export default ForwardRef;
