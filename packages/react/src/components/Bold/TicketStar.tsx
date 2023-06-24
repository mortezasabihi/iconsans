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
      fill="currentColor"
      d="M19 10h1.6a.4.4 0 0 0 .4-.4V8a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v1.6a.4.4 0 0 0 .4.4H5a2 2 0 0 1 1.878 1.3 2 2 0 0 1 .122.85A2.05 2.05 0 0 1 4.91 14H3.4a.4.4 0 0 0-.4.4V16a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-1.6a.4.4 0 0 0-.4-.4H19a2 2 0 0 1 0-4Zm-4.6 1.88-.66.65a.46.46 0 0 0-.14.43l.15.92a.48.48 0 0 1-.7.51l-.82-.39a.47.47 0 0 0-.46 0l-.82.43a.481.481 0 0 1-.7-.51l.15-.92a.46.46 0 0 0-.14-.43l-.66-.65a.49.49 0 0 1 .27-.83l.92-.13a.47.47 0 0 0 .36-.26l.42-.84a.48.48 0 0 1 .86 0l.42.84a.469.469 0 0 0 .36.26l.92.13a.49.49 0 0 1 .27.79Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTicketStar);
export default ForwardRef;
