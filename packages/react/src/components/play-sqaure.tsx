import { SVGProps, Ref, forwardRef } from "react";
const SvgPlaySqaure = (
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
      <path d="m15.24 10.68-4-2.28A1.52 1.52 0 0 0 9 9.72v4.56a1.52 1.52 0 0 0 2.28 1.32l4-2.28a1.53 1.53 0 0 0-.04-2.64Z" />
      <path d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgPlaySqaure);
export default ForwardRef;
