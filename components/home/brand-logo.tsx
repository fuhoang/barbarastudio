export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`inline-flex items-center ${compact ? "gap-2.5" : "gap-3.5"}`}>
      <span
        className={`inline-flex items-center justify-center rounded-full border border-[color:var(--line)] bg-white ${
          compact ? "h-8 w-8" : "h-10 w-10"
        }`}
      >
        <svg
          viewBox="0 0 64 64"
          className={compact ? "h-5 w-5" : "h-6 w-6"}
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M32 52c7-6 12-12 12-19 0-5-4-8-8-8-2 0-4 .8-5.5 2.3L32 29l-2.5-1.7C28 25.8 26 25 24 25c-4 0-8 3-8 8 0 7 5 13 16 19Z"
            fill="#f4d6de"
            stroke="#b67381"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M32 29c1.7-2.5 4.6-4 8-4 1.5 0 2.8.3 4 .9M32 29c-1.7-2.5-4.6-4-8-4-1.5 0-2.8.3-4 .9"
            stroke="#d798a5"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M32 29v23M32 44c-2.8-1.5-5.5-3.5-7.5-5.8M32 44c2.8-1.5 5.5-3.5 7.5-5.8"
            stroke="#b67381"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span
        className={`font-[family:var(--font-cormorant)] text-[color:var(--accent-deep)] ${
          compact
            ? "text-sm font-medium tracking-[0.14em]"
            : "text-[1.05rem] font-medium tracking-[0.16em]"
        }`}
      >
        Barbara Studio
      </span>
    </div>
  );
}
