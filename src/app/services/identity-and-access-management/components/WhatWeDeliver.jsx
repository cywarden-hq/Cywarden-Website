import Image from "next/image";
import { RefreshCw, UserLock, Workflow } from "lucide-react";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const imageSrc = "/images/services/identity-and-access-management/what-we-deliver.png";

const items = [
    {
        id: "zero-trust",
        title: "Zero-Trust Identity",
        description:
            "Every access request is verified regardless of network location. Conditional access policies enforce least-privilege dynamically.",
        Icon: RefreshCw,
    },
    {
        id: "privileged-access",
        title: "Privileged Access Security",
        description:
            "Vault credentials, rotate secrets, and enforce just-in-time privilege elevation with full session recording.",
        Icon: UserLock,
    },
    {
        id: "automated-governance",
        title: "Automated Governance",
        description:
            "Automated access certifications, lifecycle management, and compliance reporting that reduce manual overhead.",
        Icon: Workflow,
    },
];

export function WhatWeDeliver() {
    return (
        <Section
            className="relative min-w-0 bg-black text-white"
            aria-labelledby="iam-what-we-deliver-heading"
            size="lg"
        >
            <Container as="div" className="flex flex-col items-center">
                <header className="max-w-3xl text-center">
                    <p className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-[#FF5900] sm:text-base">
                        Value
                    </p>
                    <h2
                        id="iam-what-we-deliver-heading"
                        className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:mt-5 sm:text-4xl md:text-[clamp(2rem,3.5vw,2.75rem)]"
                    >
                        What We Deliver
                    </h2>
                </header>

                <div className="mt-12 grid w-full max-w-6xl grid-cols-1 items-center gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-16 xl:gap-20">
                    <Image
                        src={imageSrc}
                        alt="Futuristic shield with keyhole on concentric blue rings, representing secure identity delivery."
                        width={500}
                        height={500}
                        className="block object-contain"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />

                    <div className="flex min-w-0 flex-col gap-10 sm:gap-12 lg:gap-14 lg:pt-2">
                        {items.map((item) => {
                            const Icon = item.Icon;
                            return (
                                <div key={item.id} className="flex gap-4 sm:gap-5">
                                    <div className="flex shrink-0 justify-center pt-0.5">
                                        <Icon
                                            className="size-8 text-white sm:size-9"
                                            strokeWidth={1.5}
                                            aria-hidden
                                        />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="font-heading text-lg font-bold text-white sm:text-xl">
                                            {item.title}
                                        </h3>
                                        <p className="body-lg mt-2 text-pretty text-white/75 sm:mt-3">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
