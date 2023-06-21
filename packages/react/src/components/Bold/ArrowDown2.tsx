import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowDown2 = (
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
      d="M12 15.5a.74.74 0 0 1-.53-.22L6 9.78a.75.75 0 0 1 1-1.06l5 5 5-5a.75.75 0 0 1 1 1.06l-5.5 5.5a.74.74 0 0 1-.5.22Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowDown2);
export default ForwardRef;
