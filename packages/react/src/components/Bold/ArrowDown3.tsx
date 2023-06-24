import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowDown3 = (
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
      d="m13.44 16.15 3.83-6.64A1.66 1.66 0 0 0 15.84 7H8.16a1.66 1.66 0 0 0-1.43 2.51l3.83 6.64a1.66 1.66 0 0 0 2.88 0Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowDown3);
export default ForwardRef;
