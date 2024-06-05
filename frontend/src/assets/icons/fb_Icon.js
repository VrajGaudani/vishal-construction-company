export default function FBIcon({isCustom}) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="social-icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.8208 9.91809C19.8205 14.9329 16.0705 19.1554 11.0908 19.7481V13.0481H12.8508C13.0975 13.0494 13.3051 12.8635 13.3308 12.6181L13.5208 11.1681C13.534 11.0304 13.4907 10.8932 13.4008 10.7881C13.3088 10.6793 13.1733 10.617 13.0308 10.6181H11.0908V8.91809C11.0908 8.3658 11.5385 7.91809 12.0908 7.91809H13.0908C13.2198 7.92078 13.3445 7.87139 13.4367 7.78108C13.5289 7.69077 13.5808 7.56714 13.5808 7.43809V5.82809C13.5776 5.57759 13.3895 5.36813 13.1408 5.33809C13.1408 5.33809 12.4208 5.27809 11.5608 5.27809C9.4208 5.27809 8.24081 6.54809 8.24081 8.85809V10.6181H6.24081C5.97019 10.6181 5.75081 10.8375 5.75081 11.1081V12.5581C5.75081 12.8287 5.97019 13.0481 6.24081 13.0481H8.18081V19.6681C3.01228 18.7517 -0.545176 13.9641 0.0688421 8.75104C0.68286 3.53794 5.25533 -0.292093 10.4953 0.0175137C15.7353 0.327121 19.825 4.66896 19.8208 9.91809Z"
        fill={isCustom?isCustom:"#687693"}
      />
    </svg>
  );
}