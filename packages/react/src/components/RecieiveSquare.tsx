import { SVGProps, Ref, forwardRef } from "react";
const SvgRecieiveSquare = (
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
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M21 16.99v-10a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4ZM8.47 15.53l7.07-7.07" />
      <path d="M12.71 15.53H8.47v-4.24" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgRecieiveSquare);
export default ForwardRef;
