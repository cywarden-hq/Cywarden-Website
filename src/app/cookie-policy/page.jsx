import Container from "@/components/ui/container";
import { CookiePolicy } from "./CookiePolicy";

export default function CookiePolicyPage() {
  return (
    <main className="min-w-0 bg-black pb-20 pt-28 text-white md:pb-28 md:pt-32">
      <Container as="div" className="max-w-5xl">
        <CookiePolicy />
      </Container>
    </main>
  );
}
