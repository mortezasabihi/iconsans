import { SVGProps, Ref, forwardRef } from "react";
const SvgCategory6 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
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
      d="M10.4 7.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm-1.5 6h-3A1.5 1.5 0 0 0 4.4 15v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5Zm10.5 3a3 3 0 1 0-6 0 3 3 0 0 0 6 0ZM16.5 4.64 13.4 10h6.2l-3.1-5.36Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCategory6);
export default ForwardRef;
