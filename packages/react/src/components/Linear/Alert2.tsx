import { SVGProps, Ref, forwardRef } from "react";
const SvgAlert2 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    ref={ref}
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <path d="m10.27 5-6.9 12a2 2 0 0 0 1.73 3h13.8a2 2 0 0 0 1.73-3l-6.9-12a2 2 0 0 0-3.46 0ZM12 7.5v6.3m.001 2.7H12" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgAlert2);
export default ForwardRef;
