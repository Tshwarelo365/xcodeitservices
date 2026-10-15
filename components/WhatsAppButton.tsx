"use client";

import Link from "next/link";

export default function WhatsAppButton() {
  const phoneNumber = "27710386606";

  const message = encodeURIComponent(
    "Hi Xcode, I would like to enquire about your technology solutions."
  );

  return (
    <Link
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Xcode on WhatsApp"
        className="group fixed bottom-6 right-6 z-50 flex items-center gap-3"
      >
        {/* Hover label */}
        <span
          className="
            pointer-events-none
            translate-x-4
            rounded-lg
            border border-slate-200
            bg-white
            px-4
            py-2
            text-sm
            font-medium
            text-slate-800
            opacity-0
            shadow-md
            transition-all
            duration-200
            ease-out
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
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#25D366]
            text-white
            shadow-lg
            shadow-[#25D366]/40
            ring-4
            ring-white
            transition-transform
            duration-200
            ease-out
            hover:scale-105
            active:scale-95
          "
        >
          {/* Single subtle pulse ring, not a constant animation */}
          <span
            className="
              absolute
              inset-0
              -z-10
              rounded-full
              bg-[#25D366]
              opacity-40
              animate-[ping_2.5s_ease-out_infinite]
            "
          />

          {/* Official WhatsApp glyph */}
          <svg
            viewBox="0 0 32 32"
            className="h-8 w-8 fill-white"
            aria-hidden="true"
          >
            <path d="M16.03 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.6 4.39 1.63 6.23L3.2 28.8l6.77-1.78a12.75 12.75 0 0 0 6.06 1.54h.01c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.81-12.8zm0 23.34h-.01a10.5 10.5 0 0 1-5.34-1.46l-.38-.23-3.98 1.05 1.06-3.87-.25-.4a10.48 10.48 0 0 1-1.6-5.58c0-5.8 4.7-10.5 10.5-10.5s10.51 4.71 10.51 10.51-4.71 10.5-10.51 10.5z" />
            <path d="M22.03 19.05c-.33-.16-1.94-.96-2.24-1.07-.3-.11-.52-.16-.74.16-.22.33-.85 1.07-1.04 1.29-.19.22-.38.24-.71.08-.33-.16-1.38-.51-2.63-1.62-.97-.87-1.63-1.94-1.82-2.27-.19-.33-.02-.5.14-.66.15-.15.33-.38.5-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.79-1.02-2.45-.27-.65-.54-.56-.74-.57l-.63-.01c-.22 0-.57.08-.87.41-.3.33-1.14 1.11-1.14 2.71s1.17 3.15 1.33 3.37c.16.22 2.29 3.5 5.55 4.9.78.34 1.38.54 1.86.69.78.25 1.49.21 2.05.13.63-.09 1.94-.79 2.21-1.56.27-.76.27-1.42.19-1.56-.08-.13-.3-.21-.63-.38z" />
          </svg>
        </span>
      </Link>
  );
}