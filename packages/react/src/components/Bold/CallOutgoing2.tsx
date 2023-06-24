import { SVGProps, Ref, forwardRef } from "react";
const SvgCallOutgoing2 = (
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
      d="M17.71 13.78a1.07 1.07 0 0 0-1.5 0l-.75.75a1.07 1.07 0 0 1-1.5 0L9.47 10a1.07 1.07 0 0 1 0-1.5l.75-.75a1.07 1.07 0 0 0 0-1.5L8 4.05a1.05 1.05 0 0 0-1.5 0L5 5.54a4.22 4.22 0 0 0 0 6L12.47 19a4.22 4.22 0 0 0 6 0L20 17.53A1.05 1.05 0 0 0 20 16l-2.29-2.22Zm3.97-11.07a.729.729 0 0 0-.41-.4.71.71 0 0 0-.27-.06h-3a.75.75 0 1 0 0 1.5h1.18l-3.7 3.71a.75.75 0 0 0 1.06 1.06l3.71-3.71V6a.75.75 0 1 0 1.5 0V3a.75.75 0 0 0-.07-.29Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCallOutgoing2);
export default ForwardRef;
