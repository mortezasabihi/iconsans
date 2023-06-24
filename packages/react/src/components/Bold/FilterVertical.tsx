import { SVGProps, Ref, forwardRef } from "react";
const SvgFilterVertical = (
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
      d="M18 15.25a.76.76 0 0 1-.75-.75v-11a.75.75 0 1 1 1.5 0v11a.76.76 0 0 1-.75.75ZM18 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-6 .25a.76.76 0 0 1-.75-.75v-11a.75.75 0 1 1 1.5 0v11a.76.76 0 0 1-.75.75ZM12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-6 8.25a.76.76 0 0 1-.75-.75v-11a.75.75 0 0 1 1.5 0v11a.76.76 0 0 1-.75.75ZM6 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFilterVertical);
export default ForwardRef;
