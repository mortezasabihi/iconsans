import { SVGProps, Ref, forwardRef } from "react";
const SvgTimer2 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M16.75 8.5V7A2.75 2.75 0 0 0 14 4.25h-4A2.75 2.75 0 0 0 7.25 7v1.5A1.75 1.75 0 0 0 8 9.9l2.8 2.1L8 14.1a1.75 1.75 0 0 0-.7 1.4V17a2.75 2.75 0 0 0 2.7 2.75h4A2.75 2.75 0 0 0 16.75 17v-1.5a1.75 1.75 0 0 0-.7-1.4l-2.8-2.1 2.8-2.1a1.75 1.75 0 0 0 .7-1.4Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTimer2);
export default ForwardRef;
