import { SVGProps, Ref, forwardRef } from "react";
const SvgSearchMinus = (
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
      d="m19.41 18.34-2.59-2.58a7 7 0 1 0-1.06 1.06l2.58 2.59a.76.76 0 0 0 1.07 0 .77.77 0 0 0 0-1.07Zm-5.53-6.21h-5a.76.76 0 0 1-.696-1.039.74.74 0 0 1 .696-.461h5a.75.75 0 0 1 .75.75.77.77 0 0 1-.75.75Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSearchMinus);
export default ForwardRef;
