import Image from "next/image";

export function EndRisk() {
  return (
    <section className="min-w-0 bg-black px-4 py-6 sm:px-6 sm:py-8 md:py-10">
      <div className="mx-auto flex w-full max-w-7xl justify-center">
        <Image
          src="/images/home/end-risk.svg"
          alt="Cywarden — end risk"
          width={1200}
          height={600}
          className="h-auto w-full max-w-full object-contain object-center [max-height:min(55vh,520px)] sm:[max-height:min(60vh,600px)] lg:[max-height:min(65vh,680px)]"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
          priority={false}
        />
      </div>
    </section>
  );
}
