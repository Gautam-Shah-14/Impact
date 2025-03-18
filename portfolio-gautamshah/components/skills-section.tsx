"use client"

import { useEffect, useRef, useState } from "react"

interface Skill {
  name: string
  icon: string
  category: string
  description: string
}

export default function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const containerRef = useRef<HTMLDivElement>(null)

  const skills: Skill[] = [
    {
      name: "Artificial Intelligence",
      icon: "🤖",
      category: "ai",
      description: "Building advanced AI systems and integrating them into practical applications.",
    },
    {
      name: "Machine Learning",
      icon: "🧠",
      category: "ai",
      description: "Creating predictive models and training algorithms for complex problems.",
    },
    {
      name: "Deep Learning",
      icon: "⚙️",
      category: "ai",
      description: "Building neural networks for image recognition and advanced pattern detection.",
    },
    {
      name: "Flutter",
      icon: "📱",
      category: "development",
      description: "Developing cross-platform mobile applications with beautiful UI/UX.",
    },
    {
      name: "Firebase",
      icon: "🔥",
      category: "development",
      description: "Implementing backend services with authentication, storage, and real-time databases.",
    },
    {
      name: "FastAPI",
      icon: "🚀",
      category: "development",
      description: "Building high-performance APIs with automatic interactive documentation.",
    },
    {
      name: "UI/UX Design",
      icon: "🎨",
      category: "design",
      description: "Creating intuitive user interfaces with focus on user experience.",
    },
  ]

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "ai", name: "AI & ML" },
    { id: "development", name: "Development" },
    { id: "design", name: "Design" },
  ]

  const filteredSkills = activeCategory === "all" ? skills : skills.filter((skill) => skill.category === activeCategory)

  useEffect(() => {
    // Add the glow effect to the container
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect()
      const x = e.clientX - left
      const y = e.clientY - top

      // Calculate position in percentage
      const xPercent = Math.round((x / width) * 100)
      const yPercent = Math.round((y / height) * 100)

      // Apply the radial gradient as a background
      container.style.background = `
        radial-gradient(
          circle at ${xPercent}% ${yPercent}%, 
          rgba(255, 127, 0, 0.15), 
          rgba(17, 17, 17, 1) 50%
        )
      `
    }

    container.addEventListener("mousemove", handleMouseMove)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section id="skills" className="py-20">
      <h2 className="section-title">Skills</h2>

      <div
        ref={containerRef}
        className="relative bg-muted rounded-2xl p-10 mt-8 min-h-[500px] border border-[rgba(255,127,0,0.2)] overflow-hidden transition-all duration-500"
      >
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-[rgba(255,255,255,0.1)] text-white hover:bg-[rgba(255,127,0,0.3)]"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills visualization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className={`p-5 rounded-xl border transition-all duration-300 ${
                activeSkill === skill
                  ? "bg-[rgba(255,127,0,0.1)] border-primary"
                  : "bg-[rgba(0,0,0,0.2)] border-transparent hover:border-[rgba(255,127,0,0.3)]"
              }`}
              onMouseEnter={() => setActiveSkill(skill)}
              onMouseLeave={() => setActiveSkill(null)}
            >
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-[rgba(255,127,0,0.2)] flex items-center justify-center mr-4 text-2xl">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-medium">{skill.name}</h3>
              </div>

              <div
                className={`text-sm text-muted-foreground transition-all duration-300 ${
                  activeSkill === skill ? "opacity-100 max-h-20" : "opacity-0 max-h-0 overflow-hidden"
                }`}
              >
                {skill.description}
              </div>

              {/* Animated particles */}
              {activeSkill === skill && (
                <>
                  <div className="absolute -top-2 right-0 w-2 h-2 rounded-full bg-primary animate-ping"></div>
                  <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 rounded-full bg-secondary animate-ping animation-delay-300"></div>
                  <div className="absolute bottom-0 right-1/2 w-1 h-1 rounded-full bg-primary animate-ping animation-delay-700"></div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Interactive skill details section */}
        <div className="mt-16 p-6 bg-black bg-opacity-50 rounded-xl border border-[rgba(255,127,0,0.3)] backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-4 text-primary">
            {activeSkill ? `${activeSkill.icon} ${activeSkill.name}` : "👨‍💻 My Technical Expertise"}
          </h3>
          <p className="text-muted-foreground">
            {activeSkill
              ? activeSkill.description
              : "Hover over any skill to see more details. My expertise spans across AI/ML and development technologies, with a focus on creating innovative solutions."}
          </p>
        </div>

        {/* Terminal-like footer */}
        <div className="font-mono text-muted-foreground mt-8 p-4 bg-[rgba(0,0,0,0.3)] rounded-lg border-l-[3px] border-primary overflow-hidden">
          <span className="text-primary mr-2.5">gautam@portfolio:~$</span>
          <span className="inline-block whitespace-nowrap overflow-hidden animate-typing">
            hover over skills to explore capabilities_
            <span className="animate-blink-caret"></span>
          </span>
        </div>
      </div>
    </section>
  )
}

