import { SVGProps, Ref, forwardRef } from "react";
const SvgDirect3 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="m7.69 9.72 8-2.66a1 1 0 0 1 1.26 1.26l-2.66 8a1 1 0 0 1-1.9 0l-1-3a1 1 0 0 0-.64-.64l-3-1a1 1 0 0 1-.06-1.96Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDirect3);
export default ForwardRef;
