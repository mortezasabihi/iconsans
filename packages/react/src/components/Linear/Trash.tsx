import { SVGProps, Ref, forwardRef } from "react";
const SvgTrash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6 6.94.75 11.12a2 2 0 0 0 2 2h6.5a2 2 0 0 0 2-2L18 6.94m-4.5 5.62v4.5m-3-4.5v4.5M5 6.94h14m-4.5 0v-2a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v2"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTrash);
export default ForwardRef;
