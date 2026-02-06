import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Author from "@/components/Author";
import EducatorHub from "@/components/EducatorHub";
import Sponsorship from "@/components/Sponsorship";
import MediaBar from "@/components/MediaBar";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import ScrollProgress from "@/components/ScrollProgress";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[var(--color-background)]">
      <ScrollProgress />
      <Header />
      <div id="the-book"><Hero /></div>
      <MediaBar />
      <Philosophy />
      <Author />
      <EducatorHub />
      <Sponsorship />
      <Contact />
      <Footer />
      <StickyBottomCTA />
    </main>
  );
}
