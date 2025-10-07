export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
            <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a 3rd-year Computer Science Engineering student with an interest in software development and 
              problem-solving. I enjoy learning new technologies and working on small projects that improve my skills.
            </p>

            <p>
              I'm currently exploring Python, Java, and front-end technologies while building projects to gain practical experience.
            </p>

            <p>
              My goal is to become a skilled developer who can work on real-world applications and keep learning through hands-on experience.
              I like to keep things simple and focus on improving step by step. I believe consistency matters more than perfection.
            </p>

            <p>
              Beyond academics, I actively engage in practical projects that bridge theoretical knowledge with
              real-world applications, constantly seeking opportunities to apply AI/ML concepts to solve meaningful
              problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
