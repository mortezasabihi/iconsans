import { SVGProps, Ref, forwardRef } from "react";
const SvgTick1 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6 12.37 3.76 3.75L18 7.88"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTick1);
export default ForwardRef;
