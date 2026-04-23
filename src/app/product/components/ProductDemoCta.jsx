import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function ProductDemoCta() {
    return (
        <section className="bg-black text-white" aria-labelledby="product-demo-cta-heading">
            <Container as="div" className="flex flex-col items-center text-center">
                <Image
                    src="/images/product/cyforte-cta.svg"
                    alt="CyForte.ai"
                    width={300}
                    height={300}
                    className="block object-contain"
                />
                <h2
                    id="product-demo-cta-heading"
                    className="max-w-xl font-heading text-3xl font-bold leading-tight text-white sm:text-4xl pb-4"
                >
                    See CyForte.ai in Action
                </h2>
                <p className="body-lg max-w-lg text-white/80 pb-4">
                    Request a personalized demo and experience how AI-powered security agents transform your operations.
                </p>
                <Link
                    href="/contact"
                    className={cn(
                        "inline-flex items-center justify-center rounded-full border border-white/70 px-8 py-3 font-heading text-base font-medium text-white transition hover:bg-white/10",
                    )}
                >
                    Request Demo
                </Link>
            </Container>
        </section>
    );
}
