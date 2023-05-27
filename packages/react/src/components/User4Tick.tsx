import { SVGProps, Ref, forwardRef } from "react";
const SvgUser4Tick = (
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
      d="M15 17.44 16.57 19 20 15.57m-8.5-5.92a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4 20a7.49 7.49 0 0 1 11.5-6.34"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUser4Tick);
export default ForwardRef;
