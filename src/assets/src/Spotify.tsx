import * as React from "react";
import type { SVGProps } from "react";
const SvgSpotify = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Spotify"
    viewBox="0 0 512 512"
    {...props}
  >
    <rect width={512} height={512} fill="#3bd75f" rx="15%" />
    <circle cx={256} cy={256} r={192} fill="#fff" />
    <g fill="none" stroke="#3bd75f" strokeLinecap="round">
      <path strokeWidth={36} d="M141 195c75-20 164-15 238 24" />
      <path strokeWidth={31} d="M152 257c61-17 144-13 203 24" />
      <path strokeWidth={24} d="M156 315c54-12 116-17 178 20" />
    </g>
  </svg>
);
export default SvgSpotify;
