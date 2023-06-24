import { SVGProps, Ref, forwardRef } from "react";
const SvgCategory4 = (
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
      fill="currentColor"
      d="M8.96 4.5h-3A1.5 1.5 0 0 0 4.46 6v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5Zm1.5 12a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm7.5-3h-3a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5ZM16 5.22l-2.29 4a.7.7 0 0 0 .61 1.05h4.57a.7.7 0 0 0 .61-1.05l-2.29-4a.7.7 0 0 0-1.21 0Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCategory4);
export default ForwardRef;
