import { SVGProps, Ref, forwardRef } from "react";
const SvgPlus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M17 11.25h-4.25V7a.75.75 0 1 0-1.5 0v4.25H7a.75.75 0 1 0 0 1.5h4.25V17a.75.75 0 1 0 1.5 0v-4.25H17a.75.75 0 1 0 0-1.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPlus);
export default ForwardRef;
