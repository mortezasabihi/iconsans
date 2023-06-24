import { SVGProps, Ref, forwardRef } from "react";
const SvgCallSlash = (
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
      d="m11.43 12-2-2a1.07 1.07 0 0 1 0-1.5l.75-.75a1.07 1.07 0 0 0 0-1.5L8 4.05a1.05 1.05 0 0 0-1.5 0L5 5.54a4.22 4.22 0 0 0 0 6L8.44 15m2.75 2.75L12.47 19a4.221 4.221 0 0 0 6 0L20 17.53A1.05 1.05 0 0 0 20 16l-2.24-2.25a1.07 1.07 0 0 0-1.5 0l-.75.75a1 1 0 0 1-1.31.14.51.51 0 0 0-.64.05l-2.32 2.33a.5.5 0 0 0-.05.73Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.44 5.56-13.5 13.5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCallSlash);
export default ForwardRef;
