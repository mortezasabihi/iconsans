import { SVGProps, Ref, forwardRef } from "react";
const SvgLogout = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M7.75 11.73a.75.75 0 0 0 .75.75h5V18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v5h-5a.75.75 0 0 0-.75.73Zm13.44.27a.779.779 0 0 1-.16.24l-3.6 3.6a.75.75 0 0 1-1.06-1.06l2.32-2.32H13.5V11h5.19l-2.32-2.34a.75.75 0 1 1 1.06-1.06L21 11.2c.068.07.122.15.16.24a.729.729 0 0 1 .03.56Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLogout);
export default ForwardRef;
