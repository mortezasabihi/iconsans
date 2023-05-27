import { SVGProps, Ref, forwardRef } from "react";
const SvgLogoutVertical = (
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
      d="M16 10.5h2a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h2m3.73-7v12m-3.6-8.4 3.6-3.6 3.6 3.6"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLogoutVertical);
export default ForwardRef;
