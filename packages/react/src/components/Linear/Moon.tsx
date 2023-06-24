import { SVGProps, Ref, forwardRef } from "react";
const SvgMoon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M19.5 14.62A7.78 7.78 0 1 1 9.38 4.5 7.78 7.78 0 0 0 19.5 14.62Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMoon);
export default ForwardRef;
