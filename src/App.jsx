import { Navbar } from "@/layout/Navbar"
import { Footer } from "@/layout/Footer"
import { Hero } from "@/section/Hero"
import { About } from "@/section/About"
import { Projects } from "@/section/Projects"
import { Experience } from "@/section/Experience"
import { Testimonials } from "@/section/Testimonials"
import { Certificate } from "@/section/Certificate"
import { LearningJourney} from "@/section/LearningJourney"
import { Contact } from "@/section/Contact"
function App() {


  return ( <div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Projects />
      {/* <Experience /> */}
      <LearningJourney />
      <Certificate />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </main>
  </div>

  );
}
export default App
