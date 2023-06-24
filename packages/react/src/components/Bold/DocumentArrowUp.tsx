import { SVGProps, Ref, forwardRef } from "react";
const SvgDocumentArrowUp = (
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
      fill="currentColor"
      d="M13.22 10.76a2 2 0 0 1-2-2V4H9a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-6.24h-4.78Zm.88 4.35a.71.71 0 0 1-.53.22.74.74 0 0 1-.53-.22l-.29-.29V17a.75.75 0 1 1-1.5 0v-2.18l-.29.29a.75.75 0 0 1-1.06 0 .74.74 0 0 1 0-1.06l1.57-1.57a.81.81 0 0 1 .24-.17.83.83 0 0 1 .58 0c.09.041.171.1.24.17l1.57 1.57a.74.74 0 0 1 0 1.06Z"
    />
    <path
      fill="currentColor"
      d="M13.92 9.26h3.81a.12.12 0 0 0 .09-.2L13 4.19a.12.12 0 0 0-.2.08v3.82a1.17 1.17 0 0 0 1.12 1.17Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDocumentArrowUp);
export default ForwardRef;
