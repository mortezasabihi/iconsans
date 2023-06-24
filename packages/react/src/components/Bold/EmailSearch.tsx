import { SVGProps, Ref, forwardRef } from "react";
const SvgEmailSearch = (
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
      d="M18 14a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm2.28 6.28a.59.59 0 0 1-.39.16.57.57 0 0 1-.39-.16l-.69-.69a2.22 2.22 0 0 1-1.09.3 2.17 2.17 0 1 1 2.17-2.17 2.22 2.22 0 0 1-.3 1.09l.69.69a.56.56 0 0 1 0 .78Z"
    />
    <path
      fill="currentColor"
      d="M18.6 4H5.4A3.41 3.41 0 0 0 2 7.4v9.2A3.41 3.41 0 0 0 5.4 20h7.06a.29.29 0 0 0 .28-.39 5.249 5.249 0 0 1-.24-1.38 5.5 5.5 0 0 1 9-4.45.29.29 0 0 0 .48-.24V7.4A3.41 3.41 0 0 0 18.6 4Zm-.19 5.63-4.84 3.17a2.67 2.67 0 0 1-1.56.49 2.79 2.79 0 0 1-1.61-.51L5.59 9.63a.752.752 0 1 1 .82-1.26l4.84 3.17a1.26 1.26 0 0 0 1.48 0l4.86-3.19a.752.752 0 0 1 .82 1.26v.02Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgEmailSearch);
export default ForwardRef;
