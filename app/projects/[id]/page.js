"use client"
import React from "react";
import { useParams } from 'next/navigation';
import Navbar from "../../../app/components/Navbar";
import ProjectDetail from "../../../app/components/ProjectPage";
import ProjectSection from "../../../app/components/ProjectSection";
import EmailSection from "../../../app/components/EmailSection";
import Footer from "../../../app/components/Footer";
import ProjectsSection from "../../../app/components/ProjectSection";

const ProjectPage = () => {
    const { id } = useParams();

    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
            <Navbar />
            <div className='container mt-24 mx-auto px-12 py-4'>
                <ProjectDetail projectId={id} />
                <ProjectsSection/>
                <EmailSection />
                <Footer />
            </div>
        </main>
    );
}

export default ProjectPage;
