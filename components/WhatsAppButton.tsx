"use client";

import Link from "next/link";

export default function WhatsAppButton() {
  const phoneNumber = "27710386606";

  const message = encodeURIComponent(
    "Hi qLEsh, I would like to enquire about your technology solutions."
  );

  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with qLEsh on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      {/* Hover label */}
      <span
        className="
          pointer-events-none
          translate-x-2
          rounded-lg
          border border-slate-200
          bg-white
          px-4
          py-2
          text-sm
          font-medium
          text-slate-800
          opacity-0
          shadow-lg
          transition-all
          duration-300
          group-hover:translate-x-0
          group-hover:opacity-100
        "
      >
        Chat with us
      </span>

      {/* WhatsApp Button */}
      <span
        className="
          relative
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-lg
          shadow-[#25D366]/30
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:shadow-xl
        "
      >
        {/* Pulse */}
        <span
          className="
            absolute
            inset-0
            rounded-full
            bg-[#25D366]
            opacity-30
            animate-ping
          "
        />

        {/* WhatsApp SVG */}
        <svg
          viewBox="0 0 32 32"
          className="relative z-10 h-7 w-7 fill-white"
          aria-hidden="true"
        >
          <path d="M19.11 17.42c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />

          <path d="M16.03 3.2a12.75 12.75 0 0 0-10.9 19.38L3.2 28.8l6.37-1.87a12.8 12.8 0 1 0 6.46-23.73zm0 23.34c-2.02 0-3.9-.6-5.48-1.63l-.39-.25-3.78 1.11 1.13-3.68-.26-.4a10.5 10.5 0 1 1 8.78 4.85z" />
        </svg>
      </span>
    </Link>
  );
}