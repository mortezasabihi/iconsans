import { SVGProps, Ref, forwardRef } from "react";
const SvgAlert2 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m20.63 17-6.9-12a2 2 0 0 0-3.46 0l-6.9 12a2 2 0 0 0 1.73 3h13.8a2 2 0 0 0 1.73-3Zm-9.38-9.5a.75.75 0 1 1 1.5 0v6.3a.75.75 0 1 1-1.5 0V7.5Zm.75 10a1 1 0 1 1 0-2.002 1 1 0 0 1 0 2.002Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgAlert2);
export default ForwardRef;
