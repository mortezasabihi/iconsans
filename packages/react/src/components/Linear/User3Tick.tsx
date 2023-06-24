import { SVGProps, Ref, forwardRef } from "react";
const SvgUser3Tick = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
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
      d="M11.47 10.88a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4 19.12v-3.31a2 2 0 0 1 1.94-1.94H16m-.97 3.56L16.59 19l3.44-3.44"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUser3Tick);
export default ForwardRef;
