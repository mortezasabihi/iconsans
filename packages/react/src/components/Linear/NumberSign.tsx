import { SVGProps, Ref, forwardRef } from "react";
const SvgNumberSign = (
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
      d="M6 9.75h12m-12 4.5h12M6 9.75h12m-12 4.5h12M14.25 6v12M9.75 6v12m4.5-12v12M9.75 6v12"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgNumberSign);
export default ForwardRef;
