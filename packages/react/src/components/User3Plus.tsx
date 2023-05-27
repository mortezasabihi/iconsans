import { SVGProps, Ref, forwardRef } from "react";
const SvgUser3Plus = (
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
      d="M10.88 10.88a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-7.5 8.24v-3.31a2 2 0 0 1 1.93-1.94h10.07m3 5.25v-4.5m-2.25 2.25h4.5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUser3Plus);
export default ForwardRef;
