import { SVGProps, Ref, forwardRef } from "react";
const SvgLocationSlash = (
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
      d="m17.83 11.33-8.19 8.23a.21.21 0 0 0 0 .27 3 3 0 0 0 4.87-.14c3.06-4.45 3.6-7.16 3.68-8.21a.2.2 0 0 0-.36-.15Zm3.7-7.96a.75.75 0 0 0-1.06 0l-3.69 3.69A6.18 6.18 0 0 0 5.82 11s-.22 1.76 1.67 5.37l-5 5a.75.75 0 0 0 1.06 1.06l18-18a.75.75 0 0 0-.02-1.06Zm-10.94 9a2 2 0 1 1 3.19-2.32l-2.69 2.69a1.999 1.999 0 0 1-.5-.36v-.01Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLocationSlash);
export default ForwardRef;
