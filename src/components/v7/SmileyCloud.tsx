/* Cloud with smiley face — Pure PM signature illustration */
export default function SmileyCloud({ className = "", size = 80 }: { className?: string; size?: number }) {
  return (
    <svg className={className} width={size} height={size * 0.7} viewBox="0 0 120 84" fill="none">
      {/* Cloud body */}
      <path d="M100 60H20c-8.284 0-15-6.716-15-15 0-7.18 5.04-13.178 11.773-14.67C18.578 19.79 28.186 12 39.5 12c9.07 0 17.02 4.86 21.37 12.12C63.52 22.1 66.87 21 70.5 21c9.665 0 17.5 7.835 17.5 17.5 0 .85-.06 1.69-.18 2.51C95.87 42.67 102 49.84 102 58.5c0 .5-.028 1.003-.08 1.5H100Z" fill="#049DD9" fillOpacity="0.15" stroke="#049DD9" strokeOpacity="0.3" strokeWidth="1.5" />
      {/* Eyes */}
      <circle cx="45" cy="40" r="3" fill="#049DD9" />
      <circle cx="65" cy="40" r="3" fill="#049DD9" />
      {/* Smile */}
      <path d="M48 48c0 0 4 5 12 5s12-5 12-5" stroke="#049DD9" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* String/line going down */}
      <line x1="55" y1="60" x2="55" y2="84" stroke="#049DD9" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="3 4" />
    </svg>
  );
}
