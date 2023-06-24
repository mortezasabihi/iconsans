import { SVGProps, Ref, forwardRef } from "react";
const SvgClock2 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      fill="currentColor"
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm.75 9a.74.74 0 0 1-.3.6l-4 3a.76.76 0 0 1-.786.072.74.74 0 0 1-.264-.222.75.75 0 0 1 .15-1l3.7-2.78V6a.75.75 0 1 1 1.5 0v6Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgClock2);
export default ForwardRef;
