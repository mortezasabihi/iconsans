import { SVGProps, Ref, forwardRef } from "react";
const SvgAsterisk = (
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
      d="M17 11.25h-3.19L16.07 9a.75.75 0 0 0 0-1.06.77.77 0 0 0-1.07 0l-2.25 2.26V7a.75.75 0 1 0-1.5 0v3.19L9 7.93a.77.77 0 0 0-1.07 0 .75.75 0 0 0 0 1.07l2.26 2.26H7a.75.75 0 1 0 0 1.5h3.19L7.93 15a.75.75 0 0 0 .535 1.28.76.76 0 0 0 .535-.22l2.25-2.26V17a.75.75 0 1 0 1.5 0v-3.19L15 16.07a.76.76 0 0 0 1.07 0 .75.75 0 0 0 0-1.06l-2.26-2.26H17a.75.75 0 1 0 0-1.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgAsterisk);
export default ForwardRef;
