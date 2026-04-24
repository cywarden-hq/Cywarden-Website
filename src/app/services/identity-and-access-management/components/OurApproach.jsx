import Image from "next/image";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

const basePath = "/images/services/identity-and-access-management";

const approachImages = [
    {
        src: `${basePath}/our-approach-1.svg`,
        width: 454,
        height: 506,
        alt: "Assess and design: identity governance, policies, and Admin, User, and Service roles.",
    },
    {
        src: `${basePath}/our-approach-2.svg`,
        width: 458,
        height: 510,
        alt: "Deploy and configure: access policies and cloud, hybrid, and on-premise environments.",
    },
    {
        src: `${basePath}/our-approach-3.svg`,
        width: 455,
        height: 506,
        alt: "Automate and monitor: identity events, threat detection, automation, and access certification.",
    },
    {
        src: `${basePath}/our-approach-4.svg`,
        width: 456,
        height: 508,
        alt: "Govern and comply: compliance reporting for SOX, SOC 2, ISO 27001, and GDPR.",
    },
];

const baseBlob = {
    position: "absolute",
    borderRadius: "50%",
    pointerEvents: "none",
};

function Starfield() {
    return (
        <div
            className="pointer-events-none absolute inset-0 z-[1] opacity-[0.22]"
            style={{
                backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.14) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
            }}
            aria-hidden
        />
    );
}

function ApproachBackdrop({ children }) {
    return (
        <div className="relative isolate min-w-0 overflow-x-clip bg-black">
            <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
                <div
                    style={{
                        ...baseBlob,
                        bottom: "6%",
                        left: "-14%",
                        width: "min(110vw, 720px)",
                        height: "min(130vh, 980px)",
                        background: "rgba(0, 95, 255, 0.78)",
                        filter: "blur(420px)",
                        transform: "translate(-6%, 8%)",
                    }}
                />
                <div
                    style={{
                        ...baseBlob,
                        bottom: "14%",
                        left: "-4%",
                        width: "min(72vw, 480px)",
                        height: "min(85vh, 640px)",
                        background: "rgba(140, 200, 255, 0.62)",
                        filter: "blur(240px)",
                        transform: "translate(-2%, 4%)",
                    }}
                />
                <div
                    style={{
                        ...baseBlob,
                        top: "10%",
                        right: "-18%",
                        left: "auto",
                        width: "min(115vw, 900px)",
                        height: "min(125vh, 1080px)",
                        background: "rgba(255, 115, 0, 0.82)",
                        filter: "blur(380px)",
                        transform: "translate(12%, -6%) rotate(-16.77deg)",
                    }}
                />
                <div
                    style={{
                        ...baseBlob,
                        top: "16%",
                        right: "-6%",
                        left: "auto",
                        width: "min(70vw, 520px)",
                        height: "min(78vh, 700px)",
                        background: "rgba(255, 200, 130, 0.68)",
                        filter: "blur(200px)",
                        transform: "translate(4%, -2%) rotate(-16.77deg)",
                    }}
                />
            </div>
            <Starfield />
            <div className="relative z-10">{children}</div>
        </div>
    );
}

export function OurApproach() {
    return (
        <ApproachBackdrop>
            <Section
                className="relative min-w-0 bg-transparent py-16 text-white sm:py-20 md:py-24 lg:py-28"
                aria-labelledby="iam-our-approach-heading"
                size="lg"
            >
                <Container as="div" className="flex flex-col items-center">
                    <header className="max-w-4xl text-center">
                        <p className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-[#FF5900] sm:text-base">
                            Our approach
                        </p>
                        <h2
                            id="iam-our-approach-heading"
                            className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:mt-5 sm:text-4xl md:text-[clamp(2rem,3.5vw,2.85rem)]"
                        >
                            Identity as the New Perimeter.
                        </h2>
                    </header>

                    <ul className="mt-12 grid w-full max-w-6xl list-none grid-cols-1 gap-6 sm:mt-14 sm:gap-7 md:grid-cols-2 md:gap-8 lg:mt-16">
                        {approachImages.map((img, index) => (
                            <li key={img.src} className="min-w-0">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={img.width}
                                    height={img.height}
                                    className="block h-auto w-full max-w-full object-contain"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority={index < 2}
                                />
                            </li>
                        ))}
                    </ul>
                </Container>
            </Section>
        </ApproachBackdrop>
    );
}
