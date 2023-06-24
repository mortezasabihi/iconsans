import { SVGProps, Ref, forwardRef } from "react";
const SvgVolumeMedium = (
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
      d="M11.53 3.55 8.36 5.66A2 2 0 0 1 7.25 6H5.36a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h1.89a2 2 0 0 1 1.11.34l3.17 2.11a1.499 1.499 0 0 0 2.33-1.25V4.8a1.5 1.5 0 0 0-2.33-1.25Zm5.25 5.64a.74.74 0 0 0-1.06 0 .75.75 0 0 0 0 1.06 2.76 2.76 0 0 1 0 3.89.75.75 0 0 0 0 1.06.79.79 0 0 0 .53.22.77.77 0 0 0 .53-.22 4.25 4.25 0 0 0 0-6.01Z"
    />
    <path
      fill="currentColor"
      d="M18.81 7.16a.75.75 0 0 0-1.06 0 .74.74 0 0 0 0 1.06 5.63 5.63 0 0 1 0 7.94.74.74 0 0 0 0 1.06.73.73 0 0 0 .53.22.74.74 0 0 0 .53-.22 7.12 7.12 0 0 0 0-10.06Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgVolumeMedium);
export default ForwardRef;
