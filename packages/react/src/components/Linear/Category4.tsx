import { SVGProps, Ref, forwardRef } from "react";
const SvgCategory4 = (
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
      d="M8.9 4.5h-3A1.5 1.5 0 0 0 4.4 6v3a1.5 1.5 0 0 0 1.5 1.5h3A1.5 1.5 0 0 0 10.4 9V6a1.5 1.5 0 0 0-1.5-1.5Zm1.5 12a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm7.5-3h-3a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5Zm-1.4-8.86L13.4 10h6.2l-3.1-5.36Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCategory4);
export default ForwardRef;
