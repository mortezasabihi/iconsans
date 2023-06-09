import { SVGProps, Ref, forwardRef } from "react";
const SvgVolumeSlash = (
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
      d="M16.49 11.51 10 18h.39a2 2 0 0 1 1.11.34l3.17 2.11A1.5 1.5 0 0 0 17 19.2v-7.48a.3.3 0 0 0-.51-.21Zm6.04-10.04a.75.75 0 0 0-1.06 0L17 5.94V4.8a1.5 1.5 0 0 0-2.33-1.25L11.5 5.66a2 2 0 0 1-1.11.34H8.5A1.5 1.5 0 0 0 7 7.5v8.44l-5.53 5.53a.75.75 0 0 0 1.06 1.06l20-20a.75.75 0 0 0 0-1.06Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgVolumeSlash);
export default ForwardRef;
