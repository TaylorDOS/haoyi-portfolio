import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"



export default function Home() {
  return (
    <main className="flex flex-col bg-white">
      <Navbar/>
      <div class='container mt-32 px-4'>
        <HeroSection/>
        <AboutSection/>
        <ProjectSection/>
        <EmailSection/>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </div>
    </main>
  );
}
