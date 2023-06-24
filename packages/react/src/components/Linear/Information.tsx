import { SVGProps, Ref, forwardRef } from "react";
const SvgInformation = (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <path d="m3.35 13.06 1.78 1.78v2.53a1.5 1.5 0 0 0 1.5 1.5h2.53l1.78 1.78a1.49 1.49 0 0 0 2.12 0l1.78-1.78h2.53a1.5 1.5 0 0 0 1.5-1.5v-2.53l1.78-1.78a1.49 1.49 0 0 0 0-2.12l-1.78-1.78V6.63a1.5 1.5 0 0 0-1.5-1.5h-2.53l-1.78-1.78a1.49 1.49 0 0 0-2.12 0L9.16 5.13H6.63a1.5 1.5 0 0 0-1.5 1.5v2.53l-1.78 1.78a1.49 1.49 0 0 0 0 2.12Z" />
      <path strokeLinecap="round" d="M12.001 16.5v-6.3m0-2.7H12" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgInformation);
export default ForwardRef;
