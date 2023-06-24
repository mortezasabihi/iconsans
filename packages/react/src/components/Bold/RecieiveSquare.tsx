import { SVGProps, Ref, forwardRef } from "react";
const SvgRecieiveSquare = (
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
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Zm-.93 6-5.79 5.8h2.43a.75.75 0 1 1 0 1.5H8.47a.72.72 0 0 1-.29-.06.78.78 0 0 1-.41-.41.92.92 0 0 1 0-.28v-4.26a.75.75 0 1 1 1.5 0v2.44L15 7.93A.757.757 0 1 1 16.07 9Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgRecieiveSquare);
export default ForwardRef;
