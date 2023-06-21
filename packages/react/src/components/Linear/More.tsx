import { SVGProps, Ref, forwardRef } from "react";
const SvgMore = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      strokeWidth={2}
      d="M12 12v.001M16 12v.001M8 12v.001"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMore);
export default ForwardRef;
