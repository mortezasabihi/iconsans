import { SVGProps, Ref, forwardRef } from "react";
const SvgInformationSquare = (
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
      d="M17 21H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4Zm-5.75-4.5a.75.75 0 1 0 1.5 0v-6.3a.75.75 0 1 0-1.5 0v6.3Zm.75-10a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgInformationSquare);
export default ForwardRef;
