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
    <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path
        strokeWidth={1.5}
        d="M7 21h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4Zm5-4v-7"
      />
      <path strokeWidth={2} d="M12 7v.001" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgInformationSquare);
export default ForwardRef;
