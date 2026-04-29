import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/** @param {{ post: { id: string; category: string; title: string; date: string; image: string; slug: string; filterTags?: string[] }; className?: string }} props */
export function BlogCard({ post, className }) {
    return (
        <article
            className={cn(
                "flex min-w-0 flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.04]",
                className,
            )}
        >
            <Link href={`/blogs/${post.slug}`} className="group flex min-h-0 flex-1 flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008DFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#000d1a]">
                <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-slate-200">
                    <Image
                        src={post.image}
                        alt=""
                        fill
                        unoptimized={post.image.endsWith(".svg")}
                        className="object-cover transition duration-300 group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                    />
                </div>
                <div className="flex min-h-0 flex-1 flex-col gap-3 p-5 sm:p-6">
                    <span className="w-fit rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
                        {post.category}
                    </span>
                    <h3 className="font-heading text-base font-bold leading-snug text-neutral-900 sm:text-lg">
                        {post.title}
                    </h3>
                    <p className="mt-auto text-sm text-neutral-500">{post.date}</p>
                </div>
            </Link>
        </article>
    );
}
