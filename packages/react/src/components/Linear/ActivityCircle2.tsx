import { SVGProps, Ref, forwardRef } from "react";
const SvgActivityCircle2 = (
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
      d="m7 14.14 2.21-2.83a1.42 1.42 0 0 1 2.25 0l1.08 1.38a1.42 1.42 0 0 0 2.25 0L17 9.86"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.77 10a9 9 0 0 1 .23 2 9 9 0 1 1-9-9 9.43 9.43 0 0 1 2 .22M19 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgActivityCircle2);
export default ForwardRef;
