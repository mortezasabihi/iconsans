import { SVGProps, Ref, forwardRef } from "react";
const SvgCallTick = (
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
      d="M6.47 4.05 5 5.54a4.22 4.22 0 0 0 0 6L12.47 19a4.218 4.218 0 0 0 6 0L20 17.53A1.049 1.049 0 0 0 20 16l-2.24-2.25a1.07 1.07 0 0 0-1.5 0l-.75.75a1.07 1.07 0 0 1-1.5 0L9.47 10a1.07 1.07 0 0 1 0-1.5l.75-.75a1.07 1.07 0 0 0 0-1.5L8 4.05a1.05 1.05 0 0 0-1.53 0ZM15 6.18 16.82 8l4-4"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCallTick);
export default ForwardRef;
