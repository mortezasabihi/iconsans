import { SVGProps, Ref, forwardRef } from "react";
const SvgVolumeMute = (
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
      d="M3.65 16.5v-9A1.5 1.5 0 0 1 5.15 6H7a2 2 0 0 0 1.11-.34l3.16-2.11a1.51 1.51 0 0 1 2.38 1.25v14.4a1.51 1.51 0 0 1-2.34 1.25l-3.16-2.11A2 2 0 0 0 7 18H5.15a1.5 1.5 0 0 1-1.5-1.5Zm16.7-6-4 4m0-4 4 4"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgVolumeMute);
export default ForwardRef;
