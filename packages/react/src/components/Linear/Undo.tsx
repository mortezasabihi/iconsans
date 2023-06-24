import { SVGProps, Ref, forwardRef } from "react";
const SvgUndo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M4.42 16.92h12a4 4 0 1 0 0-8h-12"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.42 7 3.58 8.85l1.84 1.85"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUndo);
export default ForwardRef;
