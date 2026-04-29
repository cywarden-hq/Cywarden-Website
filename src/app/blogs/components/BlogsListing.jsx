"use client";

import { useMemo, useState } from "react";
import blogsData from "../data/blogs.json";
import Container from "@/components/ui/container";
import { BlogSection } from "./BlogSection";
import { BlogsSearchHeader } from "./BlogsSearchHeader";

function filterItems(items, activeFilter) {
    if (activeFilter === "All") {
        return items;
    }
    return items.filter((post) => post.filterTags?.includes(activeFilter));
}

function matchesSearch(post, rawQuery) {
    const q = rawQuery.trim().toLowerCase();
    if (!q) {
        return true;
    }
    const title = (post.title ?? "").toLowerCase();
    const category = (post.category ?? "").toLowerCase();
    return title.includes(q) || category.includes(q);
}

export function BlogsListing() {
    const filters = blogsData.filters;
    const [activeFilter, setActiveFilter] = useState(filters[0] ?? "All");
    const [searchQuery, setSearchQuery] = useState("");

    const sectionsWithItems = useMemo(() => {
        return blogsData.sections.map((section) => ({
            ...section,
            items: filterItems(section.items, activeFilter).filter((post) => matchesSearch(post, searchQuery)),
        }));
    }, [activeFilter, searchQuery]);

    const hasAnyResults = sectionsWithItems.some((s) => s.items.length > 0);

    return (
        <div
            className="relative min-w-0 bg-[#000d1a] text-white"
            style={{
                backgroundImage:
                    "radial-gradient(ellipse 85% 55% at 50% -10%, rgba(0, 141, 255, 0.18), transparent 55%), radial-gradient(ellipse 70% 50% at 50% 100%, rgba(0, 40, 80, 0.5), transparent 60%)",
            }}
        >
            <BlogsSearchHeader
                filters={filters}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
            />

            {!hasAnyResults ? (
                <Container as="div" className="px-4 pb-16 pt-4 text-center sm:px-6">
                    <p className="body-lg text-white/75">
                        No posts match your search or filters. Try different keywords or choose &quot;All&quot;.
                    </p>
                </Container>
            ) : (
                sectionsWithItems.map((section) => (
                    <BlogSection key={section.id} sectionId={section.id} title={section.title} items={section.items} />
                ))
            )}
        </div>
    );
}
