import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Instagram, ExternalLink } from "lucide-react"

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "prateeklingwal007@gmail.com",
      href: "mailto:prateeklingwal007@gmail.com",
      description: "Get in touch for tech discussions, projects, or collaboration.",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/prateek-lingwal-337312318",
      href: "http://www.linkedin.com/in/prateek-lingwal-337312318",
      description: "Connect with me for professional networking and updates",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/prateeklingwal",
      href: "https://github.com/prateeklingwal",
      description: "Explore my code repositories and open-source contributions",
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "instagram.com/pratiklingwal",
      href: "https://www.instagram.com/pratiklingwal/",
      description: "Follow my journey and behind-the-scenes content",
    },
  ]

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let's Connect</h2>
            <div className="w-12 h-1 bg-accent rounded-full mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities, innovative projects, and collaborations in the
              field of AI/ML and software development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <Card
                  key={index}
                  className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-lg font-semibold">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{method.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full flex items-center gap-2 bg-transparent"
                      asChild
                    >
                      <a href={method.href} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        {method.title === "Email" ? "Send Email" : `Visit ${method.title}`}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center pt-8">
            <p className="text-muted-foreground">
              Thank you for visiting my portfolio. I look forward to connecting with you!
            </p>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-border/50">
        <div className="text-center text-sm text-muted-foreground">
          <p>© 2024 Prateek Lingwal. All rights reserved.</p>
        </div>
      </footer>
    </section>
  )
}
