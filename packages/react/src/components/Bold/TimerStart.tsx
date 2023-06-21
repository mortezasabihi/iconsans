import { SVGProps, Ref, forwardRef } from "react";
const SvgTimerStart = (
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
      d="M16.5 14.8a3.5 3.5 0 1 0 0 7.002 3.5 3.5 0 0 0 0-7.002Zm1.26 3.87-1.72 1a.43.43 0 0 1-.65-.37v-2a.431.431 0 0 1 .65-.37l1.72 1a.42.42 0 0 1 0 .74Z"
    />
    <path
      fill="currentColor"
      d="M16.5 13.3a4.94 4.94 0 0 1 3.34 1.29A8 8 0 1 0 12 21h.29a5 5 0 0 1 4.21-7.7Zm-3.75-2.08a.75.75 0 1 1-1.5 0V7.67a.75.75 0 1 1 1.5 0v3.55ZM10 3.75h4a.75.75 0 1 0 0-1.5h-4a.75.75 0 0 0 0 1.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTimerStart);
export default ForwardRef;
