import * as React from "react";
import type { SVGProps } from "react";
const SvgWeather = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="weather_svg__icon"
    viewBox="0 0 1024 1024"
    {...props}
  >
    <path
      fill="#FFF"
      d="M729.6 626.56s-63.36-145.28-192.64-136.32c-1.28 0-152.96-4.48-179.84 189.44 0-1.28-161.28-15.36-172.16 106.24 1.28.64-12.8 156.8 190.72 143.36l445.44.768s179.84-75.264 106.88-220.16-198.4-83.328-198.4-83.328"
    />
    <path
      fill="#FFBC00"
      d="M739.968 413.184c0 47.872-9.856 93.568-27.648 134.912-6.144 14.336-13.312 28.16-21.248 41.472-29.184-49.28-82.944-82.432-144.128-82.432-90.368 0-164.096 71.936-167.296 161.408-.128 2.048-.128 3.968-.128 6.016v.512c0 2.048 0 4.096.128 6.144.64 14.592-13.952 25.088-27.52 20.224-1.792-.64-3.328-1.28-5.12-1.792h-.256c-.512-.256-1.024-.256-1.664-.512s-1.28-.256-1.792-.512c-1.28-.256-2.304-.64-3.584-.896-7.168-1.664-14.592-2.56-22.144-2.816-26.88-.512-51.712 8.832-71.04 24.704a335 335 0 0 1-37.248-21.504c-92.288-61.056-153.088-165.76-153.088-284.928 0-188.8 153.088-341.76 341.888-341.76s341.888 152.96 341.888 341.76m0 0"
    />
    <path
      fill="#6D6D6D"
      d="M787.712 598.528c-15.488.128-30.464 2.176-44.672 5.888-13.184 3.456-25.856 8.448-37.632 14.848-.256.128-.256.384-.256.64.256.768.512 1.664.768 2.432.256.512.256 1.024.512 1.536.256.768.512 1.792.768 2.56 4.864 16.128 22.016 25.344 38.144 19.968.64-.256 1.28-.384 1.792-.64 1.024-.256 2.048-.64 2.944-.896 1.024-.256 1.92-.64 2.944-.768a141 141 0 0 1 28.672-4.48c81.664-3.968 149.12 65.152 142.976 146.688-4.864 63.744-53.504 115.328-115.712 124.672-6.656 1.024-13.568 1.536-20.48 1.536H676.608c-.512 0-.768.64-.256.896 29.44 24.064 66.688 38.784 107.264 39.936 1.664.128 3.328.128 4.864.128 6.912 0 13.696-.384 20.48-1.152 88.576-10.24 157.44-85.888 157.056-177.28-.384-97.536-80.64-176.896-178.304-176.512M335.872 912.64h-20.48c-6.912 0-13.824-.64-20.48-1.92-51.072-9.856-89.6-55.424-88.32-109.696.768-32.768 16.256-61.824 39.936-81.152 19.328-15.872 44.288-25.216 71.04-24.704 7.552.256 14.976 1.152 22.144 2.816 1.28.256 2.304.64 3.584.896.64.128 1.28.256 1.792.512.512.128 1.024.256 1.664.512h.256c16.256 4.992 32.64-7.424 32.512-24.576v-.512c0-2.048 0-4.096.128-6.016-12.544-6.016-26.112-10.24-40.192-12.544-7.808-1.28-15.744-1.92-23.936-1.92-41.344 0-78.976 16.896-106.112 44.16-26.88 27.136-43.648 64.384-43.648 105.6 0 75.52 56.32 138.368 129.28 148.224 5.248.768 10.496 1.152 15.744 1.28h.256c1.408.128 2.944.128 4.352.128 1.536 0 3.072 0 4.608-.128 37.888-1.152 72.448-16.512 98.176-40.832h-82.304zm0 0"
    />
    <path
      fill="#6D6D6D"
      d="M743.04 604.416c-7.424-20.352-17.664-39.296-30.72-56.192-38.144-49.792-98.048-81.92-165.504-81.92-108.672 0-198.144 83.584-207.616 189.696a226 226 0 0 0-.768 18.688c0 7.808.384 15.616 1.28 23.168 1.28.256 2.304.64 3.584.896.64.128 1.28.256 1.792.512.512.128 1.024.256 1.664.512h.256c1.792.512 3.328 1.152 5.12 1.792 13.696 4.864 28.16-5.632 27.52-20.224-.128-2.048-.128-4.096-.128-6.144v-.512c0-2.048 0-4.096.128-6.016 3.2-89.472 77.056-161.408 167.296-161.408 61.312 0 114.944 33.024 144.128 82.432 5.504 9.472 10.24 19.328 13.952 29.824 0 .128.128.256.128.384.256.768.512 1.664.768 2.432.256.512.256 1.024.512 1.536.128.256.256.512.256.768 5.376 17.024 23.424 26.752 40.448 21.248 1.024-.256 2.048-.64 2.944-.896 1.024-.256 1.92-.64 2.944-.768-2.048-13.824-5.376-27.136-9.984-39.808m45.44 308.224c-6.912 0-13.824 1.024-20.48 0H335.872c-2.304.384-4.352.512-6.656.512-4.48 0-9.088-.512-13.824-.512-6.912 0-13.824-.64-20.48-1.92l15.744 42.752h478.72l19.712-42.368a137 137 0 0 1-20.608 1.536m0 0"
    />
  </svg>
);
export default SvgWeather;