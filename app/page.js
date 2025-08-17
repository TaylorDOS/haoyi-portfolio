import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen overflow-hidden bg-blue-50">
      <div className="container pt-32 mx-auto px-8 max-w-6xl">
        <HeroSection />
        <div className="mt-8">
          <AboutSection />
        </div>
      </div>
    </main>

  );
}
