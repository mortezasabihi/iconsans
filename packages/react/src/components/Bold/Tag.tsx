import { SVGProps, Ref, forwardRef } from "react";
const SvgTag = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M15.6 8.4a1.24 1.24 0 1 1-.88-.4 1.21 1.21 0 0 1 .88.4Z"
    />
    <path
      fill="currentColor"
      d="M19.33 6.43a2 2 0 0 0-1.76-1.77l-3.82-.42a2 2 0 0 0-1.64.57l-7.29 7.3a2 2 0 0 0 0 2.83l4.24 4.24a1.999 1.999 0 0 0 2.83 0l7.29-7.3a2 2 0 0 0 .58-1.63l-.43-3.82Zm-2.67 4.8a2.75 2.75 0 1 1 0-3.89 2.77 2.77 0 0 1 0 3.89Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTag);
export default ForwardRef;
