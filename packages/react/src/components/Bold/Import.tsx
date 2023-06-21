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
    <path
      fill="currentColor"
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Zm-2.72 7.78-5.79 5.79h2.43a.75.75 0 1 1 0 1.5H6.68a.93.93 0 0 1-.29-.07.76.76 0 0 1-.4-.41.72.72 0 0 1-.06-.29v-4.22a.75.75 0 1 1 1.5 0v2.43l5.79-5.79a.75.75 0 0 1 1.06 1.06Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgImport);
export default ForwardRef;
