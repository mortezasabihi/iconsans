import { SVGProps, Ref, forwardRef } from "react";
const SvgUser3Cross = (
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
      d="M11.28 10.88a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-7.5 8.24v-3.31a2 2 0 0 1 1.94-1.94h10.06m1.96 4.97 2.48-2.47m-2.48 0 2.48 2.47"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUser3Cross);
export default ForwardRef;
