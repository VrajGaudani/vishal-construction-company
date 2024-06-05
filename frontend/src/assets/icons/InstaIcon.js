export default function InstaIcon({ isCustom }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.84 7.05C8.2936 7.05 7.04 8.3036 7.04 9.85C7.04 11.3964 8.2936 12.65 9.84 12.65C11.3864 12.65 12.64 11.3964 12.64 9.85C12.6427 9.10658 12.3485 8.39284 11.8228 7.86715C11.2972 7.34147 10.5834 7.04733 9.84 7.05Z"
        fill={isCustom ? isCustom : "#687693"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.69 0H6C2.68629 0 0 2.68629 0 6V13.69C0 17.0037 2.68629 19.69 6 19.69H13.69C17.0037 19.69 19.69 17.0037 19.69 13.69V6C19.69 2.68629 17.0037 0 13.69 0ZM9.84 14.14C7.47298 14.1345 5.5555 12.217 5.55 9.85C5.54596 8.109 6.59213 6.53737 8.19984 5.86924C9.80754 5.20112 11.6595 5.56838 12.8905 6.79945C14.1216 8.03053 14.4889 9.88246 13.8208 11.4902C13.1526 13.0979 11.581 14.144 9.84 14.14ZM13.5749 4.91176C13.7462 5.31997 14.1473 5.58404 14.59 5.58C15.1865 5.58 15.67 5.09647 15.67 4.5C15.674 4.05734 15.41 3.6562 15.0018 3.48493C14.5936 3.31366 14.1223 3.40628 13.8093 3.7193C13.4963 4.03232 13.4037 4.50356 13.5749 4.91176Z"
        fill={isCustom ? isCustom : "#687693"}
      />
    </svg>
  );
}
