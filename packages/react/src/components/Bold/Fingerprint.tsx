import { SVGProps, Ref, forwardRef } from "react";
const SvgFingerprint = (
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
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-4.66 8.39a.62.62 0 0 0 .66-.62 4.51 4.51 0 0 1 .28-1.59.6.6 0 0 1 .72-.36.59.59 0 0 1 .35.77c-.132.38-.2.778-.2 1.18a1.83 1.83 0 0 1-1.82 1.82.6.6 0 1 1 0-1.2h.01Zm.66 5.2a.6.6 0 0 1-.6-.52.61.61 0 0 1 .6-.68 4.66 4.66 0 0 0 4-4.62.6.6 0 0 1 1.2 0 5.87 5.87 0 0 1-5.1 5.81l-.1.01Zm5.06-.42A8.18 8.18 0 0 1 11 17.79a.71.71 0 0 1-.28.06.57.57 0 0 1-.53-.32.6.6 0 0 1 .25-.81 6.75 6.75 0 0 0 1.82-1.37.58.58 0 0 1 1 .412.59.59 0 0 1-.17.408h-.03Zm-.48-6.82a1.43 1.43 0 0 0-1.43 1.42 3.84 3.84 0 0 1-3.84 3.84.6.6 0 1 1 0-1.2A2.64 2.64 0 0 0 10 10.77a2.63 2.63 0 0 1 5.25 0 7.89 7.89 0 0 1-.79 3.45.61.61 0 0 1-.996.14.591.591 0 0 1-.084-.66 6.59 6.59 0 0 0 .62-2.93 1.43 1.43 0 0 0-1.39-1.42h-.03Zm1.82 8.35a.6.6 0 0 1-1.027-.415.6.6 0 0 1 .177-.425 8.64 8.64 0 0 0 2.49-6.09 3.45 3.45 0 0 0-5.62-2.67.6.6 0 0 1-.85-.1.59.59 0 0 1 .09-.84 4.65 4.65 0 0 1 7.6 3.59 9.86 9.86 0 0 1-2.83 6.95h-.03Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFingerprint);
export default ForwardRef;
