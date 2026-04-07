import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Skills from "./components/Skill";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
      <div className="container mt-20 sm:mt-24 mx-auto px-4 sm:px-6 md:px-12 lg:px-24 w-full max-w-screen-xl">
         <HeroSection />

        <AboutSection />
        <Skills />
         <ProjectSection />
         <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
