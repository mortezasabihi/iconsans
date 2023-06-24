import { SVGProps, Ref, forwardRef } from "react";
const SvgMessageNew = (
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
      d="M19.39 9.21a3.43 3.43 0 0 1-1.29.29 3.54 3.54 0 0 1-3.55-2.88 3.578 3.578 0 0 1 .15-1.79.31.31 0 0 0-.3-.4H7.2a3 3 0 0 0-3 3v5.85a3 3 0 0 0 2.21 2.89 1 1 0 0 1 .79 1v1.93a.5.5 0 0 0 .85.36l2.84-2.84a1 1 0 0 1 .7-.29h5.21a3 3 0 0 0 3-3V9.49a.3.3 0 0 0-.41-.28ZM9 11.28a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
    />
    <path fill="currentColor" d="M18 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMessageNew);
export default ForwardRef;
