import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Pedro is one of the most talented engineers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
    author: "RamGopal Singh",
    role: "Principal, PS Inter College",
    avatar:
      "/testimonials/ramgopal.jpeg",
  },
  {
    quote:
      "Working with Pedro was a game-changer for our project. He delivered ahead of schedule with code quality that set a new standard for our team.",
    author: "Sushil Sharma",
    role: "Associate Director, ITM College",
    avatar:
      "/testimonials/sushil.jpeg",
  },
  {
    quote:
      "Pedro's expertise in React and TypeScript helped us rebuild our entire frontend in record time. His architectural decisions continue to pay dividends.",
    author: "Rohit Rahat Mahis",
    role: "HOD CSE , ITM College",
    avatar:
      "/testimonials/rohit.jpeg",
  },
  {
    quote:
      "Not only is Pedro technically brilliant, but he's also a fantastic communicator and team player. He elevated everyone around him.",
    author: "Shivdutt Kaushik",
    role: "Benefactor",
    avatar:
      "/testimonials/shivdutt.jpeg",
  },
];
export const Testimonials = () => {
    const [activeIdx,SetActiveIdx]= useState(0);
    const next = () =>{
        SetActiveIdx((prev)=>(
            (prev+1)%testimonials.length
        ))

    }
    const previous = () =>{
        SetActiveIdx((prev)=>(
            (prev-1+testimonials.length)%testimonials.length
        ))
        
    }

    return <section id="testimonials" className="py-32 relative overflow-hidden">
        <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div className="container mx-auto 
      px-6 relative z-10">
        {/* section header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            What People Say
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Kind words from{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              amazing people.
            </span>
          </h2>
        </div>
        {/* testimonial carousel */}
        <div className="max-w-4xl mx-auto ">
            <div className="relative">
                {/* main testimonial */}
                <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
                    <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">

                    <Quote className="w-6 h-6 text-primary-foreground  " />
                </div>
                <blockquote className="text-xl md:text-2xl fonrt-medium leading-relaxed mb-8 pt-4 ">
                    "{testimonials[activeIdx].quote}"
                </blockquote>
                <div className="flex items-center gap-4"><img className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20" src={testimonials[activeIdx].avatar} alt = {testimonials[activeIdx].author}/>
                <div className="">
                <div className="font-semibold">
                    {testimonials[activeIdx].author}
                </div>
                <div className="text-sm text-muted-foreground">{testimonials[activeIdx].role}</div>
                </div>

                </div>
                </div>
                {/* testi navi */}
                <div className="flex items-center justify-center gap-4 mt-8">
                    <button onClick={previous} className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition all">
                        <ChevronLeft />
                    </button>
                    <div className="flex gap-2 ">
                        {testimonials.map((_,idx)=>(
                            <button onClick={()=> SetActiveIdx(idx)} className={` rounded-full w-2 h-2 transition-all duration-300 ${idx === activeIdx ? "w-8 bg-primary" : " bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}/>
                        ))}
                    </div>
                     <button onClick={next} className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition all">
                        <ChevronRight />
                    </button>
                </div>
            </div>
        </div>
      </div>
    </section>
}