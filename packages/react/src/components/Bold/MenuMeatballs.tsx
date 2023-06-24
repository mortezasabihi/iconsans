import { SVGProps, Ref, forwardRef } from "react";
const SvgMenuMeatballs = (
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
      d="M18 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-6 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-6 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMenuMeatballs);
export default ForwardRef;
