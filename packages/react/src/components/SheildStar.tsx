import { SVGProps, Ref, forwardRef } from "react";
const SvgSheildStar = (
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
    <g stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeMiterlimit={10}
        d="m12.53 8.33.51 1a.58.58 0 0 0 .45.33l1.12.16a.6.6 0 0 1 .33 1l-.81.79a.592.592 0 0 0-.17.53l.19 1.12a.59.59 0 0 1-.86.63l-1-.53a.61.61 0 0 0-.56 0l-1 .53a.59.59 0 0 1-.86-.63l.13-1.08a.59.59 0 0 0-.17-.53l-.81-.79a.6.6 0 0 1 .33-1l1.12-.16a.58.58 0 0 0 .53-.35l.51-1a.59.59 0 0 1 1.02-.02Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m13 20.52-1 .57-1-.57A14 14 0 0 1 4 8.39a2 2 0 0 1 1-1.73l6.08-3.51a1.83 1.83 0 0 1 1.84 0L19 6.66a2 2 0 0 1 1 1.73 14 14 0 0 1-7 12.13Z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgSheildStar);
export default ForwardRef;
