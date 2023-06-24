import { SVGProps, Ref, forwardRef } from "react";
const SvgPlaylistUp = (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.46 9.47-2.83-1.63a1.09 1.09 0 0 0-1.63.94V12a1.09 1.09 0 0 0 1.63.94l2.83-1.63a1.09 1.09 0 0 0 0-1.84Zm.54 6.84H5m6-4H5m6-4H5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPlaylistUp);
export default ForwardRef;
