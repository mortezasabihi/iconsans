import { SVGProps, Ref, forwardRef } from "react";
const SvgFilterVertical = (
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
      d="M18 3.5v11m0 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-6 0v-11m0-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-6-3v11m0 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFilterVertical);
export default ForwardRef;
