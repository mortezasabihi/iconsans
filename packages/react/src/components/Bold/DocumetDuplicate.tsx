import { SVGProps, Ref, forwardRef } from "react";
const SvgDocumetDuplicate = (
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
      d="M15.46 8h3a.12.12 0 0 0 .08-.2l-4.09-4.13a.12.12 0 0 0-.2.09v3A1.21 1.21 0 0 0 15.46 8Z"
    />
    <path
      fill="currentColor"
      d="M14.63 9.5a1.88 1.88 0 0 1-1.88-1.88V3.5h-1.88a2.62 2.62 0 0 0-2.62 2.63v8.75a2.62 2.62 0 0 0 2.62 2.62h5.25a2.62 2.62 0 0 0 2.63-2.62V9.5h-4.12Z"
    />
    <path
      fill="currentColor"
      d="M15.43 19.13a2.62 2.62 0 0 1-2.31 1.38H7.87a2.63 2.63 0 0 1-2.62-2.63V9.13a2.59 2.59 0 0 1 1.37-2.29V16a3.09 3.09 0 0 0 3.1 3.09l5.71.04Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDocumetDuplicate);
export default ForwardRef;
