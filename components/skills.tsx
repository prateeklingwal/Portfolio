import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "SQL","C-language"],
    },
    {
      title: "AI/ML Technologies",
      skills: ["TensorFlow", "SpaCy","Scikit-learn", "Keras", "NLTK", "Pandas", "NumPy"],
    },
    {
      title: "Web Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React"],
    },
    {
      title: "Tools & Platforms",
      skills: ["VSCode", "Git", "GitHub", "Linux", "Jupyter", "Google Colab", "AWS"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Expertise</h2>
            <div className="w-12 h-1 bg-accent rounded-full mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive skill set spanning multiple domains of computer science and software engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border-border/50 hover:border-accent/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-sm font-medium">
                        {skill}
                      </Badge>
                    ))}
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
