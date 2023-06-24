import { SVGProps, Ref, forwardRef } from "react";
const SvgSend = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m7.76 16.24 8.48-8.48m-3.39 8.48H7.76v-5.09"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSend);
export default ForwardRef;
