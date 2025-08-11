"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteNav() {
  const pathname = usePathname();
  const links = [
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/work-with-me", label: "Work With Me" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <div className="flex items-center gap-3">
          <Link href="/" className="text-base font-semibold tracking-tight">
            Emma
          </Link>
        </div>
        <ul className="flex items-center gap-6 text-sm">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={
                    (isActive
                      ? "text-neutral-900 font-semibold border-b-2 border-neutral-900"
                      : "text-neutral-700 hover:text-neutral-900") +
                    " rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-2 pb-0.5"
                  }
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
