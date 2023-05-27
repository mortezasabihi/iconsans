import { SVGProps, Ref, forwardRef } from "react";
const SvgUser1Tick = (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.03 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM13 19H6a2.51 2.51 0 0 1-2.5-2.5A2.51 2.51 0 0 1 6 14h7m2.47 2.43L17.03 18l3.44-3.44"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUser1Tick);
export default ForwardRef;
