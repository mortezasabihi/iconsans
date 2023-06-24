import { SVGProps, Ref, forwardRef } from "react";
const SvgImageSlash = (
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
      d="m20.49 7.51-13 13a.3.3 0 0 0 .21.51H17a4 4 0 0 0 4-4v-9.3a.3.3 0 0 0-.51-.21Zm2.04-6.04a.75.75 0 0 0-1.06 0l-1.7 1.7A4.68 4.68 0 0 0 17 2.25H7A4.75 4.75 0 0 0 2.25 7v10a4.65 4.65 0 0 0 .92 2.77l-1.7 1.7a.75.75 0 0 0 1.06 1.06l20-20a.75.75 0 0 0 0-1.06ZM7 3.75h10c.602 0 1.191.17 1.7.49L10 13l-.05-.07a2.82 2.82 0 0 0-3.88 0l-2.32 2.26V7A3.26 3.26 0 0 1 7 3.75Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgImageSlash);
export default ForwardRef;
