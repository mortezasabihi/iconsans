import { SVGProps, Ref, forwardRef } from "react";
const SvgCameraSlash = (
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
      d="M5 19a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3.5a.5.5 0 0 0 .5-.5V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 .5.5H17m3 .27A2 2 0 0 1 21 9v8a2 2 0 0 1-2 2H9"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.17 14A3 3 0 0 1 13 10.17M22 2 2 22"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCameraSlash);
export default ForwardRef;
