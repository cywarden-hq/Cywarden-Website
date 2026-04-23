import Image from "next/image";
import Container from "@/components/ui/container";
import { cn } from "@/lib/utils";

const gridPattern = [
    "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
    "linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
].join(", ");

/** Figma: linear 0% #0186DC → 58% #740B0D (holds to 100%); diagonal reads blue top-left, red bottom-right */
const dashboardHaloGradient =
    "linear-gradient( #0186DC 0%, #740B0D 100%)";

export function DashboardShowcase() {
    return (
        <section
            className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
            aria-label="CyForte platform dashboard preview"
        >
            <div className="absolute inset-0 bg-[#06060a]" aria-hidden />
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.65]"
                style={{
                    backgroundImage: gridPattern,
                    backgroundSize: "40px 40px",
                }}
                aria-hidden
            />
            <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
                aria-hidden
            />

            <Container className="relative z-10">
                <div className="relative isolate mx-auto max-w-6xl">
                    {/* Soft halo behind the dashboard (Figma linear + blur) */}
                    <div
                        className="pointer-events-none absolute -inset-8 z-0 rounded-[2rem] sm:-inset-12 blur-2xl md:rounded-[2.25rem]"
                        style={{ background: dashboardHaloGradient }}
                        aria-hidden
                    />
                    <div
                        className={cn(
                            "relative z-10 overflow-hidden rounded-2xl p-px shadow-[0_24px_80px_rgba(0,0,0,0.55)]",
                            "md:rounded-3xl p-0.5",
                        )}
                        style={{
                            background: "linear-gradient(180deg, #740B0D 0%, #0186DC 100%)",
                        }}
                    >
                        <div
                            className={cn(
                                "overflow-hidden rounded-[calc(1rem-1px)] bg-[#0b0c12] p-2 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]",
                                "sm:p-3 md:rounded-[calc(1.5rem-1px)] md:p-4",
                            )}
                        >
                            <div className="relative aspect-[988/525] w-full overflow-hidden rounded-xl bg-[#0a0a0f] sm:rounded-2xl">
                                <Image
                                    src="/images/product/dashboard-image.png"
                                    alt="CyForte.ai dashboard showing Administration and Security Agents"
                                    fill
                                    className="object-contain object-top"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1152px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
