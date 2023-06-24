import { SVGProps, Ref, forwardRef } from "react";
const SvgReceiveCircle = (
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
      fill="currentColor"
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm4.07 6-5.8 5.79h2.44a.75.75 0 1 1 0 1.5H8.46a.71.71 0 0 1-.28-.06.73.73 0 0 1-.41-.4.75.75 0 0 1-.06-.29V11.3a.75.75 0 1 1 1.5 0v2.43L15 7.94a.74.74 0 0 1 1.06 0A.75.75 0 0 1 16.07 9Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgReceiveCircle);
export default ForwardRef;
