import Link from "next/link"
import { Mail, Phone, Linkedin, Github } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <h2 className="section-title">Contact</h2>
      <div className="bg-muted rounded-xl p-12 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10">
          <div>
            <h3 className="text-xl font-bold mb-5 text-primary">Navigation</h3>
            <ul className="list-none">
              <li className="mb-4">
                <Link
                  href="/"
                  className="text-white no-underline transition-colors duration-300 hover:text-primary block"
                >
                  Home
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="#projects"
                  className="text-white no-underline transition-colors duration-300 hover:text-primary block"
                >
                  Projects
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="#skills"
                  className="text-white no-underline transition-colors duration-300 hover:text-primary block"
                >
                  Skills
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="#experience"
                  className="text-white no-underline transition-colors duration-300 hover:text-primary block"
                >
                  Experience
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="#education"
                  className="text-white no-underline transition-colors duration-300 hover:text-primary block"
                >
                  Education
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-5 text-primary">Get in Touch</h3>
            <p className="mb-8">
              I'm currently looking to join a cross-functional team that values improving people's lives through
              accessible design, or have a project in mind? Let's connect!
            </p>
            <div className="flex items-center mb-4 hover:transform hover:translate-x-2 transition-transform duration-300">
              <span className="text-secondary mr-4">
                <Mail size={24} className="animate-pulse" />
              </span>
              <a
                href="mailto:gautm.shah1404@gmail.com"
                className="text-white no-underline transition-colors duration-300 hover:text-secondary"
              >
                gautm.shah1404@gmail.com
              </a>
            </div>
            <div className="flex items-center mb-4 hover:transform hover:translate-x-2 transition-transform duration-300">
              <span className="text-secondary mr-4">
                <Phone size={24} className="animate-pulse" />
              </span>
              <a
                href="tel:+918511854391"
                className="text-white no-underline transition-colors duration-300 hover:text-secondary"
              >
                +91 8511854391
              </a>
            </div>
            <div className="flex gap-4 mt-8">
              <a
                href="https://www.linkedin.com/in/gautam-shah-558090246"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[rgba(255,255,255,0.1)] rounded-full flex items-center justify-center text-white no-underline transition-all duration-300 hover:bg-primary hover:scale-110 hover:rotate-6"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[rgba(255,255,255,0.1)] rounded-full flex items-center justify-center text-white no-underline transition-all duration-300 hover:bg-primary hover:scale-110 hover:rotate-6"
                title="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

