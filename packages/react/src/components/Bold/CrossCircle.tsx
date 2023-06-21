import { SVGProps, Ref, forwardRef } from "react";
const SvgCrossCircle = (
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
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm3 11a.75.75 0 0 1 0 1 .75.75 0 0 1-1 0l-2-2-2 2a.75.75 0 0 1-1 0 .75.75 0 0 1 0-1l2-2-2-2a.75.75 0 0 1 0-1 .74.74 0 0 1 1 0l2 2 2-2a.74.74 0 0 1 1 0 .75.75 0 0 1 0 1l-2 2 2 2Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCrossCircle);
export default ForwardRef;
