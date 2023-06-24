import { SVGProps, Ref, forwardRef } from "react";
const SvgReceipt = (
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
      d="M18.25 3.77H6a3 3 0 0 0-3 3v13.16a.3.3 0 0 0 .53.19l1.94-2.39a1 1 0 0 1 1.56 0l1.69 2.09a1 1 0 0 0 1.56 0L12 17.73a1 1 0 0 1 1.56 0l1.94 2.39a.3.3 0 0 0 .53-.19V11.5h2.25A2.75 2.75 0 0 0 21 8.75V6.52a2.75 2.75 0 0 0-2.75-2.75ZM12 14.75H7a.75.75 0 1 1 0-1.5h5a.75.75 0 1 1 0 1.5Zm0-3H7a.75.75 0 1 1 0-1.5h5a.75.75 0 1 1 0 1.5Zm0-3H7a.75.75 0 0 1 0-1.5h5a.75.75 0 1 1 0 1.5Zm7.5 0A1.25 1.25 0 0 1 18.25 10H16V5.27h2.25a1.25 1.25 0 0 1 1.25 1.25v2.23Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgReceipt);
export default ForwardRef;
