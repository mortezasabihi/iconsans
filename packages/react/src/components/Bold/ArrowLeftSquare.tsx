import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowLeftSquare = (
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
      fill="currentColor"
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Zm0 9.75H8.81l1.72 1.72a.75.75 0 0 1-1.06 1.06l-3-3a.78.78 0 0 1-.22-.53.78.78 0 0 1 .22-.53l3-3a.75.75 0 0 1 1.06 1.06l-1.72 1.72H17a.75.75 0 1 1 0 1.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowLeftSquare);
export default ForwardRef;
