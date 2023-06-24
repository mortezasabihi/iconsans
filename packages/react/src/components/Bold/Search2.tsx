import { SVGProps, Ref, forwardRef } from "react";
const SvgSearch2 = (
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
      d="m19.41 18.34-2.59-2.58a7 7 0 1 0-1.06 1.06l2.58 2.59a.76.76 0 0 0 1.07 0 .77.77 0 0 0 0-1.07Zm-4.78-7a3.26 3.26 0 0 0-3.25-3.25.76.76 0 0 1-.696-1.039.742.742 0 0 1 .696-.461 4.76 4.76 0 0 1 4.75 4.75.75.75 0 1 1-1.5 0Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSearch2);
export default ForwardRef;
