import { SVGProps, Ref, forwardRef } from "react";
const SvgReceiveCircle = (
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
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-3.54-5.46 7.08-7.08"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.71 15.54H8.46v-4.25"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgReceiveCircle);
export default ForwardRef;
