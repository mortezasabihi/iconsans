import { SVGProps, Ref, forwardRef } from "react";
const SvgSearchPlus = (
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
      d="M11.5 18.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-2 3 3M9 11.5h5M11.5 9v5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSearchPlus);
export default ForwardRef;
