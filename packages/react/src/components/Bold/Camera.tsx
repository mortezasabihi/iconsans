import { SVGProps, Ref, forwardRef } from "react";
const SvgCamera = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M19 7.5h-3.5A.5.5 0 0 1 15 7V5.5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1V7a.5.5 0 0 1-.5.5H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2Zm-7 9a3 3 0 1 1 0-5.999 3 3 0 0 1 0 5.999Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCamera);
export default ForwardRef;
