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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 16.5v-9a2 2 0 0 1 2-2h4.17a2 2 0 0 1 1.42.59l1.82 1.82a2 2 0 0 0 1.42.59H18a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm5.75-3.25h4.5M12 11v4.5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFolderPlus);
export default ForwardRef;
