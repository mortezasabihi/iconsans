import { SVGProps, Ref, forwardRef } from "react";
const SvgCallMissed = (
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
      d="M17.3 12.59H6.7a4.23 4.23 0 0 0-4.23 4.23v2.12A1.05 1.05 0 0 0 3.53 20H6.7a1.05 1.05 0 0 0 1.06-1.06v-1.06a1.07 1.07 0 0 1 1.06-1.06h6.36a1.07 1.07 0 0 1 1.06 1.06v1.06A1.05 1.05 0 0 0 17.3 20h3.17a1.05 1.05 0 0 0 1.06-1.06v-2.12a4.23 4.23 0 0 0-4.23-4.23ZM8 8.76A.75.75 0 0 0 8.75 8V6.83l3.71 3.7a.75.75 0 0 0 1.06 0l2-2a.74.74 0 0 0 0-1.06.75.75 0 0 0-1.06 0L13 8.94 9.81 5.76H11a.75.75 0 1 0 0-1.5H8a.71.71 0 0 0-.28.06.75.75 0 0 0-.41.41.71.71 0 0 0-.06.27v3a.76.76 0 0 0 .75.76Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCallMissed);
export default ForwardRef;
