import { SVGProps, Ref, forwardRef } from "react";
const SvgDocumentTextDuplicate = (
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
        d="M19 9v5.95a2.71 2.71 0 0 1-2.71 2.71h-5.42a2.71 2.71 0 0 1-2.71-2.71v-9a2.71 2.71 0 0 1 2.71-2.71h2.34a.91.91 0 0 1 .64.27l4.89 4.89A.94.94 0 0 1 19 9Z"
      />
      <path
        strokeLinejoin="round"
        d="M13.58 3.63v4.08a.9.9 0 0 0 .9.9h4.08a.18.18 0 0 0 .13-.31l-4.8-4.8a.18.18 0 0 0-.31.13Zm2.71 11.31h-5.42m5.42-2.71h-2.71"
      />
      <path
        strokeMiterlimit={10}
        d="M15.84 17.65v.45a2.71 2.71 0 0 1-2.71 2.71H7.71A2.71 2.71 0 0 1 5 18.1v-9a2.71 2.71 0 0 1 2.71-2.75h.45"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgDocumentTextDuplicate);
export default ForwardRef;
