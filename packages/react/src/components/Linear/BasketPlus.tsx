import { SVGProps, Ref, forwardRef } from "react";
const SvgBasketPlus = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.53 9.55 5.93 18A2.1 2.1 0 0 0 8 19.71h8A2.1 2.1 0 0 0 18.07 18l1.4-8.4a2.1 2.1 0 0 0-2.07-2.5H6.6a2.1 2.1 0 0 0-2.07 2.45Zm.12.7h14.63M7.78 7.11l1.88-2.82m6.56 2.82-1.88-2.82M12 12.94v3.75m1.87-1.88h-3.74"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBasketPlus);
export default ForwardRef;
