import { SVGProps, Ref, forwardRef } from "react";
const SvgSend1 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m15.32 16.65-2-1a1 1 0 0 1-.55-.89V13a.75.75 0 1 0-1.5 0v1.76a1 1 0 0 1-.55.89l-2 1a1 1 0 0 1-1.34-1.34l3.77-7.53a1 1 0 0 1 1.78 0l3.77 7.53a1 1 0 0 1-1.38 1.34Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSend1);
export default ForwardRef;
