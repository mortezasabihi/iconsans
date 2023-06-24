import { SVGProps, Ref, forwardRef } from "react";
const SvgEmail = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M18.6 4H5.4A3.41 3.41 0 0 0 2 7.4v9.2A3.41 3.41 0 0 0 5.4 20h13.2a3.41 3.41 0 0 0 3.4-3.4V7.4A3.41 3.41 0 0 0 18.6 4Zm-.19 5.63-4.84 3.17a2.67 2.67 0 0 1-1.56.49 2.79 2.79 0 0 1-1.61-.51L5.59 9.63a.752.752 0 1 1 .82-1.26l4.84 3.17a1.26 1.26 0 0 0 1.48 0l4.86-3.19a.752.752 0 0 1 .82 1.26v.02Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgEmail);
export default ForwardRef;
