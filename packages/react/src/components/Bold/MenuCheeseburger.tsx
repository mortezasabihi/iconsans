import { SVGProps, Ref, forwardRef } from "react";
const SvgMenuCheeseburger = (
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
    <path
      fill="currentColor"
      d="M8 8.75h12a.75.75 0 1 0 0-1.5H8a.75.75 0 0 0 0 1.5Zm12 2.5H8a.75.75 0 1 0 0 1.5h12a.75.75 0 1 0 0-1.5Zm0 4H8a.75.75 0 1 0 0 1.5h12a.75.75 0 1 0 0-1.5ZM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMenuCheeseburger);
export default ForwardRef;
