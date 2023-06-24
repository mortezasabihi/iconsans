import { SVGProps, Ref, forwardRef } from "react";
const SvgUser2Tick = (
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
      d="M11.5 9.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm3 10.5H5.94A1.94 1.94 0 0 1 4 18.31v-3.62a1.94 1.94 0 0 1 1.94-1.94h8.56m.5 3.12 1.57 1.56L20 14"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUser2Tick);
export default ForwardRef;
