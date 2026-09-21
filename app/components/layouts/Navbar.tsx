"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Project" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="bg-white">
      <div className="mx-auto flex h-28.75 max-w-360 items-center justify-between px-6 sm:px-12 lg:px-15.75">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.svg"
            alt="Datalord Technologies"
            width={224}
            height={83}
            className="h-17.5 w-auto sm:h-20.75"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[16px] font-medium transition-colors ${
                  isActive ? "text-[#F43838]" : "text-black hover:text-[#F43838]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden h-10 items-center gap-2 rounded-lg bg-[#F43838] px-6 text-[15px] font-semibold text-white transition-colors hover:bg-[#dc2626] lg:inline-flex"
        >
          Request a Quoute
          <span aria-hidden>→</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
