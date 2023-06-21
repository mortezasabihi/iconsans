import { SVGProps, Ref, forwardRef } from "react";
const SvgMessageNew2 = (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.17 9.25a7.641 7.641 0 0 1 .22 3.7 7.52 7.52 0 0 1-9.58 5.76.94.94 0 0 0-.64 0L6.67 20a.44.44 0 0 1-.62-.51l.53-2.14a.92.92 0 0 0-.21-.81A7.51 7.51 0 0 1 10.79 4.1a7.41 7.41 0 0 1 1.62-.1"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 11.49v.01m3-.01v.01m3-.01v.01"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMessageNew2);
export default ForwardRef;
