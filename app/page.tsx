import ContactSection from "@/components/domain/home/contact";
import Herosection from "@/components/domain/home/herosection";
import HomelistFirst from "@/components/domain/home/homelist-first";
import HomelistSecond from "@/components/domain/home/homelist-second";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Herosection />
      <HomelistFirst />
      <HomelistSecond />
      <ContactSection />
    </main>
  );
}
