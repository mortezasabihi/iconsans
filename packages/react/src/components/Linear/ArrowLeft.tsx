import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowLeft = (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6 12h12m-8.4 3.6L6 12l3.6-3.6"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowLeft);
export default ForwardRef;
