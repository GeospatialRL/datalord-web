import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-8 py-10 sm:px-12 lg:grid-cols-[1.2fr_0.7fr_1fr_1.2fr] lg:gap-16 lg:px-[53px] lg:py-10">
        <div>
          <Image
            src="/images/logo.svg"
            alt="Datalord Technologies"
            width={198}
            height={74}
            className="h-auto w-[198px]"
          />
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="mt-6 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-xl font-bold transition-colors hover:bg-white/20"
          >
            in
          </a>
        </div>

        <FooterColumn title="Quick Links">
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/about">About Us</FooterLink>
          <FooterLink href="/services">Services</FooterLink>
          <FooterLink href="/projects">Projects</FooterLink>
        </FooterColumn>

        <FooterColumn title="Our Services">
          <FooterLink href="/services">Software Development</FooterLink>
          <FooterLink href="/services">Portal Management</FooterLink>
          <FooterLink href="/services">Scanning Bereau Services</FooterLink>
          <FooterLink href="/services">Electronic Document Management System</FooterLink>
          <FooterLink href="/services">Geographical information System &amp; Remote Sensing Consultancy</FooterLink>
        </FooterColumn>

        <FooterColumn title="Contact Us">
          <p>2, Wemi Akinola Close, Allen Avenue Ikeja Lagos, Nigeria.</p>
          <p>(+234) 903-6065-544</p>
          <p>(+234) 901-2925-909</p>
          <a className="transition-opacity hover:opacity-75" href="mailto:info@datalordtech.com">
            info@datalordtech.com
          </a>
        </FooterColumn>
      </div>

      <div className="border-t border-white/40">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-8 py-6 text-sm sm:px-12 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>Copyright © 2026 DataLordTech. All rights reserved</p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Legal">
            <Link className="transition-opacity hover:opacity-75" href="/privacy-policy">Privacy Policy</Link>
            <Link className="transition-opacity hover:opacity-75" href="/terms-of-service">Terms of Service</Link>
            <Link className="transition-opacity hover:opacity-75" href="/cookie-policy">Cookie Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="text-[16px] leading-6">
      <h2 className="mb-4 text-[18px] font-semibold">{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link className="block transition-opacity hover:opacity-75" href={href}>
      {children}
    </Link>
  );
}
