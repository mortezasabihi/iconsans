import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowUpCircle = (
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
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-14v10"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9 10 3-3 3 3"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowUpCircle);
export default ForwardRef;
