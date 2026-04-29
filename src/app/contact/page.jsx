import Image from "next/image";
import { ContactContent } from "./components/ContactContent";
import { cn } from "@/lib/utils";

export default function ContactPage() {
    return (
        <main
            className={cn(
                "relative min-w-0 overflow-x-hidden bg-black text-white",
                "[background-image:radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]",
                "[background-size:28px_28px]",
            )}
        >
            {/* Viewport-fixed so textarea/grid layout changes never rescale this layer */}
            <div className="pointer-events-none fixed inset-0 z-0 size-full" aria-hidden>
                <Image
                    src="/images/contact-form-bg.png"
                    alt=""
                    fill
                    className="object-cover opacity-40"
                    sizes="100vw"
                />
            </div>
            <div className="relative z-10">
                <ContactContent />
            </div>
        </main>
    );
}
