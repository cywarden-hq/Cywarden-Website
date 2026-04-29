import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { BlogCard } from "./BlogCard";

/** @param {{ sectionId: string; title: string; items: Array<{ id: string; category: string; title: string; date: string; image: string; slug: string; filterTags?: string[] }>; className?: string }} props */
export function BlogSection({ sectionId, title, items, className }) {
    if (!items?.length) {
        return null;
    }

    const headingId = `blog-section-${sectionId}`;

    return (
        <Section
            className={cn("relative min-w-0 bg-transparent text-white", className)}
            aria-labelledby={headingId}
        >
            <Container as="div" className="min-w-0">
                <h2
                    id={headingId}
                    className="font-heading text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
                >
                    {title}
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
                    {items.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </Container>
        </Section>
    );
}
