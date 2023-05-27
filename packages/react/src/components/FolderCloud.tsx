import { SVGProps, Ref, forwardRef } from "react";
const SvgFolderCloud = (
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
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M11 18.5H6a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h4.17a2 2 0 0 1 1.42.59l1.82 1.82a2 2 0 0 0 1.42.59H18a2 2 0 0 1 2 2v3" />
      <path d="M18.91 16.32h-.57c.005-.09.005-.18 0-.27a1.64 1.64 0 1 0-3.27 0c-.01.09-.01.18 0 .27a1.09 1.09 0 1 0 0 2.18h3.82a1.09 1.09 0 1 0 0-2.18h.02Z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgFolderCloud);
export default ForwardRef;
