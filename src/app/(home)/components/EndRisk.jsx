import Image from "next/image";

export function EndRisk() {
  return (
    <section className="min-w-0">
      <Image
        src="/images/home/end-risk.png"
        alt="Cywarden — end risk"
        width={800}
        height={800}
        className="w-full h-full object-contain"
        priority={false}
      />
    </section>
  );
}
