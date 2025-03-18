import Image from "next/image"
import AnimateOnScroll from "./animate-on-scroll"

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <AnimateOnScroll animation="fade-in-up">
        <h2 className="section-title">Projects</h2>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-in-up" delay={200}>
        <div className="flex flex-col md:flex-row items-center mb-24 group">
          <div className="flex-1 md:pr-12 mb-8 md:mb-0">
            <div className="text-muted-foreground mb-2">Featured Project</div>
            <h3 className="text-2xl font-bold mb-4 text-primary">PaperGenie</h3>
            <p className="mb-6">
              PaperGenie is my solo-developed educational app that automates custom question paper creation using AI.
              Now integrating the Retrieval-Augmented Generation (RAG) framework for improved accuracy and better
              contextual understanding of generated questions. It generates exams based on topics, marks, and difficulty
              levels. With Firebase Authentication and cloud storage, the app offers a secure and scalable solution for
              educators.
            </p>
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                ⚛️
              </div>
              <div className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                🔥
              </div>
            </div>
          </div>
          <div className="flex-1 transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PaperGenie-5gb7ug2B6aaGSItZ0FCaQyxG42kS5V.png"
              alt="PaperGenie Project"
              width={500}
              height={300}
              className="rounded-xl border border-[rgba(255,127,0,0.3)] hover:shadow-[0_10px_25px_rgba(255,127,0,0.3)] transition-shadow duration-300"
            />
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-in-up" delay={400}>
        <div className="flex flex-col md:flex-row-reverse items-center group">
          <div className="flex-1 md:pl-12 mb-8 md:mb-0">
            <div className="text-muted-foreground mb-2">Featured Project</div>
            <h3 className="text-2xl font-bold mb-4 text-primary">ReVibe</h3>
            <p className="mb-6">
              ReVibe is a mental wellness app integrating AI-driven mood tracking, gamification, and personalized tasks
              to enhance focus and resilience. Users earn Vibe Coins for completing wellness activities, redeemable for
              valuable resources. The app also offers professional support and peer forums. I contribute to development,
              UI/UX, AI/ML, and documentation.
            </p>
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                📱
              </div>
              <div className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                🔥
              </div>
            </div>
          </div>
          <div className="flex-1 transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rvArtboard%201-7YKq01VRy8ABWeMRhhWQhW7SeCgN8K.png"
              alt="ReVibe Project"
              width={500}
              height={500}
              className="rounded-xl border border-[rgba(255,127,0,0.3)] hover:shadow-[0_10px_25px_rgba(255,127,0,0.3)] transition-shadow duration-300"
            />
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  )
}

