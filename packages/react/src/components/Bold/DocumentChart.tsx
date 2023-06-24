import { SVGProps, Ref, forwardRef } from "react";
const SvgDocumentChart = (
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
      d="M14 9.22h3.82a.12.12 0 0 0 .08-.2L13 4.15a.12.12 0 0 0-.2.08v3.82A1.179 1.179 0 0 0 14 9.22Z"
    />
    <path
      fill="currentColor"
      d="M13.22 10.76a2 2 0 0 1-2-2V4H9a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-6.24h-4.78Zm-3 6.25a.75.75 0 1 1-1.5 0V13a.75.75 0 1 1 1.5 0v4.01Zm2.5 0a.75.75 0 1 1-1.5 0V14a.75.75 0 1 1 1.5 0v3.01Zm2.5 0a.75.75 0 1 1-1.5 0V15a.75.75 0 1 1 1.5 0v2.01Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDocumentChart);
export default ForwardRef;
