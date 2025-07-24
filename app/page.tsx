import Contact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";
import Hero from "./hero";
import LanguageSections from "./LanguageSections";
import NavBar from "./NavBar";
import Projects from "./Projects";
import TechnicalExertise from "./TechnicalExertise";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <TechnicalExertise />
      <Projects />
      <LanguageSections />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
