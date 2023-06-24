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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.88 14.17 6.49 3.75a2.5 2.5 0 0 0 3.75-2.17v-7.5a2.5 2.5 0 0 0-3.75-2.17L8.88 9.83a2.51 2.51 0 0 0 0 4.34Zm-4 3.83V6"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPrevious);
export default ForwardRef;
