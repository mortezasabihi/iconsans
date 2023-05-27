import { SVGProps, Ref, forwardRef } from "react";
const SvgDocumentMinus = (
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
    <g stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}>
      <path
        strokeMiterlimit={10}
        d="M18 10.41V17a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h2.59a1 1 0 0 1 .7.29l5.42 5.42a1 1 0 0 1 .29.7Z"
      />
      <path
        strokeLinejoin="round"
        d="M12 4.48V9a1 1 0 0 0 1 1h4.52a.2.2 0 0 0 .14-.34l-5.32-5.32a.2.2 0 0 0-.34.14ZM9.75 14.75h4.5"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgDocumentMinus);
export default ForwardRef;
