import { SVGProps, Ref, forwardRef } from "react";
const SvgActivityCircle2 = (
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
    <path fill="currentColor" d="M18.49 7.51a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path
      fill="currentColor"
      d="M19.82 8A2.82 2.82 0 0 1 16 4.19a.21.21 0 0 0-.08-.29 9 9 0 1 0 4.18 4.18.2.2 0 0 0-.28-.08Zm-2.23 2.32-2.2 2.83a2.16 2.16 0 0 1-1.72.84 2.14 2.14 0 0 1-1.67-.84l-1.08-1.39a.7.7 0 0 0-.54-.26.68.68 0 0 0-.53.26L7.59 14.6a.75.75 0 0 1-.59.29.75.75 0 0 1-.59-1.21l2.2-2.84a2.19 2.19 0 0 1 2.678-.62c.298.146.559.358.762.62l1.08 1.39a.67.67 0 0 0 .54.26.65.65 0 0 0 .53-.26l2.21-2.84a.751.751 0 0 1 1.18.93Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgActivityCircle2);
export default ForwardRef;
