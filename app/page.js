import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen overflow-hidden bg-blue-50">
      <div className="container pt-32 mx-auto px-8 max-w-6xl">
        <HeroSection />
        <section id="about" className="scroll-mt-24">
          <AboutSection />
        </section>
        <section id="projects" className="scroll-mt-24">
          <ProjectSection />
        </section>
      </div>
    </main>

  );
}
