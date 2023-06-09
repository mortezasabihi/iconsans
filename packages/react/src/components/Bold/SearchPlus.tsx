import { SVGProps, Ref, forwardRef } from "react";
const SvgSearchPlus = (
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
      d="m19.41 18.34-2.59-2.58a7 7 0 1 0-1.06 1.06l2.58 2.59a.76.76 0 0 0 1.07 0 .77.77 0 0 0 0-1.07Zm-5.53-6.21h-1.75v1.75a.75.75 0 1 1-1.5 0v-1.75H8.88a.76.76 0 0 1-.696-1.039.74.74 0 0 1 .696-.461h1.75V8.88a.75.75 0 1 1 1.5 0v1.75h1.75a.75.75 0 0 1 .75.75.77.77 0 0 1-.75.75Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSearchPlus);
export default ForwardRef;
