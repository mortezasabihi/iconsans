import { SVGProps, Ref, forwardRef } from "react";
const SvgSplash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M19.16 9.28a1.5 1.5 0 0 1 .27 2.36l-2.06 2a1.49 1.49 0 0 0-.43 1.36l.48 2.84a1.5 1.5 0 0 1-2.17 1.58l-2.55-1.36a1.51 1.51 0 0 0-1.4 0L8.75 19.4M20.78 3.22a.75.75 0 0 0-1.06 0l-4.91 4.91a1.723 1.723 0 0 1-.19-.28l-1.27-2.59a1.51 1.51 0 0 0-2.7 0L9.38 7.85a1.5 1.5 0 0 1-1.13.82l-2.85.41a1.5 1.5 0 0 0-.83 2.56l2.06 2A1.49 1.49 0 0 1 7.06 15l-.18 1.08-3.66 3.64a.75.75 0 0 0 1.06 1.06l16.5-16.5a.75.75 0 0 0 0-1.06Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSplash);
export default ForwardRef;
