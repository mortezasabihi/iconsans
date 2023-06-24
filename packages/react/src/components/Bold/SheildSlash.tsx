import { SVGProps, Ref, forwardRef } from "react";
const SvgSheildSlash = (
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
      d="M7 17a14 14 0 0 1-3-8.7 2 2 0 0 1 1-1.73l6.08-3.51a1.83 1.83 0 0 1 1.84 0L18 6m2 2.3a14 14 0 0 1-7 12.12l-.5.29a1 1 0 0 1-1 0l-.5-.29a13.879 13.879 0 0 1-1.62-1.09L20 8.3Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 3 3 21"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSheildSlash);
export default ForwardRef;
