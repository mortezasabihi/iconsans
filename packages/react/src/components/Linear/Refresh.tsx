import { SVGProps, Ref, forwardRef } from "react";
const SvgRefresh = (
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
      d="M3.85 15.48a8.71 8.71 0 0 1 14-9.92"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.56 3.51v2.74h-2.74m4.33 2.27a8.71 8.71 0 0 1-14 9.92"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.44 20.49v-2.74h2.74"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgRefresh);
export default ForwardRef;
