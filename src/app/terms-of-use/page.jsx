import Container from "@/components/ui/container";
import { TermsOfUse } from "./TermsOfUse";

export default function TermsOfUsePage() {
  return (
    <main className="min-w-0 bg-black pb-20 pt-28 text-white md:pb-28 md:pt-32">
      <Container as="div" className="max-w-5xl">
        <TermsOfUse />
      </Container>
    </main>
  );
}
