import { SVGProps, Ref, forwardRef } from "react";
const SvgTimer3 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M15.38 13.6 13.25 12l2.13-1.6a3.42 3.42 0 0 0-2.05-6.15h-2.66a3.42 3.42 0 0 0-2.05 6.15l2.13 1.6-2.13 1.6a3.42 3.42 0 0 0 2.05 6.15h2.66a3.42 3.42 0 0 0 2.05-6.15Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTimer3);
export default ForwardRef;
