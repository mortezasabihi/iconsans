import { SVGProps, Ref, forwardRef } from "react";
const SvgTicketPercent = (
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
      d="M19 10h1.6a.4.4 0 0 0 .4-.4V8a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v1.6a.4.4 0 0 0 .4.4H5a2 2 0 0 1 1.878 1.3 2 2 0 0 1 .122.85A2.05 2.05 0 0 1 4.91 14H3.4a.4.4 0 0 0-.4.4V16a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-1.6a.4.4 0 0 0-.4-.4H19a2 2 0 0 1 0-4Zm-9-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0 7.75a.74.74 0 0 1-.42-.13.75.75 0 0 1-.2-1l4-6a.75.75 0 1 1 1.24.83l-4 6a.74.74 0 0 1-.62.3Zm4 .25a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTicketPercent);
export default ForwardRef;
