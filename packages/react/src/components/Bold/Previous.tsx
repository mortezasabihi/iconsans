import { SVGProps, Ref, forwardRef } from "react";
const SvgPrevious = (
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
      fill="currentColor"
      d="m8.88 14.17 6.49 3.75a2.5 2.5 0 0 0 3.75-2.17v-7.5a2.5 2.5 0 0 0-3.75-2.17L8.88 9.83a2.51 2.51 0 0 0 0 4.34Zm-4 4.58a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 1.5 0v12a.76.76 0 0 1-.75.75Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPrevious);
export default ForwardRef;
