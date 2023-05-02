import { SVGProps, Ref, forwardRef } from "react";
const SvgFingerprint = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M9 5.33a6.2 6.2 0 0 1 10.13 4.79 14.15 14.15 0 0 1-4.07 10M4.88 12a1.85 1.85 0 0 0 1.85-1.86c0-.73.129-1.455.38-2.14M13 17.75c-.87.91-1.883 1.67-3 2.25" />
      <path d="M4.88 15.08a5 5 0 0 0 5-5 3.1 3.1 0 1 1 6.2 0A11.08 11.08 0 0 1 14.9 15" />
      <path d="M5.93 18.1a8 8 0 0 0 7-8" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgFingerprint);
export default ForwardRef;
