import { SVGProps, Ref, forwardRef } from "react";
const SvgExport = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Zm1 8a.75.75 0 1 1-1.5 0V8.56l-5.79 5.79a.74.74 0 0 1-1.06 0 .75.75 0 0 1 0-1.06l5.79-5.79H13A.75.75 0 1 1 13 6h4.24a.76.76 0 0 1 .75.75L18 11Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgExport);
export default ForwardRef;
