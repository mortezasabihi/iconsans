import { SVGProps, Ref, forwardRef } from "react";
const SvgNotes = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M15 4H9a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-2.5 10.75h-3a.75.75 0 1 1 0-1.5h3a.75.75 0 1 1 0 1.5Zm2-3h-5a.75.75 0 1 1 0-1.5h5a.75.75 0 1 1 0 1.5Zm0-3h-5a.75.75 0 0 1 0-1.5h5a.75.75 0 1 1 0 1.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgNotes);
export default ForwardRef;
