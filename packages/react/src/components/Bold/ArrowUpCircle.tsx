import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowUpCircle = (
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
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm3.53 7.53a.75.75 0 0 1-1.06 0l-1.72-1.72V17a.75.75 0 1 1-1.5 0V8.81l-1.72 1.72a.74.74 0 0 1-1.06 0 .75.75 0 0 1 0-1.06l3-3a.781.781 0 0 1 .53-.22.78.78 0 0 1 .53.22l3 3a.75.75 0 0 1 0 1.06Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowUpCircle);
export default ForwardRef;
