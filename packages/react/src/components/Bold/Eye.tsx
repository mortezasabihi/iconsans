import { SVGProps, Ref, forwardRef } from "react";
const SvgEye = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m20.09 10.58-2.43-2.42a8 8 0 0 0-11.32 0l-2.43 2.42a2 2 0 0 0 0 2.83l2.43 2.43a8 8 0 0 0 11.32 0l2.43-2.43a1.998 1.998 0 0 0 0-2.83ZM12 14.91a2.91 2.91 0 1 1 0-5.821 2.91 2.91 0 0 1 0 5.821Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgEye);
export default ForwardRef;
