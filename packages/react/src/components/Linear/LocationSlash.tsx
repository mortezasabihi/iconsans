import { SVGProps, Ref, forwardRef } from "react";
const SvgLocationSlash = (
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
      d="M7.86 16.14c-2.28-4.08-2-6.06-2-6.06a6.18 6.18 0 0 1 11.4-3.3m.92 3.3s.35 2.84-3.69 8.71a3.001 3.001 0 0 1-5 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.75 12.05a1.91 1.91 0 0 1-1.16-.57 2 2 0 0 1 2.82-2.82c.34.325.549.762.59 1.23M21 3 3 21"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLocationSlash);
export default ForwardRef;
