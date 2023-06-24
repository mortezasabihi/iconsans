import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowRight2Circle = (
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
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm2 9.53-3 3a.75.75 0 0 1-1.06-1.06l2.5-2.47L10 9.53a.75.75 0 0 1 1-1.06l3 3a.75.75 0 0 1 0 1.06Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowRight2Circle);
export default ForwardRef;
