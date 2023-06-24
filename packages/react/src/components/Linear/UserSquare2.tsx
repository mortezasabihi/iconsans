import { SVGProps, Ref, forwardRef } from "react";
const SvgUserSquare2 = (
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
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 12.62A2.81 2.81 0 1 0 12 7a2.81 2.81 0 0 0 0 5.62Zm-7 7.81a7.49 7.49 0 0 1 14.08 0"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUserSquare2);
export default ForwardRef;
