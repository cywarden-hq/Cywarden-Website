import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import {
  footerAddresses,
  footerColumns,
  footerCopyright,
  footerLegal,
  footerLogo,
  footerTagline,
} from "@/config/footer";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/config/navigation";
import Section from "./ui/section";

const footerLinkClass =
  "body-text text-white/90 transition-opacity hover:opacity-100";

const columnHeadingClass =
  "font-heading body-text font-semibold tracking-wide text-white";

function LinkColumn({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-3">
      <h3 className={columnHeadingClass}>{title}</h3>
      <ul className="flex flex-col gap-1.5" role="list">
        {links.map((item) => (
          <li key={item.href + item.label}>
            <Link href={item.href} className={footerLinkClass}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <Section as="section" className="bg-black text-white" size="md">
      <Container>
        {/* Top: [ brand ] | [ link cols × 3 ] — both levels are flex */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between pb-10">
          <div className="flex min-w-0 flex-col gap-8">
            <Link
              href={footerLogo.href}
              className="inline-block w-fit shrink-0"
            >
              <Image
                src={footerLogo.src}
                alt={footerLogo.alt}
                width={footerLogo.width}
                height={footerLogo.height}
                className="h-9 w-auto"
              />
            </Link>

            <p className="body-text max-w-md text-white/85">{footerTagline}</p>

            <div className="flex flex-col gap-6">
              {footerAddresses.map((addr) => (
                <address key={addr.title} className="not-italic">
                  <p className={cn(columnHeadingClass, "mb-2")}>
                    {addr.title}
                  </p>
                  {addr.lines.map((line) => (
                    <p key={line} className="body-text text-white/85">
                      {line}
                    </p>
                  ))}
                </address>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <LinkColumn
                key={column.title}
                title={column.title}
                links={column.links}
              />
            ))}
          </div>
        </div>
      </Container>

      <Container className="border-t border-white/20">
        <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="body-sm text-white/70">
            © {new Date().getFullYear()} {footerCopyright.holder} All rights reserved.
          </p>

          <nav
            className="flex flex-wrap items-center gap-x-6 gap-y-2"
            aria-label="Legal"
          >
            {footerLegal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="body-sm text-white/85 transition-opacity hover:opacity-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </Section>
  );
}
