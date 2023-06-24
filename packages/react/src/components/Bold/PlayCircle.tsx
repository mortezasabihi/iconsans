import { SVGProps, Ref, forwardRef } from "react";
const SvgPlayCircle = (
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
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm3.24 10.32-4 2.28A1.52 1.52 0 0 1 9 14.28V9.72a1.52 1.52 0 0 1 2.28-1.32l4 2.28a1.53 1.53 0 0 1-.04 2.64Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPlayCircle);
export default ForwardRef;
