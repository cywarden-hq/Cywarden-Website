import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { cn } from "@/lib/utils";
import teamMembers from "./leadership-team.json";

const linkedinLogo = "/images/linkedin-logo.svg";

function LeadershipCard({ member }) {
    const isSvg = member.image.endsWith(".svg");

    return (
        <article
            className={cn(
                "relative flex w-full flex-col overflow-visible rounded-2xl hover:shadow-lg transition-shadow duration-300 bg-white shadow-[0_6px_20px_rgba(0,0,0,0.12)] sm:rounded-[1.35rem]",
            )}
        >
            <div className="relative aspect-[5/6] w-full shrink-0 overflow-hidden rounded-t-[0.85rem] bg-slate-200 sm:rounded-t-[1rem]">
                <Image
                    src={member.image}
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 90vw, 230px"
                    unoptimized={isSvg}
                />
            </div>

            <div className="relative z-10 -mt-5 flex w-full justify-center px-1.5 sm:-mt-6">
                <div
                    className={cn(
                        "w-full max-w-[calc(100%-0.5rem)] rounded-md bg-[#4A90E2] px-2 py-1.5 text-center font-heading font-semibold leading-snug text-white shadow-md",
                        "text-base sm:text-lg sm:px-2.5 sm:py-2",
                    )}
                >
                    {member.name}
                </div>
            </div>

            <div className="relative flex flex-col items-center rounded-b-2xl bg-white px-2 pb-6 pt-0.5 text-center sm:rounded-b-[1.35rem] sm:px-3 sm:pb-7 sm:pt-1">
                <p className="max-w-[12rem] font-heading text-base font-semibold leading-snug text-black sm:text-lg">
                    {member.role}
                </p>
            </div>

            {/* Outside white panel: sits on corner, overlapping card border */}
            <Link
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                    "absolute -bottom-0.5 -right-0.5 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white",
                    "shadow-[0_6px_24px_rgba(0,0,0,0.22),0_2px_8px_rgba(0,0,0,0.12)] ring-2 ring-white/90 transition hover:shadow-[0_10px_28px_rgba(0,0,0,0.28)]",
                    "sm:-bottom-1 sm:-right-1 sm:h-10 sm:w-10",
                )}
                aria-label={`${member.name} on LinkedIn`}
            >
                <Image
                    src={linkedinLogo}
                    alt=""
                    width={22}
                    height={22}
                    className="h-5 w-5 object-contain sm:h-[22px] sm:w-[22px]"
                    unoptimized
                />
            </Link>
        </article>
    );
}

export function LeadershipTeam() {
    return (
        <Section
            size="lg"
            className={cn(
                "min-w-0 text-white",
                "bg-gradient-to-b from-[#020c1f] via-[#061a33] to-[#020617]",
            )}
            aria-labelledby="leadership-team-heading"
        >
            <Container as="div" className="min-w-0 px-4 sm:px-6">
                <header className="mx-auto max-w-3xl text-center">
                    <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#F9680E] sm:text-sm">Leadership</p>
                    <h2
                        id="leadership-team-heading"
                        className="mt-2 font-heading text-3xl font-bold leading-tight tracking-tight sm:mt-3 sm:text-4xl md:text-5xl"
                    >
                        Our Leadership Team
                    </h2>
                </header>

                <ul
                    className={cn(
                        "mx-auto mt-10 flex w-full max-w-[880px] list-none flex-wrap justify-center gap-x-10 gap-y-16 overflow-visible py-2 sm:mt-12 sm:max-w-[980px] sm:gap-x-14 sm:gap-y-20 md:mt-14",
                        "lg:max-w-[1320px] lg:gap-x-16 lg:gap-y-24 xl:max-w-7xl",
                    )}
                >
                    {teamMembers.map((member) => (
                        <li
                            key={member.id}
                            className={cn(
                                "flex w-full max-w-[220px] shrink-0 justify-center overflow-visible sm:w-[calc(50%-1.75rem)] sm:max-w-[236px]",
                                "lg:w-[calc(25%-3rem)] lg:min-w-0 lg:max-w-[236px]",
                            )}
                        >
                            <LeadershipCard member={member} />
                        </li>
                    ))}
                </ul>
            </Container>
        </Section>
    );
}
