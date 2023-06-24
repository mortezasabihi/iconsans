import { SVGProps, Ref, forwardRef } from "react";
const SvgShuffle = (
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
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM7 8h.56a5.08 5.08 0 0 1 3.76 1.67.76.76 0 0 1-.06 1.06.75.75 0 0 1-.5.19.732.732 0 0 1-.56-.25 3.53 3.53 0 0 0-2.64-1.13H7A.77.77 0 1 1 7 8Zm10.53 7.7-1.32 1.32a.75.75 0 0 1-1.06-1.06l.17-.17a5 5 0 0 1-2.64-1.55.75.75 0 0 1 .602-1.25.75.75 0 0 1 .518.25c.33.368.73.665 1.18.87a.75.75 0 0 1 1.23-.79l1.32 1.32a.83.83 0 0 1 .15.23c.04.091.06.19.06.29a.75.75 0 0 1-.21.58v-.04Zm.16-6.66a.86.86 0 0 1-.13.2l-1.32 1.31A.75.75 0 0 1 15 9.87a3.55 3.55 0 0 0-1.48 1.24l-1.74 2.61A5 5 0 0 1 7.56 16H7a.75.75 0 1 1 0-1.5h.56a3.52 3.52 0 0 0 2.94-1.57l1.75-2.61a5 5 0 0 1 3.07-2.11L15.15 8a.75.75 0 0 1 0-1.06.74.74 0 0 1 1.06 0l1.32 1.31a.86.86 0 0 1 .13.2.759.759 0 0 1 .03.63v-.04Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgShuffle);
export default ForwardRef;
