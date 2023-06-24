import { SVGProps, Ref, forwardRef } from "react";
const SvgSearch1 = (
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
      d="m19.41 18.35-2.59-2.59a7 7 0 1 0-1.06 1.06l2.58 2.59a.76.76 0 0 0 1.07 0 .75.75 0 0 0 0-1.06Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSearch1);
export default ForwardRef;
