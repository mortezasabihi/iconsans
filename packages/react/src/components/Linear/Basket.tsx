import { SVGProps, Ref, forwardRef } from "react";
const SvgBasket = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M4.53 9.55 5.93 18A2.1 2.1 0 0 0 8 19.71h8A2.1 2.1 0 0 0 18.07 18l1.4-8.4a2.1 2.1 0 0 0-2.07-2.5H6.6a2.1 2.1 0 0 0-2.07 2.45Zm5.59 3.39v3.75m3.76-3.75v3.75m-9.23-6.44h14.63M7.78 7.11l1.88-2.82m6.56 2.82-1.88-2.82"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBasket);
export default ForwardRef;
