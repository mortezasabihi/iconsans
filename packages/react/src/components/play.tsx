import { SVGProps, Ref, forwardRef } from "react";
const SvgPlay = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m16.25 9.83-6.5-3.75A2.5 2.5 0 0 0 6 8.25v7.5a2.5 2.5 0 0 0 3.75 2.17l6.5-3.75a2.51 2.51 0 0 0 0-4.34Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPlay);
export default ForwardRef;
