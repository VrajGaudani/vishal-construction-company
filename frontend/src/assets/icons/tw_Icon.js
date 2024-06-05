export default function TWIcon({ isCustom }) {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.34 0.737752C2.0451 1.52592 2.8292 2.23965 3.68 2.86775C4.47421 3.39406 5.32651 3.82692 6.22 4.15775C6.93678 4.42019 7.67673 4.61438 8.43 4.73775L9.43 4.81775C9.1881 3.72992 9.40514 2.59049 10.03 1.66775C10.6818 0.781625 11.6545 0.185794 12.74 0.00775217C13.5549 -0.0390092 14.3681 0.126374 15.1 0.487752C16.02 1.02775 16.1 1.22775 16.1 1.22775C16.6447 1.12942 17.1753 0.96487 17.68 0.737752L18.54 0.277752C18.3888 0.796407 18.1182 1.27245 17.75 1.66775C17.26 2.11775 16.81 2.44775 16.81 2.44775C17.2547 2.44196 17.6949 2.35731 18.11 2.19775L19.11 1.83775C18.7832 2.31215 18.4078 2.75119 17.99 3.14775C17.51 3.52775 17.12 3.87775 17.12 3.87775C17.2406 5.92007 16.772 7.95404 15.77 9.73775C15.0179 11.1884 13.9355 12.4421 12.61 13.3978C11.3205 14.3383 9.8381 14.9804 8.27 15.2778C7.04955 15.5007 5.80309 15.5445 4.57 15.4078C3.5804 15.2572 2.61094 14.9956 1.68 14.6278C1.07093 14.4348 0.501778 14.1333 0 13.7378C1.14684 13.8956 2.31472 13.7826 3.41 13.4078C4.25342 13.0774 5.05281 12.6441 5.79 12.1178C5.2317 12.1128 4.68157 11.983 4.18 11.7378C3.55966 11.4447 3.03076 10.9884 2.65 10.4178C2.48798 10.1737 2.34745 9.91609 2.23 9.64775L2.16 9.39775C2.43127 9.46453 2.71137 9.48815 2.99 9.46775L3.91 9.32775C3.11136 9.17882 2.38394 8.77119 1.84 8.16775C1.25115 7.53154 0.898194 6.71269 0.84 5.84775V5.43775C1.14966 5.62399 1.48733 5.75906 1.84 5.83775C2.08057 5.90563 2.33017 5.93599 2.58 5.92775C1.81336 5.43637 1.24629 4.68855 0.98 3.81775C0.680972 2.78444 0.810735 1.67425 1.34 0.737752Z"
        fill={isCustom ? isCustom : "#687693"}
      />
    </svg>
  );
}