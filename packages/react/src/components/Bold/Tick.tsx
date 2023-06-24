import { SVGProps, Ref, forwardRef } from "react";
const SvgTick = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.width || 16}
    height={props.height || 16}
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Zm-1 7.13-4.81 4.8a.73.73 0 0 1-.53.22.74.74 0 0 1-.53-.22L8 12.74a.75.75 0 0 1 1-1.06l1.66 1.66L15 9.07a.74.74 0 0 1 1.06 0 .748.748 0 0 1-.06 1.06Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTick);
export default ForwardRef;
