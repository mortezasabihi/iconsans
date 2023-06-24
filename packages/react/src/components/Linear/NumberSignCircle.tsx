import { SVGProps, Ref, forwardRef } from "react";
const SvgNumberSignCircle = (
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
      d="M7.5 10.31h9m-9 3.38h9m-9-3.38h9m-9 3.38h9M13.69 7.5v9m-3.38-9v9m3.38-9v9m-3.38-9v9M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgNumberSignCircle);
export default ForwardRef;
