import Link from "next/link"

export default function Header() {
  return (
    <header className="py-5 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-white no-underline">
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-pulse">
          GS
        </span>
      </Link>
      <nav>
        <ul className="flex list-none">
          <li className="ml-8">
            <Link
              href="/"
              className="text-white no-underline transition-all duration-300 hover:text-primary hover:translate-y-[-2px] inline-block"
            >
              Home
            </Link>
          </li>
          <li className="ml-8">
            <Link
              href="#projects"
              className="text-white no-underline transition-all duration-300 hover:text-primary hover:translate-y-[-2px] inline-block"
            >
              Projects
            </Link>
          </li>
          <li className="ml-8">
            <Link
              href="#skills"
              className="text-white no-underline transition-all duration-300 hover:text-primary hover:translate-y-[-2px] inline-block"
            >
              Skills
            </Link>
          </li>
          <li className="ml-8">
            <Link
              href="#contact"
              className="text-white no-underline transition-all duration-300 hover:text-primary hover:translate-y-[-2px] inline-block"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

