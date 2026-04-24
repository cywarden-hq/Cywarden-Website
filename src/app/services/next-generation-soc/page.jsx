import { FivePillarsOfSoc } from "./components/FivePillarsOfSoc";
import { Hero } from "./components/Hero";
import { NextGenerationSocCta } from "./components/NextGenerationSocCta";
import { RealWorldResults } from "./components/RealWorldResults";

export default function NextGenerationSocPage() {
    return (
        <main className="min-w-0 max-w-[100vw] overflow-x-clip bg-black">
            <Hero />
            <FivePillarsOfSoc />
            <RealWorldResults />
            <NextGenerationSocCta />
        </main>
    );
}
