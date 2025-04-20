
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { name: "Frontend Development", description: "React, TypeScript, Tailwind CSS" },
  { name: "Backend Development", description: "Node.js, Python, Databases" },
  { name: "UI/UX Design", description: "Figma, User Research, Prototyping" },
  { name: "DevOps", description: "Git, Docker, CI/CD" },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name} className="hover:scale-105 transition-transform duration-300 border-border bg-secondary/30">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2 text-foreground">{skill.name}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
