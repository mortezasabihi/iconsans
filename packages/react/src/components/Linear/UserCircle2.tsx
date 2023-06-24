import { SVGProps, Ref, forwardRef } from "react";
const SvgUserCircle2 = (
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
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 11.81a2.81 2.81 0 1 0 0-5.62 2.81 2.81 0 0 0 0 5.62Zm-6.09 6a7.5 7.5 0 0 1 12.18 0"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUserCircle2);
export default ForwardRef;
