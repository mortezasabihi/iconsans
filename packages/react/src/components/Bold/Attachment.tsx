import { SVGProps, Ref, forwardRef } from "react";
const SvgAttachment = (
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
      d="M14.22 4.16a5.25 5.25 0 0 1 3.71 9l-6 6a3.75 3.75 0 1 1-5.3-5.31l6-6a2.31 2.31 0 0 1 3.18 0 2.22 2.22 0 0 1 .66 1.59 2.249 2.249 0 0 1-.66 1.6l-6 6a.74.74 0 0 1-1.06 0 .75.75 0 0 1 0-1.06l6-6A.75.75 0 0 0 15 9.4a.75.75 0 0 0-1.28-.53l-6 6a2.252 2.252 0 0 0 3.18 3.19l6-6a3.75 3.75 0 1 0-5.3-5.31l-6 6a.758.758 0 0 1-1.246-.218.76.76 0 0 1 .146-.832l6-6a5.24 5.24 0 0 1 3.72-1.54Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgAttachment);
export default ForwardRef;
