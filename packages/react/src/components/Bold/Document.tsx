import { SVGProps, Ref, forwardRef } from "react";
const SvgDocument = (
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
      fill="currentColor"
      d="M13.75 9.44h3.62L12.92 5a.1.1 0 0 0-.17.07v3.37a1 1 0 0 0 1 1Z"
    />
    <path
      fill="currentColor"
      d="M17.22 10.94H12.9a1.65 1.65 0 0 1-1.65-1.65V5a.2.2 0 0 0-.2-.21H9.29a2.71 2.71 0 0 0-2.71 2.69v9a2.71 2.71 0 0 0 2.71 2.72h5.42a2.71 2.71 0 0 0 2.71-2.72v-5.34a.21.21 0 0 0-.2-.2Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDocument);
export default ForwardRef;
