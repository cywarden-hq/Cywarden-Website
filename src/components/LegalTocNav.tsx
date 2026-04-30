"use client";

import { type ReactNode, useEffect, useRef } from "react";

export type LegalTocNavProps = {
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
};

function scrollIdIntoView(id: string, behavior: ScrollBehavior) {
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior, block: "center", inline: "nearest" });
  return true;
}

function scrollHashIntoView(hash: string, behavior: ScrollBehavior) {
  if (!hash || hash === "#") return false;
  const id = decodeURIComponent(hash.slice(1));
  if (!id) return false;
  return scrollIdIntoView(id, behavior);
}

export function LegalTocNav({ children, className, "aria-label": ariaLabel }: LegalTocNavProps) {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    let cancelled = false;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!cancelled) scrollHashIntoView(hash, "auto");
      });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const a = target?.closest("a[href^='#']");
      if (!(a instanceof HTMLAnchorElement) || !nav.contains(a)) return;
      const href = a.getAttribute("href");
      if (!href || href.length < 2) return;
      const id = decodeURIComponent(href.slice(1));
      if (!document.getElementById(id)) return;
      e.preventDefault();
      scrollIdIntoView(id, "smooth");
      window.history.pushState(null, "", href);
    };

    nav.addEventListener("click", onClick);
    return () => nav.removeEventListener("click", onClick);
  }, []);

  return (
    <nav ref={navRef} className={className} aria-label={ariaLabel}>
      {children}
    </nav>
  );
}
