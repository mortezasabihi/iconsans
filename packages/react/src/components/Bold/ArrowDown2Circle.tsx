import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowDown2Circle = (
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
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm3.53 8-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1L12 12.44 14.47 10a.75.75 0 0 1 1.06 1Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowDown2Circle);
export default ForwardRef;
