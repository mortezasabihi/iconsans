import { SVGProps, Ref, forwardRef } from "react";
const SvgPauseSqaure = (
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
      d="M9.97 8.24H8.24a.87.87 0 0 0-.87.87v5.78c0 .48.39.87.87.87h1.73c.48 0 .87-.39.87-.87V9.11a.87.87 0 0 0-.87-.87Zm5.79 0h-1.73a.87.87 0 0 0-.87.87v5.78c0 .48.39.87.87.87h1.73c.48 0 .87-.39.87-.87V9.11a.87.87 0 0 0-.87-.87Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPauseSqaure);
export default ForwardRef;
