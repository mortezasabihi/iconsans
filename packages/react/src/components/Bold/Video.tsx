import { SVGProps, Ref, forwardRef } from "react";
const SvgVideo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M20.88 5.76a1.82 1.82 0 0 0-2 .4l-2.3 2.32a.09.09 0 0 1-.16-.06v-.14a3.49 3.49 0 0 0-3.49-3.49H5.49A3.49 3.49 0 0 0 2 8.28v7.44a3.49 3.49 0 0 0 3.49 3.49h7.44a3.49 3.49 0 0 0 3.49-3.49v-.14a.09.09 0 0 1 .16-.06l2.32 2.32a1.81 1.81 0 0 0 1.28.54c.24-.002.478-.05.7-.14A1.81 1.81 0 0 0 22 16.56V7.44a1.81 1.81 0 0 0-1.12-1.68Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgVideo);
export default ForwardRef;
