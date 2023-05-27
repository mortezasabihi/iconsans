import { SVGProps, Ref, forwardRef } from "react";
const SvgUser3Cross = (
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
      d="M11.11 10.84a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-7.5 8.25v-3.32a1.94 1.94 0 0 1 1.93-1.93h10.07m1.6 5.32 3.18-3.18m-3.18 0 3.18 3.18"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUser3Cross);
export default ForwardRef;
