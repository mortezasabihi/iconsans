import { SVGProps, Ref, forwardRef } from "react";
const SvgPercentCircle = (
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
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-2-5.38L14.4 8"
      />
      <path strokeWidth={2} d="M14.2 15.31v.001m-4-7.001v.001" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgPercentCircle);
export default ForwardRef;
