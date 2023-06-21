import { SVGProps, Ref, forwardRef } from "react";
const SvgActivity = (
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
      d="M5 15.75a.75.75 0 0 1-.59-1.21l3.09-4a2.7 2.7 0 0 1 2.17-1.03 2.73 2.73 0 0 1 2.17 1.06l1.51 1.94a1.29 1.29 0 0 0 2 0l3.09-4a.75.75 0 0 1 1.18.92l-3.09 4a2.7 2.7 0 0 1-2.17 1.06 2.73 2.73 0 0 1-2.17-1.06l-1.51-1.94a1.291 1.291 0 0 0-2 0l-3.09 4a.749.749 0 0 1-.59.26Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgActivity);
export default ForwardRef;
