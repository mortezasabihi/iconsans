import { SVGProps, Ref, forwardRef } from "react";
const SvgSend2 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m16.94 8.32-2.66 8a1 1 0 0 1-1.9 0l-.71-2.15a1 1 0 0 1 .24-1l1.24-1.24a.74.74 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-1.24 1.24a1 1 0 0 1-1 .25l-2.13-.71a1 1 0 0 1 0-1.9l8-2.66a1 1 0 0 1 1.22 1.23Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSend2);
export default ForwardRef;
