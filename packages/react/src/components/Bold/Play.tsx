import { SVGProps, Ref, forwardRef } from "react";
const SvgPlay = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="m16.25 9.83-6.5-3.75A2.5 2.5 0 0 0 6 8.25v7.5a2.5 2.5 0 0 0 3.75 2.17l6.5-3.75a2.511 2.511 0 0 0 0-4.34Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPlay);
export default ForwardRef;
