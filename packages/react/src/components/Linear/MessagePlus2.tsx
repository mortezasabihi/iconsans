import { SVGProps, Ref, forwardRef } from "react";
const SvgMessagePlus2 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.69 9.25a7.51 7.51 0 0 1-9.36 9.46 1 1 0 0 0-.65 0L6.19 20a.44.44 0 0 1-.62-.51l.53-2.14a.92.92 0 0 0-.21-.81A7.51 7.51 0 0 1 10.31 4.1a7.41 7.41 0 0 1 1.62-.1M16 4v4m2-2h-4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.52 11.49v.01m3-.01v.01m3-.01v.01"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMessagePlus2);
export default ForwardRef;
