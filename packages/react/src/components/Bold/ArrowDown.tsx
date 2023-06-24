import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowDown = (
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
      d="M12 18V6m3.6 8.4L12 18l-3.6-3.6"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowDown);
export default ForwardRef;
