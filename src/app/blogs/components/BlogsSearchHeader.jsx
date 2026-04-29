"use client";

import { Search } from "lucide-react";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { cn } from "@/lib/utils";

/** @param {{ filters: string[]; activeFilter: string; onFilterChange: (f: string) => void; searchQuery: string; onSearchChange: (q: string) => void }} props */
export function BlogsSearchHeader({ filters, activeFilter, onFilterChange, searchQuery, onSearchChange }) {
    return (
        <Section size="sm" className="relative min-w-0 bg-transparent" aria-label="Search and filters">
            <Container as="div" className="flex flex-col items-center gap-6 sm:gap-8">
                <div className="relative w-full max-w-2xl">
                    <label htmlFor="blog-search-input" className="sr-only">
                        Search posts by title or category
                    </label>
                    <Search
                        className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400"
                        strokeWidth={2}
                        aria-hidden
                    />
                    <input
                        id="blog-search-input"
                        type="search"
                        name="blog-search"
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        placeholder="Search by title or category"
                        autoComplete="off"
                        className="h-12 w-full rounded-2xl border-0 bg-white pl-12 pr-4 text-base text-neutral-900 shadow-sm outline-none ring-1 ring-black/[0.06] placeholder:text-neutral-400 focus-visible:ring-2 focus-visible:ring-[#008DFF] sm:h-14 sm:rounded-[1rem] sm:text-[0.95rem]"
                    />
                </div>

                <div
                    className="flex w-full max-w-4xl flex-wrap items-center justify-center gap-2 sm:gap-3"
                    role="tablist"
                    aria-label="Content filters"
                >
                    {filters.map((label) => {
                        const active = activeFilter === label;
                        return (
                            <button
                                key={label}
                                type="button"
                                role="tab"
                                aria-selected={active}
                                onClick={() => onFilterChange(label)}
                                className={cn(
                                    "rounded-full px-5 py-2.5 font-heading text-sm font-semibold transition sm:px-6 sm:py-3 sm:text-base",
                                    active
                                        ? "bg-[#008DFF] text-white shadow-[0_4px_20px_rgba(0,141,255,0.35)]"
                                        : "bg-white text-sky-700 shadow-sm ring-1 ring-black/[0.04] hover:bg-sky-50",
                                )}
                            >
                                {label}
                            </button>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
}
