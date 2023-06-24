import { SVGProps, Ref, forwardRef } from "react";
const SvgUndo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm2.63 12.69H7.5a.75.75 0 1 1 0-1.5h7.13a1.62 1.62 0 1 0 0-3.24H8.78a.76.76 0 0 1-.15.83.76.76 0 0 1-1.07 0l-1.09-1.1a.75.75 0 0 1 0-1.06l1.09-1.1a.77.77 0 0 1 1.07 0 .76.76 0 0 1 .09.93h5.91a3.12 3.12 0 1 1 0 6.24Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUndo);
export default ForwardRef;
