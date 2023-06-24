import { SVGProps, Ref, forwardRef } from "react";
const SvgUser2Tick = (
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
      fill="currentColor"
      d="M11.25 9.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.74 20h-7a1.94 1.94 0 0 1-1.94-1.94v-3.62a1.94 1.94 0 0 1 1.89-1.94h7.05a.3.3 0 0 1 .26.5 5 5 0 0 0 0 6.52.3.3 0 0 1-.26.48Z"
    />
    <path
      fill="currentColor"
      d="M16.75 12.75a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm2.05 3-2.09 2.08a.73.73 0 0 1-.53.22.74.74 0 0 1-.53-.22l-1-.95a.75.75 0 0 1 1.06-1.06l.42.42 1.56-1.55a.74.74 0 0 1 1.06 0 .75.75 0 0 1 .05 1.05v.01Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUser2Tick);
export default ForwardRef;
