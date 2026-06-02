import { ArrowUpRight } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { AnimatedBorderButtons} from "@/components/AnimatedBorderButtons";

const projects = [
    {
        title: "Multimodal Summarization and Translation System",
        description:
            "The Multimodal Summarization and Translation System is an AI-based application that processes text, audio,and video inputs to generate concise summaries and translated outputs. The system uses OpenAI Whisper forspeech-to-text conversion and BART for intelligent text summarization. It provides a user-friendly interface usingStreamlit and supports multilingual translation for better accessibility.",
        image: "/projects/project1v2.png",
        tags: ["Python",
                "Streamlit",
                "OpenAI Whisper",
                "BART",
                "NLP",],
        link: "#",
        github: "https://github.com/ChiragK1605/Multimodal-Summarization-and-Translation-System",
    },
    {
        title: "E-Commerce Platform",
        description:
            "EcoBloom is a sustainability-focused website that promotes plants and thier products. It is designed with the help of Next.js and Auth,js Framework.",
        image: "/projects/project2v2.png",
        tags: ["Next.js",
                "Auth.js",
                "JavaScript",
                "Tailwind CSS",
                "E-Commerce",],
        link: "#",
        github: "https://github.com/ChiragK1605/EcoBloom",
    },
    {
        title: "PDFBot (RAG Implementation)",
        description:
            "An AI-powered PDF chatbot that enables users to upload documents and ask natural language questions. Built using LangChain, FAISS Vector Database, HuggingFace Embeddings, and Groq LLM to implement Retrieval-Augmented Generation (RAG) for accurate document-based question answering.",
        image: "/projects/project3v2.png",
        tags: [
            "Python",
            "Streamlit",
            "LangChain",
            "RAG",
            "HuggingFace"
        ],
        link: "#",
        github: "https://github.com/ChiragK1605/PDFBot",
            },
    {
        title: "Spotify Clone",
        description:
            "Spotify Clone is a music streaming web application that replicates the core functionality of Spotify. It enables users to browse songs, create playlists, play/pause music, and explore artists and albums.",
        image: "/projects/project4v2.png",
        tags: ["HTML",
                "CSS",
                "JavaScript",
                "Responsive Design",
                "UI/UX"],
        link: "#",
        github: "https://github.com/ChiragK1605/Spotify-Clone",
    },

]
export const Projects = () => {
    return <section id="projects" className="py-32 relative overflow-hidden">
        {/* bg glows */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
            {/* section header */}
            <div className="text-center mx-auto max-w-3xl mb-16 ">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    Projects that
                    <span className="font-serif italic font-normal text-white ">
                        {" "}
                        Make an impact</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animate-delay-400">
                    A selection of my recent work, from complex web applications to
                    innovative tools that solve real-world problems.
                </p>

            </div>
            {/* Project-grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
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
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                    <ArrowUpRight className="w-5 h-5 " />
                                </a>
                                <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                    <FaGithub className="w-5 h-5 " />
                                </a>

                            </div>

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
                            <div className="flex flex-wrap gap-2 ">
                                {project.tags.map((tag, tagIdx) => (
                                    <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-sm font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                ))}

            </div>
            {/* view all project */}
            <div className="text-center mt-12 animate-fade-in animation-delay-500">
                <a href="https://github.com/ChiragK1605?tab=repositories">

                <AnimatedBorderButtons >
                    View All Projects
                    <ArrowUpRight className="w-5 h-5" />
                                
                </AnimatedBorderButtons>
                </a>
            </div>
        </div>
    </section>
}