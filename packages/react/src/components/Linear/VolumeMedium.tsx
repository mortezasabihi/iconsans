import { SVGProps, Ref, forwardRef } from "react";
const SvgVolumeMedium = (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.86 16.5v-9A1.5 1.5 0 0 1 5.36 6h1.89a2 2 0 0 0 1.11-.34l3.17-2.11a1.5 1.5 0 0 1 2.33 1.25v14.4a1.5 1.5 0 0 1-2.33 1.25l-3.17-2.11A2 2 0 0 0 7.25 18H5.36a1.5 1.5 0 0 1-1.5-1.5Zm12.39-6.78a3.49 3.49 0 0 1 0 4.95m2.03-6.98a6.37 6.37 0 0 1 0 9"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgVolumeMedium);
export default ForwardRef;
