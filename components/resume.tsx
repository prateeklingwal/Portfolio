"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, FileText } from "lucide-react"

export function Resume() {
  return (
    <section id="resume" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Resume</h2>
            <div className="w-12 h-1 bg-accent rounded-full mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Download my comprehensive resume to learn more about my academic background, technical skills, and project
              experience.
            </p>
          </div>

          <Card className="border-border/50">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center">
                    <FileText className="h-8 w-8 text-accent" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold">Prateek Lingwal - Resume</h3>
                    <p className="text-muted-foreground">Computer Science Engineering Student</p>
                    <p className="text-sm text-muted-foreground">Last updated: November 2025 • PDF Format</p>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="flex items-center gap-2 px-8"
                  asChild
                >
                  <a 
                    href="/resume.pdf" 
                    download="Prateek_Lingwal_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              For any questions about my background or experience, feel free to{" "}
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="text-accent hover:underline"
              >
                reach out directly
              </button>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
