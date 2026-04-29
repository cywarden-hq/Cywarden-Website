"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cta, navigation, type NavItem } from "@/config/navigation";
import { cn } from "@/lib/utils";
import Container from "./ui/container";

const linkClass =
  "text-[15px] font-normal leading-[1.21] text-white transition-opacity hover:opacity-90";

function NavLinkItem({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(linkClass, active && "opacity-100 underline decoration-white/40 underline-offset-4")}
    >
      {label}
    </Link>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <ChevronDown
      className={cn("size-6 shrink-0 text-white/70", className)}
      strokeWidth={1.5}
      aria-hidden
    />
  );
}

function DesktopDropdown({
  item,
  pathname,
}: {
  item: Extract<NavItem, { type: "dropdown" }>;
  pathname: string;
}) {
  return (
    <div className="group relative hidden md:block">
      <button
        type="button"
        className={cn(
          "flex cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0",
          linkClass,
        )}
        aria-haspopup="menu"
      >
        {item.label}
        <ChevronIcon />
      </button>
      <div
        className={cn(
          "invisible absolute left-0 top-full z-50 min-w-[240px] pt-3 opacity-0 transition-all duration-150",
          "group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100"
        )}
        role="menu"
      >
        <div className="rounded-xl border border-white/10 bg-neutral-950/95 py-2 shadow-xl backdrop-blur-md">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className={cn(
                "block px-4 py-2 text-[15px] text-white/90 hover:bg-white/5",
                pathname === child.href && "bg-white/5",
              )}
              role="menuitem"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function DesktopMegaMenu({
  item,
  pathname,
}: {
  item: Extract<NavItem, { type: "mega" }>;
  pathname: string;
}) {
  const singleGroup = item.groups.length === 1 ? item.groups[0] : null;
  const compactMega =
    singleGroup !== null && singleGroup.items.length <= 5;

  return (
    <div className="group relative hidden md:block">
      <button
        type="button"
        className={cn(
          "flex cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0",
          linkClass,
        )}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronIcon />
      </button>
      <div
        className={cn(
          "invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150",
          compactMega
            ? "w-max min-w-[13rem] max-w-[min(92vw,20rem)]"
            : "w-[min(90vw,720px)]",
          "group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100",
        )}
      >
        <div
          className={cn(
            "rounded-2xl border border-white/10 bg-neutral-950/95 shadow-xl backdrop-blur-md",
            compactMega ? "p-5" : "p-8",
          )}
        >
          <div
            className={cn(
              "grid gap-8",
              item.groups.length > 1 ? "sm:grid-cols-2" : "grid-cols-1",
            )}
          >
            {item.groups.map((group) => (
              <div key={group.label}>
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-white/50 border-b border-white/10 pb-4">
                  {group.label}
                </p>
                <ul className="space-y-1">
                  {group.items.map((sub) => (
                    <li key={sub.href}>
                      <Link
                        href={sub.href}
                        className={cn(
                          "block rounded-lg px-2 py-1.5 text-[15px] text-white/90 transition-colors hover:bg-white/5",
                          pathname === sub.href && "bg-white/5",
                        )}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileAccordion({
  item,
  pathname,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  switch (item.type) {
    case "link":
      return (
        <Link
          href={item.href}
          onClick={onNavigate}
          className={cn(
            "block border-b border-white/10 py-3 text-[15px] text-white",
            pathname === item.href && "text-white",
          )}
        >
          {item.label}
        </Link>
      );
    case "dropdown":
      return (
        <div className="border-b border-white/10">
          <button
            type="button"
            className="flex w-full items-center justify-between py-3 text-left text-[15px] text-white"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
          >
            {item.label}
            <ChevronIcon className={cn("transition-transform", open && "rotate-180")} />
          </button>
          {open ? (
            <div className="space-y-1 pb-3 pl-2">
              {item.href ? (
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  className="block py-2 text-[15px] text-white/80"
                >
                  Overview
                </Link>
              ) : null}
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onNavigate}
                  className="block py-2 text-[15px] text-white/90"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      );
    case "mega":
      return (
        <div className="border-b border-white/10">
          <button
            type="button"
            className="flex w-full items-center justify-between py-3 text-left text-[15px] text-white"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
          >
            {item.label}
            <ChevronIcon className={cn("transition-transform", open && "rotate-180")} />
          </button>
          {open ? (
            <div className="pb-3 pl-2">
              {item.groups.map((group) => (
                <div key={group.label} className="mb-4 last:mb-0">
                  <p className="mb-2 text-xs uppercase tracking-wider text-white/50">{group.label}</p>
                  <ul className="space-y-1">
                    {group.items.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          onClick={onNavigate}
                          className="block rounded-md py-2 text-[15px] text-white/90"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      );
    default: {
      const _exhaust: never = item;
      return _exhaust;
    }
  }
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent scrolling when the mobile menu is open
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  return (
    <Container as="div" className="relative">
      <nav
        className={cn(
          "flex min-h-[67px] w-full items-center justify-between gap-3 rounded-full px-3",
          "bg-black-1 backdrop-blur-sm border border-white/25 shadow-lg shadow-black/20",
        )}
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 outline-offset-4"
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src="/images/cywarden-logo-white.png"
            alt="Cywarden"
            width={188}
            height={38}
            className="block h-[38px] w-[188px] object-contain"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => {
            switch (item.type) {
              case "link":
                return (
                  <NavLinkItem
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    active={pathname === item.href}
                  />
                );
              case "dropdown":
                return <DesktopDropdown key={item.label} item={item} pathname={pathname} />;
              case "mega":
                return <DesktopMegaMenu key={item.label} item={item} pathname={pathname} />;
              default: {
                const _exhaust: never = item;
                return _exhaust;
              }
            }
          })}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href={cta.href}
            className={cn(
              "rounded-full px-5 py-2.5 text-[15px] font-medium text-white shadow-sm transition",
              "bg-[#F9680E] shadow-[0_4px_4px_rgba(0,0,0,0.25),inset_0_4px_18.5px_rgba(0,0,0,0.25),inset_0_-5px_42px_rgba(0,0,0,0.25)]",
              "hover:brightness-110",
            )}
          >
            {cta.label}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-white lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X className="size-6" strokeWidth={1.5} /> : <Menu className="size-6" strokeWidth={1.5} />}
          <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
        </button>
      </nav>

      {mobileOpen ? (
        <div className="fixed inset-0 z-[100] lg:hidden" id="mobile-nav">
          <button
            type="button"
            className="absolute inset-0 bg-black/60"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-neutral-950 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
              <span className="text-lg font-semibold text-white">Menu</span>
              <button
                type="button"
                className="rounded-lg p-2 text-white"
                onClick={() => setMobileOpen(false)}
              >
                <X className="size-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-4 pb-8 pt-2">
              {navigation.map((item) => (
                <MobileAccordion
                  key={item.type === "link" ? item.href : item.label}
                  item={item}
                  pathname={pathname}
                  onNavigate={() => setMobileOpen(false)}
                />
              ))}
              <Link
                href={cta.href}
                onClick={() => setMobileOpen(false)}
                className="mt-6 block w-full rounded-full bg-gradient-to-r from-orange-500 to-orange-700 py-3 text-center text-[15px] font-medium text-white shadow-sm"
              >
                {cta.label}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </Container>
  );
}
