type CLogoProps = {
  size?: number | string
  color?: string
  className?: string
}

export default function CLogo({
  size = 24,
  className,
}: CLogoProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 128 128"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="#659AD2"
        d="M115.4 30.7 67.4 2.9a5 5 0 0 0-5 0L14.6 30.7a5.1 5.1 0 0 0-2.5 4.4v55.6c0 1.8 1 3.5 2.5 4.4l47.9 27.8a5 5 0 0 0 5 0l47.9-27.8a5.1 5.1 0 0 0 2.5-4.4V35.1c0-1.8-1-3.5-2.5-4.4Z"
      />
      <path
        fill="#03599C"
        d="m66.9 122.2 47.1-27.4a5.1 5.1 0 0 0 2.4-4.4V35.6c0-1.8-.9-3.5-2.4-4.4L66.9 3.8v118.4Z"
      />
      <path
        fill="#FFF"
        d="M66.9 96.5A33.5 33.5 0 1 1 95.3 45l-14.4 8.3a17.2 17.2 0 1 0 0 19.9l14.2 8.2a33.5 33.5 0 0 1-28.2 15.1Z"
      />
    </svg>
  )
}
