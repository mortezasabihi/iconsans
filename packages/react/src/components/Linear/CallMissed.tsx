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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.53 18.94v-2.12a4.23 4.23 0 0 0-4.23-4.23H6.7a4.23 4.23 0 0 0-4.23 4.23v2.12A1.05 1.05 0 0 0 3.53 20H6.7a1.049 1.049 0 0 0 1.06-1.06v-1.06a1.07 1.07 0 0 1 1.06-1.06h6.36a1.07 1.07 0 0 1 1.06 1.06v1.06A1.05 1.05 0 0 0 17.3 20h3.17a1.048 1.048 0 0 0 1.06-1.06ZM8 5.01 12.99 10l2-2.01"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 8.01v-3h2.99"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCallMissed);
export default ForwardRef;
