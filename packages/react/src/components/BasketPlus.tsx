import { SVGProps, Ref, forwardRef } from "react";
const SvgBasketPlus = (
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
      d="m4.75 9.83 1.33 8a2 2 0 0 0 2 1.67h7.62a2 2 0 0 0 2-1.67l1.33-8A2 2 0 0 0 17 7.5H6.72a2 2 0 0 0-1.97 2.33ZM12 13v4m2-2h-4m-5.14-4.5h13.93m-11.43-3 2-3m7 3-2-3"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBasketPlus);
export default ForwardRef;
