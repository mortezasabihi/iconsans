import { SVGProps, Ref, forwardRef } from "react";
const SvgMessage = (
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
      fill="currentColor"
      d="M16.8 4.43H7.2a3 3 0 0 0-3 3v5.85a3 3 0 0 0 2.2 2.89 1 1 0 0 1 .8 1v1.92a.5.5 0 0 0 .85.36l2.84-2.84a1 1 0 0 1 .7-.29h5.21a3 3 0 0 0 3-3V7.43a3 3 0 0 0-3-3ZM9 11.28a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMessage);
export default ForwardRef;
