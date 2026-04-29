"use client";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

export function NewsletterSubscribe() {
    return (
        <Section className="min-w-0 bg-black text-white" aria-labelledby="blogs-newsletter-heading">
            <Container as="div" className="flex w-full flex-col items-center px-4 text-center sm:px-6">
                <h2
                    id="blogs-newsletter-heading"
                    className="max-w-4xl font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[clamp(1.75rem,4vw,2.75rem)]"
                >
                    <span className="text-white">Join </span>
                    <span className="text-[#008DFF]">10,000+</span>
                    <span className="text-white"> Subscribers</span>
                </h2>

                <div
                    className="mt-6 h-px w-full max-w-md bg-[#003d7a] sm:mt-7"
                    role="presentation"
                    aria-hidden
                />

                <p className="body-lg mt-6 max-w-2xl text-pretty text-white/90 sm:mt-7">
                    Stay ahead of cyber threats with weekly updates on cybersecurity trends, threat intelligence, and
                    security innovations—delivered straight to your inbox.
                </p>

                <form
                    className="mt-8 flex w-full max-w-lg overflow-hidden rounded-full shadow-[0_4px_24px_rgba(0,141,255,0.12)] sm:mt-10"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <label htmlFor="blogs-newsletter-email" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="blogs-newsletter-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Enter Your Email"
                        className="min-h-12 min-w-0 flex-1 border-0 bg-white px-4 py-3 text-left text-base text-black placeholder:text-neutral-600 outline-none ring-0 focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-[#008DFF] focus-visible:ring-inset sm:min-h-14 sm:px-5 sm:py-3.5"
                    />
                    <button
                        type="submit"
                        className="min-h-12 shrink-0 bg-[#008DFF] px-5 font-heading text-sm font-bold uppercase tracking-wide text-white transition hover:brightness-110 sm:min-h-14 sm:px-10 sm:text-base"
                    >
                        SUBMIT
                    </button>
                </form>
            </Container>
        </Section>
    );
}
