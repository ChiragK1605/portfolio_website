import { ArrowUpRight } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { AnimatedBorderButtons} from "@/components/AnimatedBorderButtons";

const certificates = [
    {
        title: "Hack@BVP 7.0 Finalist",
        description:
            "Recognized as a finalist at Hack@BVP 7.0 for developing an innovative technology solution. Demonstrated strong problem-solving, teamwork, and technical skills while competing against talented participants in a highly competitive hackathon environment.",
        image: "/certificates/hackathon.jpeg",
        
    },
    {
        title: "GenAI Powered Data Analytics Job Simulation",
        description:
            "Completed Tata's GenAI Powered Data Analytics Job Simulation, gaining hands-on experience in data analysis, business insights generation, and leveraging Generative AI tools to solve real-world business challenges and support data-driven decision-making.",
        image: "/certificates/tata.jpeg",
        
    },
    {
        title: "Generative AI Essentials",
        description:
            "Successfully completed the Generative AI Essentials certification, covering the fundamentals of Large Language Models (LLMs), prompt engineering, AI applications, and the practical use of generative AI technologies across various domains.",
        image: "/certificates/tcs.jpeg",
        
            },
    {
        title: "Workshop on Text Analytics",
        description:
            "Participated in a hands-on workshop on Text Analytics, exploring natural language processing techniques, text preprocessing, sentiment analysis, and data-driven insights from unstructured textual data.",
        image: "/certificates/ybi.jpeg",
        
    },

]
export const Certificate = () => {
    return <section id="projects" className="py-32 relative overflow-hidden">
        {/* bg glows */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
            {/* section header */}
            <div className="text-center mx-auto max-w-3xl mb-16 ">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Achievements</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    Certifications &
                    <span className="font-serif italic font-normal text-white ">
                        {" "}
                        Achievements</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animate-delay-400">
                    A collection of certifications, hackathon achievements, and professional learning experiences that reflect my commitment to continuous growth in software development, artificial intelligence, and emerging technologies.
                </p>

            </div>
            {/* Project-grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {certificates.map((project, idx) => (
                    <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                        style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                    >
                        <div className="relative overflow-hidden aspect-video">
                            <img src={project.image} alt="{project.title}" className="w-full h-full object-cover transition-tranform duration-700 group-hover:scale-110" />
                            <div
                                className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                            />
                            {/* overlink */}
                            

                        </div>
                        {/* content */}
                        <div className="p-6 space-y-4 ">
                            <div className="flex items-start justify-between">
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                                <ArrowUpRight className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all" />
                            </div>
                            <p className="text-muted-foreground text-sm ">{project.description}</p>
                            
                        </div>
                    </div>

                ))}

            </div>
            {/* view all project */}
            {/* <div className="text-center mt-12 animate-fade-in animation-delay-500">
                <a href="https://github.com/ChiragK1605?tab=repositories">

                <AnimatedBorderButtons >
                    View All Projects
                    <ArrowUpRight className="w-5 h-5" />
                                
                </AnimatedBorderButtons>
                </a>
            </div> */}
        </div>
    </section>
}