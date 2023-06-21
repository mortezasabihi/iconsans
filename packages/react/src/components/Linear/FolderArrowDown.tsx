import { SVGProps, Ref, forwardRef } from "react";
const SvgFolderArrowDown = (
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
      d="M4 16.5v-9a2 2 0 0 1 2-2h4.17a2 2 0 0 1 1.42.59l1.82 1.82a2 2 0 0 0 1.42.59H18a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm8-.5v-5.24"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.57 14.43 12 16l-1.57-1.57"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFolderArrowDown);
export default ForwardRef;
