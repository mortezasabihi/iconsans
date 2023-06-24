import { SVGProps, Ref, forwardRef } from "react";
const SvgNumberSignCircle = (
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
    <path fill="currentColor" d="M12.94 11.06h-1.88v1.88h1.88v-1.88Z" />
    <path
      fill="currentColor"
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm4.5 9.94a.75.75 0 1 1 0 1.5h-2.06v2.06a.75.75 0 1 1-1.5 0v-2.06h-1.88v2.06a.75.75 0 1 1-1.5 0v-2.06H7.5a.75.75 0 1 1 0-1.5h2.06v-1.88H7.5a.75.75 0 1 1 0-1.5h2.06V7.5a.75.75 0 0 1 1.5 0v2.06h1.88V7.5a.75.75 0 1 1 1.5 0v2.06h2.06a.75.75 0 1 1 0 1.5h-2.06v1.88h2.06Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgNumberSignCircle);
export default ForwardRef;
