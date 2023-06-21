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
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M18.75 9.11v5.76a2.63 2.63 0 0 1-2.63 2.63h-5.25a2.62 2.62 0 0 1-2.62-2.63V6.12a2.62 2.62 0 0 1 2.62-2.62h2.27a.86.86 0 0 1 .61.25l4.74 4.74a.87.87 0 0 1 .26.62Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.5 3.92v4a.87.87 0 0 0 .87.88h4a.18.18 0 0 0 .12-.3L13.8 3.8a.17.17 0 0 0-.3.12Zm2.19 10.95h-4.38m2.63-2.62h-2.63"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M15.75 17.49v.38a2.63 2.63 0 0 1-2.63 2.63H7.87a2.63 2.63 0 0 1-2.62-2.63V9.12A2.63 2.63 0 0 1 7.87 6.5h.38"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDocumentTextDuplicate);
export default ForwardRef;
