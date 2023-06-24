import { SVGProps, Ref, forwardRef } from "react";
const SvgCamera = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M21 9.5v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h3.5A.5.5 0 0 0 9 7V5.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V7a.5.5 0 0 0 .5.5H19a2 2 0 0 1 2 2Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 16.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCamera);
export default ForwardRef;
