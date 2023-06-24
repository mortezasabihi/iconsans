import { SVGProps, Ref, forwardRef } from "react";
const SvgAttachment = (
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
      d="m9.4 16.29 6-6a1.52 1.52 0 0 0 0-2.13 1.51 1.51 0 0 0-2.12 0l-6 6a3 3 0 0 0 2.12 5.127 3 3 0 0 0 2.12-.877l6-6a4.5 4.5 0 0 0-3.185-7.683A4.52 4.52 0 0 0 11.15 6.04l-6 6"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgAttachment);
export default ForwardRef;
