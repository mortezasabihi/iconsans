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
      fill="currentColor"
      d="M19 15.7A7.78 7.78 0 1 1 8.3 5a.5.5 0 0 1 .7.6 8 8 0 0 0 .74 5.58 7.42 7.42 0 0 0 3 3 8 8 0 0 0 5.66.82.5.5 0 0 1 .6.7Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMoon);
export default ForwardRef;
