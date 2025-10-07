"use client"

import { motion } from "framer-motion"
import { Award, Trophy, Star, Medal } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "Academic Excellence Award",
    description: "Recognized for outstanding performance in Computer Science Engineering with a CGPA of 8.5+",
    year: "2023",
  },
  {
    icon: Award,
    title: "Best Project Award",
    description: "Won first place in college tech fest for AI-based Job Finder application",
    year: "2023",
  },
  {
    icon: Star,
    title: "Coding Competition Winner",
    description: "Secured top position in inter-college programming competition",
    year: "2022",
  },
  {
    icon: Medal,
    title: "Open Source Contributor",
    description: "Active contributor to multiple open-source projects with 50+ contributions",
    year: "2023",
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Achievements & Recognition</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Milestones and accomplishments that reflect my dedication to excellence in technology and academics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-card border border-border rounded-lg p-6 h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{achievement.title}</h3>
                        <span className="text-sm text-muted-foreground font-mono">{achievement.year}</span>
                      </div>
                      <p className="text-muted-foreground text-pretty">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
