import { SVGProps, Ref, forwardRef } from "react";
const SvgDollarsignCircle = (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.67 10V8.67a1.34 1.34 0 0 0-1.34-1.34h-2.66a1.34 1.34 0 0 0-1.34 1.34v.66a1.33 1.33 0 0 0 .54 1.07l4.26 3.2a1.331 1.331 0 0 1 .54 1.07v.66a1.34 1.34 0 0 1-1.34 1.34h-2.66a1.34 1.34 0 0 1-1.34-1.34V14M12 6v12"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDollarsignCircle);
export default ForwardRef;
