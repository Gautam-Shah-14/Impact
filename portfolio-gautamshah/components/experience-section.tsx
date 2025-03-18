import Link from "next/link"
import AnimateOnScroll from "./animate-on-scroll"

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <AnimateOnScroll animation="fade-in-up">
        <h2 className="section-title">Work Experience</h2>
      </AnimateOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimateOnScroll animation="fade-in-right" delay={200}>
          <div className="bg-muted rounded-xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(255,127,0,0.2)] relative h-full group">
            <div className="absolute top-5 right-5 text-2xl text-primary group-hover:rotate-12 transition-transform duration-300">
              🚀
            </div>
            <h3 className="text-2xl font-bold mb-4">ML Intern at IT idol Technologies</h3>
            <p className="text-muted-foreground mb-4">Jan 2025 - Present (6 Months)</p>
            <p className="mb-6">
              Working on real time Projects of Company and gaining hands on Knowledge in the Field of AI/ML.
            </p>
            <Link
              href="#"
              className="inline-block bg-muted text-white py-2 px-5 rounded border border-primary transition-all duration-300 hover:bg-primary hover:scale-105"
            >
              LEARN MORE
            </Link>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in-left" delay={400}>
          <div className="bg-muted rounded-xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(255,127,0,0.2)] relative h-full group">
            <div className="absolute top-5 right-5 text-2xl text-primary group-hover:rotate-12 transition-transform duration-300">
              🔍
            </div>
            <h3 className="text-2xl font-bold mb-4">ML Intern at IT idol Technologies</h3>
            <p className="text-muted-foreground mb-4">May 2024 - Jun 2024 (1 Month)</p>
            <p className="mb-6">
              Worked on various ML projects including Time Series Analysis with ARIMA and SARIMA models, logistic
              regression on complex datasets, and building CNNs for American Sign Language prediction. Enhanced skills
              in data collection, preparation, and practical problem-solving.
            </p>
            <Link
              href="#"
              className="inline-block bg-muted text-white py-2 px-5 rounded border border-primary transition-all duration-300 hover:bg-primary hover:scale-105"
            >
              LEARN MORE
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

