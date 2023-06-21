import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowUo2Circle = (
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
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm3.53 11a.75.75 0 0 1-1.06 0L12 11.56 9.53 14a.75.75 0 0 1-1.06-1l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowUo2Circle);
export default ForwardRef;
