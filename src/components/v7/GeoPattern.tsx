/* Pure PM signature geometric mosaic pattern — quarter circles, circles, abstract shapes */
export default function GeoPattern({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 480"
      fill="none"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      {/* Row 1 */}
      <path d="M160 0C160 88.366 88.366 160 0 160L0 0L160 0Z" fill="#0B2545" />
      <path d="M320 0C320 88.366 248.366 160 160 160L160 0L320 0Z" fill="#049DD9" />

      {/* Row 2 */}
      <circle cx="80" cy="240" r="80" fill="#049DD9" fillOpacity="0.3" />
      <path d="M320 160C320 248.366 248.366 320 160 320L160 160L320 160Z" fill="#0D5FA6" />

      {/* Row 3 */}
      <path d="M0 320C0 231.634 71.634 160 160 160L160 320L0 320Z" fill="white" />
      <rect x="160" y="320" width="160" height="160" rx="0" fill="#049DD9" fillOpacity="0.15" />

      {/* Row 4 */}
      <path d="M160 320C160 408.366 88.366 480 0 480L0 320L160 320Z" fill="#049DD9" />
      <path d="M320 480C320 391.634 248.366 320 160 320L160 480L320 480Z" fill="#0B2545" fillOpacity="0.6" />

      {/* Circle accent */}
      <circle cx="240" cy="240" r="30" fill="none" stroke="#049DD9" strokeWidth="4" />

      {/* Small filled circle */}
      <circle cx="80" cy="400" r="20" fill="white" fillOpacity="0.5" />
    </svg>
  );
}
