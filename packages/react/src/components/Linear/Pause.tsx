import { SVGProps, Ref, forwardRef } from "react";
const SvgPause = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M8.5 5.5h-3A1.5 1.5 0 0 0 4 7v10a1.5 1.5 0 0 0 1.5 1.5h3A1.5 1.5 0 0 0 10 17V7a1.5 1.5 0 0 0-1.5-1.5Zm10 0h-3A1.5 1.5 0 0 0 14 7v10a1.5 1.5 0 0 0 1.5 1.5h3A1.5 1.5 0 0 0 20 17V7a1.5 1.5 0 0 0-1.5-1.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPause);
export default ForwardRef;
