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
      fill="currentColor"
      d="M11.31 3.55 8.15 5.66A2 2 0 0 1 7 6H5.15a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5H7a2 2 0 0 1 1.11.34l3.16 2.11a1.51 1.51 0 0 0 2.34-1.25V4.8a1.51 1.51 0 0 0-2.3-1.25Zm8.1 8.95 1.47-1.5a.74.74 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-1.47 1.47L16.88 10a.75.75 0 0 0-1.06 1l1.47 1.47L15.82 14a.75.75 0 0 0 .53 1.28.71.71 0 0 0 .53-.22l1.47-1.47L19.82 15a.74.74 0 0 0 .53.22.71.71 0 0 0 .53-.22.74.74 0 0 0 0-1.06l-1.47-1.44Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgVolumeMute);
export default ForwardRef;
