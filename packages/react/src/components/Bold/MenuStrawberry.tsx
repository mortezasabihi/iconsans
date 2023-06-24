import { SVGProps, Ref, forwardRef } from "react";
const SvgMenuStrawberry = (
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
      d="M15 15.25H9a.75.75 0 1 0 0 1.5h6a.75.75 0 1 0 0-1.5Zm2-4H7a.75.75 0 1 0 0 1.5h10a.75.75 0 1 0 0-1.5Zm2-4H5a.75.75 0 0 0 0 1.5h14a.75.75 0 1 0 0-1.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMenuStrawberry);
export default ForwardRef;
