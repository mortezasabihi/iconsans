import { SVGProps, Ref, forwardRef } from "react";
const SvgUsers4 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M10.75 9.81a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-7.5 10.38a7.5 7.5 0 0 1 15 0m-.53-7.69a6.5 6.5 0 0 1 3 5.5M15.65 4.31a2.5 2.5 0 1 1 0 5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUsers4);
export default ForwardRef;
