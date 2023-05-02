import { SVGProps, Ref, forwardRef } from "react";
const SvgActivity = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5 15 3.09-4a2 2 0 0 1 3.16 0l1.5 2a2 2 0 0 0 3.16 0L19 9"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgActivity);
export default ForwardRef;
