import { SVGProps, Ref, forwardRef } from "react";
const SvgVolumeHigh = (
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
      d="M10.11 3.55 7 5.66A2 2 0 0 1 5.84 6h-1.9a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h1.9a2 2 0 0 1 1.16.34l3.16 2.11a1.5 1.5 0 0 0 2.33-1.25V4.8a1.5 1.5 0 0 0-2.38-1.25Zm5.26 5.64a.74.74 0 0 0-1.06 0 .75.75 0 0 0 0 1.06 2.76 2.76 0 0 1 0 3.89.75.75 0 0 0 .53 1.28.79.79 0 0 0 .53-.22 4.25 4.25 0 0 0 0-6.01Z"
    />
    <path
      fill="currentColor"
      d="M17.39 7.16a.75.75 0 0 0-1.06 1.06 5.62 5.62 0 0 1 0 7.94.75.75 0 0 0 .53 1.28.71.71 0 0 0 .53-.22 7.11 7.11 0 0 0 0-10.06Z"
    />
    <path
      fill="currentColor"
      d="M19.39 5.16a.75.75 0 1 0-1.06 1.06 8.44 8.44 0 0 1 0 11.94.75.75 0 0 0 .53 1.28.71.71 0 0 0 .53-.22 10 10 0 0 0 0-14.06Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgVolumeHigh);
export default ForwardRef;
