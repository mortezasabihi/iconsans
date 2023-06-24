import { SVGProps, Ref, forwardRef } from "react";
const SvgVolumeSlash = (
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
      d="M7 16.5v-9A1.5 1.5 0 0 1 8.5 6h1.89a2 2 0 0 0 1.11-.34l3.17-2.11A1.5 1.5 0 0 1 17 4.8V7m0 4v8.2a1.5 1.5 0 0 1-2.33 1.25l-3.17-2.11a2 2 0 0 0-1.11-.34H10M22 2 2 22"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgVolumeSlash);
export default ForwardRef;
