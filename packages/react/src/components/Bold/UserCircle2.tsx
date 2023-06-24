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
      fill="currentColor"
      d="M12 2.25A9.75 9.75 0 1 0 21.75 12 9.76 9.76 0 0 0 12 2.25Zm6 15.42a7.49 7.49 0 0 0-12 0 8.25 8.25 0 1 1 12 0Z"
    />
    <path
      fill="currentColor"
      d="M12 6.19A2.81 2.81 0 1 0 14.81 9 2.798 2.798 0 0 0 12 6.19Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUserCircle2);
export default ForwardRef;
