import { Code2, Rocket, Users, Lightbulb } from "lucide-react"

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "Writing maintainable, scalable code that stands the test of time. "
    },
    {
        icon: Rocket,
        title: "Performance",
        description:
            "Optimizing for speed and delivering lightning-fast user experiences.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Working closely with teams to bring ideas to life.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
            "Staying ahead with the latest technologies and best practices.",
    },
]
export const About = () => {
    return <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* left col */}
                <div className="space-y-8">
                    <div className="animate-fade-in">

                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About me</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        Building the future,
                        <span className="font-serif italic font-normal text-white"> one Component at a time.</span>
                    </h2>
                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>

                            I'm a passionate Web Developer and AI Enthusiast dedicated to building modern, intelligent, and user-centric digital experiences. My journey in technology began with web development and has expanded into the exciting world of Artificial Intelligence and Agentic AI systems.

                        </p>



                        <p>

                            I specialize in React, Next.js, JavaScript, TypeScript, and Tailwind CSS, creating responsive and scalable web applications. Alongside web development, I actively build AI-powered solutions using LangChain, LLMs, Retrieval-Augmented Generation (RAG), and autonomous AI agents that can reason, automate workflows, and solve real-world problems.

                        </p>



                        <p>

                            My recent projects include AI chatbots, document-based question-answering systems, multimodal applications, and intelligent automation tools. I enjoy exploring emerging technologies, building innovative solutions, and continuously learning to stay at the forefront of AI and software development.

                        </p>
                    </div>

                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                        <p className="text-lg font-medium italic text-foreground">
                            "My mission is to build intelligent, scalable, and user-focused digital experiences that leverage the power of AI and modern web technologies to solve real-world problems."
                        </p>
                    </div>
                </div>
                {/* right col */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item, idx) => (
                        <div key={idx} className="glass p-6 rounded-2xl animate-fade-in"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <item.icon className="w-6 h-6 text-primary " />
                            </div>
                            <h3 className="text-lg font-semibold mb-2 ">
                                {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>

                    ))}

                </div>
            </div>
        </div>
    </section>
}