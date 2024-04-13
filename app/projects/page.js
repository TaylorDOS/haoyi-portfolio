import Image from "next/image";
import Navbar from "../components/Navbar";
import ProjectSection from "../components/ProjectSection";
import EmailSection from "../components/EmailSection";
import Footer from "../components/Footer";

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <container class='container mt-24 mx-auto px-12 py-4'>
        <ProjectSection/>
        <EmailSection/>
        <Footer />
      </container>
    </main>
  );
}
