import { SVGProps, Ref, forwardRef } from "react";
const SvgDrop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M17 14.73a5 5 0 0 1-10 0C7 12 12 4.27 12 4.27s5 7.73 5 10.46Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDrop);
export default ForwardRef;
