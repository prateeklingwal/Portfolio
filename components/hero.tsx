"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <div className="w-32 h-32 mx-auto rounded-full bg-muted flex items-center justify-center mb-8">
            <img
              src="/Photo.jpg"
              alt="Prateek Lingwal"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">Prateek Lingwal</h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            AI/ML Enthusiast & Computer Science Student
          </p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about leveraging artificial intelligence and machine learning to solve complex problems and
            create innovative solutions for the future.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="px-8" onClick={scrollToAbout}>
            Explore My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 bg-transparent"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
