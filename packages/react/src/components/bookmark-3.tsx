import { SVGProps, Ref, forwardRef } from "react";
const SvgBookmark3 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M6 19.58V6.42a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v13.16a1 1 0 0 1-1.55.84l-4.45-3-4.45 3A1 1 0 0 1 6 19.58Z" />
      <path d="M12 6h2a1 1 0 0 1 1 1v2" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgBookmark3);
export default ForwardRef;
