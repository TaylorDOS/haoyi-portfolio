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
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <container class='container mt-24 mx-auto px-12 py-4'>
        <HeroSection/>
        <AboutSection/>
        <ProjectSection/>
        <EmailSection/>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </container>
    </main>
  );
}
