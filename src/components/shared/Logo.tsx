import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 240 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-9 w-auto text-gray-900 dark:text-white ${props.className || ""}`}
      {...props}
    >
      {/* Icon Group */}
      <g className="text-gray-900 dark:text-white">
        {/* Diamond outline */}
        <rect
          x="12"
          y="12"
          width="44"
          height="44"
          rx="10"
          transform="rotate(45 34 34)"
          stroke="currentColor"
          strokeWidth="3.5"
          fill="none"
        />
        {/* Filled Diamond inside */}
        <rect
          x="17"
          y="17"
          width="34"
          height="34"
          rx="6"
          transform="rotate(45 34 34)"
          fill="currentColor"
        />
        {/* Phone body */}
        <rect
          x="26"
          y="21"
          width="16"
          height="26"
          rx="3.5"
          fill="white"
          className="dark:fill-gray-950"
        />
        {/* Notch/Speaker */}
        <rect
          x="31.5"
          y="23.5"
          width="5"
          height="1.2"
          rx="0.4"
          fill="currentColor"
        />
        {/* Home Button */}
        <circle
          cx="34"
          cy="42.5"
          r="1.6"
          fill="currentColor"
        />
      </g>

      {/* Text Group */}
      <g fill="currentColor" textAnchor="middle">
        <text
          x="154"
          y="35"
          className="font-sans font-black text-[21px] tracking-[-0.02em] fill-current"
        >
          THE GADGET
        </text>
        <text
          x="155"
          y="51"
          className="font-sans font-semibold text-[9.5px] tracking-[0.49em] fill-current opacity-90"
        >
          DISTRICT
        </text>
      </g>
    </svg>
  );
}
