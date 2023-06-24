import { SVGProps, Ref, forwardRef } from "react";
const SvgPower = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M15 6.74a6.5 6.5 0 1 1-6 0M12 5v5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPower);
export default ForwardRef;
