import { SVGProps, Ref, forwardRef } from "react";
const SvgDocumentText = (
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
      d="M13.22 10.76a2 2 0 0 1-2-2V4H9a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-6.24h-4.78Zm-3.72 2.5h3a.75.75 0 1 1 0 1.5h-3a.75.75 0 1 1 0-1.5Zm5 4.5h-5a.75.75 0 1 1 0-1.5h5a.75.75 0 1 1 0 1.5Z"
    />
    <path
      fill="currentColor"
      d="M13.92 9.26h3.82a.12.12 0 0 0 .08-.2L13 4.19a.12.12 0 0 0-.177.018.12.12 0 0 0-.023.062v3.82a1.17 1.17 0 0 0 1.12 1.17Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDocumentText);
export default ForwardRef;