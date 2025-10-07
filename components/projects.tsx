import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Projects() {
  const projects = [
    {
      title: "House Price Prediction System",
      description:
        "Developed a comprehensive machine learning model using regression algorithms to predict real estate prices based on multiple features including location, size, amenities, and market trends. Implemented data preprocessing, feature engineering, and model optimization techniques.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      category: "Machine Learning",
    },
    {
      title: "AI-based Job Finder Platform",
      description:
        "Created an intelligent job matching system that leverages natural language processing and machine learning algorithms to match candidates with suitable job opportunities. Features include resume parsing, skill extraction, and personalized job recommendations.",
      technologies: ["Python", "NLP", "TensorFlow", "Flask", "MongoDB"],
      category: "AI/ML Application",
    },
    {
      title: "Intelligent Telegram Bot",
      description:
        "Built a sophisticated chatbot using natural language processing capabilities to provide automated customer support and information retrieval. Integrated with external APIs and implemented conversation flow management with context awareness.",
      technologies: ["Python", "Telegram API", "NLTK", "SQLite", "REST APIs"],
      category: "Automation",
    },
    {
      title: "Eco-tourism Platform",
      description:
        "Developed a full-stack web application promoting sustainable tourism with features including destination discovery, carbon footprint calculation, eco-friendly accommodation booking, and community-driven content sharing for environmentally conscious travelers.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Google API"],
      category: "Web Development",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
            <div className="w-12 h-1 bg-accent rounded-full mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of innovative projects demonstrating practical application of AI/ML concepts and software
              engineering principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                      <CardTitle className="text-xl font-semibold leading-tight">{project.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
