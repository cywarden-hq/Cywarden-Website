import Image from "next/image";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const basePath = "/images/services/governance-risk-and-compliance";
const sectionBg = `${basePath}/compliance-frameworks-bg.png`;

const frameworks = [
    "ISO 27001",
    "SOC 2 Type II",
    "PCI DSS",
    "NIST CSF",
    "GDPR",
    "HIPAA",
    "CIS Controls",
    "SOX",
    "CMMI",
    "DPDPA",
];

function FrameworkPill({ label }) {
    return (
        <span className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-black/55 px-3.5 py-2 text-center text-xs font-medium tracking-tight text-white shadow-[0_8px_28px_rgba(0,0,0,0.35)] backdrop-blur-[2px] sm:px-4 sm:py-2.5 sm:text-sm md:text-[0.9375rem]">
            {label}
        </span>
    );
}

export function ComplianceFrameworks() {
    return (
        <div className="relative isolate min-w-0 overflow-x-clip bg-[#03060c]">
            <div className="pointer-events-none absolute inset-0 z-0">
                <Image
                    src={sectionBg}
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                    priority={false}
                />
                <div className="absolute inset-0 bg-black/35" aria-hidden />
            </div>
            <div
                className="pointer-events-none absolute left-1/2 top-[28%] z-[1] h-[min(42vw,18rem)] w-[min(92vw,40rem)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(80,140,255,0.22)_0%,transparent_70%)] blur-3xl"
                aria-hidden
            />

            <Section
                className="relative z-10 bg-transparent py-16 text-white sm:py-20 md:py-24 lg:py-28"
                aria-labelledby="grc-frameworks-heading"
                size="lg"
            >
                <Container as="div" className="flex flex-col items-center">
                    <header className="relative z-[2] max-w-4xl text-center">
                        <p className="section-label">Frameworks</p>
                        <h2
                            id="grc-frameworks-heading"
                            className="mt-4 font-heading text-[clamp(1.65rem,4.5vw,2.35rem)] font-bold leading-[1.12] tracking-tight text-white sm:mt-5 sm:text-4xl md:text-[clamp(2rem,3.4vw,2.85rem)]"
                        >
                            Compliance Frameworks
                            <br />
                            We Support
                        </h2>
                    </header>

                    <ul className="relative z-[2] mt-10 flex w-full max-w-3xl list-none flex-wrap justify-center gap-2 px-3 sm:mt-12 sm:gap-2.5 sm:px-4 md:mt-14 md:gap-3 lg:mt-16">
                        {frameworks.map((label) => (
                            <li key={label} className="min-w-0">
                                <FrameworkPill label={label} />
                            </li>
                        ))}
                    </ul>
                </Container>
            </Section>
        </div>
    );
}
