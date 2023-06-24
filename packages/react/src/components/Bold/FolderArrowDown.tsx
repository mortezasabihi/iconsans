import { SVGProps, Ref, forwardRef } from "react";
const SvgFolderArrowDown = (
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
      d="M18 8.5h-3.17a2 2 0 0 1-1.42-.59l-1.82-1.82a2 2 0 0 0-1.42-.59H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2ZM14.1 15l-1.57 1.57a.779.779 0 0 1-.53.22.779.779 0 0 1-.53-.22L9.9 15a.778.778 0 0 1 1.1-1.1l.29.29v-3.43a.75.75 0 1 1 1.5 0v3.43l.21-.29a.779.779 0 0 1 1.1 1.1Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFolderArrowDown);
export default ForwardRef;
