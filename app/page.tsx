"use client"

import { useEffect, useRef } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Home() {
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div
        ref={(el) => {
          if (el) sectionRefs.current["hero"] = el
        }}
      >
        <Hero />
      </div>
      <div
        ref={(el) => {
          if (el) sectionRefs.current["about"] = el
        }}
      >
        <About />
      </div>
      <div
        ref={(el) => {
          if (el) sectionRefs.current["skills"] = el
        }}
      >
        <Skills />
      </div>
      <div
        ref={(el) => {
          if (el) sectionRefs.current["projects"] = el
        }}
      >
        <Projects />
      </div>
      <div
        ref={(el) => {
          if (el) sectionRefs.current["contact"] = el
        }}
      >
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
