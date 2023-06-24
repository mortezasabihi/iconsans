import { SVGProps, Ref, forwardRef } from "react";
const SvgMicrophoneSlash = (
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
      d="M10 13.37a3.51 3.51 0 0 1-1.5-2.87v-5a3.5 3.5 0 1 1 7 0v3M8 15.62a6.49 6.49 0 0 1-2.5-5.12m13 0A6.5 6.5 0 0 1 12 17a6.69 6.69 0 0 1-1.5-.17M12 17v5M11 5h2m-2 3h2m9-6L2 22"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMicrophoneSlash);
export default ForwardRef;
