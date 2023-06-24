import { SVGProps, Ref, forwardRef } from "react";
const SvgEmailEdit = (
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
      d="M10 20H5.4A3.41 3.41 0 0 1 2 16.6V7.4A3.41 3.41 0 0 1 5.4 4h13.2A3.41 3.41 0 0 1 22 7.4V9"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6 9 4.84 3.17a2 2 0 0 0 2.32 0L18 9m-4.09 8.49 5.58-5.58a.57.57 0 0 1 .79 0l1.56 1.56a.57.57 0 0 1 0 .79l-5.58 5.58a.59.59 0 0 1-.39.16H14.3a.55.55 0 0 1-.55-.55v-1.56a.59.59 0 0 1 .16-.4Zm4.24-4.23 2.34 2.34"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgEmailEdit);
export default ForwardRef;
