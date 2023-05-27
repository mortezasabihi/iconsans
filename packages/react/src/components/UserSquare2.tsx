import { SVGProps, Ref, forwardRef } from "react";
const SvgUserSquare2 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.width || 16}
    height={props.height || 16}
    ref={ref}
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Z" />
      <path d="M12 12.62A2.81 2.81 0 1 0 12 7a2.81 2.81 0 0 0 0 5.62Zm-7 7.81a7.49 7.49 0 0 1 14.08 0" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgUserSquare2);
export default ForwardRef;
