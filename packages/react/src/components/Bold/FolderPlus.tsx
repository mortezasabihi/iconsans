import { SVGProps, Ref, forwardRef } from "react";
const SvgFolderPlus = (
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
      d="M18 8.5h-3.17a2 2 0 0 1-1.42-.59l-1.82-1.82a2 2 0 0 0-1.42-.59H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2ZM14.25 14h-1.5v1.5a.75.75 0 1 1-1.5 0V14h-1.5a.75.75 0 1 1 0-1.5h1.5V11a.75.75 0 1 1 1.5 0v1.5h1.5a.75.75 0 1 1 0 1.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFolderPlus);
export default ForwardRef;
