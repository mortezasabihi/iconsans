import { SVGProps, Ref, forwardRef } from "react";
const SvgImport = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.width || 16}
    height={props.height || 16}
    ref={ref}
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M12.52 11.49 21 3m-3.39 8.49h-5.09v-5.1" />
      <path d="M21 12v5a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h5" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgImport);
export default ForwardRef;
