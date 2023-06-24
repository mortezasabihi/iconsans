import { SVGProps, Ref, forwardRef } from "react";
const SvgTicketStar = (
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
      d="M3 10V8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v2h-2a2 2 0 0 0 0 4h2v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2h2a2 2 0 1 0 0-4H3Z"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m12.43 9.82.42.84a.469.469 0 0 0 .36.26l.92.14a.48.48 0 0 1 .27.82l-.66.65a.48.48 0 0 0-.14.43l.15.92a.48.48 0 0 1-.7.51l-.82-.39a.47.47 0 0 0-.46 0l-.82.43a.48.48 0 0 1-.7-.51l.15-.92a.48.48 0 0 0-.14-.43l-.66-.65a.48.48 0 0 1 .27-.82l.92-.14a.47.47 0 0 0 .36-.26l.42-.84a.48.48 0 0 1 .86-.04Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTicketStar);
export default ForwardRef;
