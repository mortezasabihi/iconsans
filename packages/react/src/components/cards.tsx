import { SVGProps, Ref, forwardRef } from "react";
const SvgCards = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.width || 16}
    height={props.height || 16}
    ref={ref}
    {...props}
  >
    <g stroke="currentColor" strokeLinejoin="round" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        d="M15.28 8.32H5.45A2.45 2.45 0 0 0 3 10.77v5.74a2.45 2.45 0 0 0 2.45 2.45h9.83a2.45 2.45 0 0 0 2.45-2.45v-5.74a2.45 2.45 0 0 0-2.45-2.45Z"
      />
      <path
        strokeLinecap="round"
        d="M6.27 8.32V7.5a2.45 2.45 0 0 1 2.46-2.45h9.82A2.45 2.45 0 0 1 21 7.5v5.73a2.45 2.45 0 0 1-2.45 2.45h-.82"
      />
      <path d="M3 12.41h14.73" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgCards);
export default ForwardRef;
