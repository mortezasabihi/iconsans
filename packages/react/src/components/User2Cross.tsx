import { SVGProps, Ref, forwardRef } from "react";
const SvgUser2Cross = (
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
      d="M11.83 9.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm3 10.5H6.27a1.94 1.94 0 0 1-1.94-1.94v-3.62a1.94 1.94 0 0 1 1.94-1.94h8.56m1.66 5.34 3.18-3.18m-3.18 0 3.18 3.18"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUser2Cross);
export default ForwardRef;
