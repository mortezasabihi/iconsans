import { SVGProps, Ref, forwardRef } from "react";
const SvgTransferVerticalSquare = (
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
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Zm.69 11.12L15 16.77a.74.74 0 0 1-.53.22.71.71 0 0 1-.53-.22.74.74 0 0 1 0-1.06l1.37-1.37H6.84a.75.75 0 1 1 0-1.5h10.32a.74.74 0 0 1 .69.46.76.76 0 0 1-.16.82Zm-.53-3H6.84a.75.75 0 0 1-.53-1.28L9 7.23a.75.75 0 0 1 1 1.06L8.65 9.66h8.51a.75.75 0 1 1 0 1.5v-.04Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTransferVerticalSquare);
export default ForwardRef;
