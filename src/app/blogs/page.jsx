import { BlogsListing } from "./components/BlogsListing";
import { Hero } from "./components/Hero";
import { NewsletterSubscribe } from "./components/NewsletterSubscribe";

export default function BlogsPage() {
    return (
        <main className="min-w-0">
            <Hero />
            <BlogsListing />
            <NewsletterSubscribe />
        </main>
    );
}