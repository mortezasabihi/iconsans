import { SVGProps, Ref, forwardRef } from "react";
const SvgCalling = (
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
      d="M16.73 9.61a.75.75 0 1 0 1.5 0 3.85 3.85 0 0 0-3.84-3.83.75.75 0 1 0 0 1.5 2.33 2.33 0 0 1 2.34 2.33Z"
    />
    <path
      fill="currentColor"
      d="M14.39 3.25a.75.75 0 1 0 0 1.5 4.87 4.87 0 0 1 4.86 4.86.75.75 0 1 0 1.5 0 6.36 6.36 0 0 0-6.36-6.36Zm3.32 10.53a1.07 1.07 0 0 0-1.5 0l-.75.75a1.07 1.07 0 0 1-1.5 0L9.47 10a1.07 1.07 0 0 1 0-1.5l.75-.75a1.07 1.07 0 0 0 0-1.5L8 4.05a1.05 1.05 0 0 0-1.5 0L5 5.54a4.22 4.22 0 0 0 0 6L12.47 19a4.22 4.22 0 0 0 6 0L20 17.53A1.05 1.05 0 0 0 20 16l-2.29-2.22Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCalling);
export default ForwardRef;
