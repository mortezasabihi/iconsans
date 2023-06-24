import { SVGProps, Ref, forwardRef } from "react";
const SvgMessages = (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M5.63 18.72a1 1 0 0 0-.8-1 3 3 0 0 1-2.2-2.89V9a3 3 0 0 1 3-3h9.6a3 3 0 0 1 3 3v5.86a3 3 0 0 1-3 3h-5.21a1 1 0 0 0-.7.29L6.48 21a.49.49 0 0 1-.85-.35v-1.93Z"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M5.77 6v-.14a3 3 0 0 1 3-3h9.6a3 3 0 0 1 3 3v5.85a3 3 0 0 1-3 3h-.14"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.43 11.84v.01m3-.01v.01m3 0v.01"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMessages);
export default ForwardRef;
