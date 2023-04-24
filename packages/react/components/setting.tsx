import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgSetting = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M19 10.25h-.75a.839.839 0 0 1-.59-1.43l.53-.53a1 1 0 0 0 0-1.42l-1.06-1.06a1 1 0 0 0-1.42 0l-.53.53a.84.84 0 0 1-1.43-.59V5a1 1 0 0 0-1-1h-1.5a1 1 0 0 0-1 1v.75a.839.839 0 0 1-1.43.59l-.53-.53a1 1 0 0 0-1.42 0L5.81 6.87a1 1 0 0 0 0 1.42l.53.53a.84.84 0 0 1-.59 1.43H5a1 1 0 0 0-1 1v1.5a1 1 0 0 0 1 1h.75a.839.839 0 0 1 .59 1.43l-.53.53a1 1 0 0 0 0 1.42l1.06 1.06a1 1 0 0 0 1.42 0l.53-.53a.84.84 0 0 1 1.43.59V19a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-.75a.839.839 0 0 1 1.43-.59l.53.53a1.002 1.002 0 0 0 1.42 0l1.06-1.06a1.002 1.002 0 0 0 0-1.42l-.53-.53a.84.84 0 0 1 .59-1.43H19a1 1 0 0 0 1-1v-1.5a1.001 1.001 0 0 0-1-1Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgSetting);
export default ForwardRef;
