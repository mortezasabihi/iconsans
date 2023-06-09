import { SVGProps, Ref, forwardRef } from "react";
const SvgPlaySqaure = (
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
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Zm-1.76 10.32-4 2.28A1.52 1.52 0 0 1 9 14.28V9.72a1.52 1.52 0 0 1 2.28-1.32l4 2.28a1.53 1.53 0 0 1-.04 2.64Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPlaySqaure);
export default ForwardRef;
