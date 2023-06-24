import { SVGProps, Ref, forwardRef } from "react";
const SvgMenuHotdog = (
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
      d="M16 15.25H8a.75.75 0 1 0 0 1.5h8a.75.75 0 1 0 0-1.5Zm3-4H5a.75.75 0 1 0 0 1.5h14a.75.75 0 1 0 0-1.5ZM8 8.75h8a.75.75 0 1 0 0-1.5H8a.75.75 0 0 0 0 1.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMenuHotdog);
export default ForwardRef;
