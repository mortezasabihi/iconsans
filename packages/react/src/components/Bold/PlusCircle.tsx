import { SVGProps, Ref, forwardRef } from "react";
const SvgPlusCircle = (
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
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm3.5 9.75h-2.75v2.75a.75.75 0 1 1-1.5 0v-2.75H8.5a.75.75 0 1 1 0-1.5h2.75V8.5a.75.75 0 1 1 1.5 0v2.75h2.75a.75.75 0 1 1 0 1.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPlusCircle);
export default ForwardRef;
