import { SVGProps, Ref, forwardRef } from "react";
const SvgEmail = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M18.6 4H5.4A3.4 3.4 0 0 0 2 7.4v9.2A3.4 3.4 0 0 0 5.4 20h13.2a3.4 3.4 0 0 0 3.4-3.4V7.4A3.4 3.4 0 0 0 18.6 4Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6 9 4.84 3.17a2 2 0 0 0 2.32 0L18 9"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgEmail);
export default ForwardRef;
