import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

// Import icons
import cIcon from "../assets/skills/c.png";
import CppIcon from "../assets/skills/CPP.png";
import JavaIcon from "../assets/skills/java.png";
import PythonIcon from "../assets/skills/Python.jpeg";
import FlutterIcon from "../assets/skills/flutter.png";
import JsIcon from "../assets/skills/JavaScript.png";
import CssIcon from "../assets/skills/css.png";
import HtmlIcon from "../assets/skills/html.png";
// import TailwindIcon from "../assets/skills/tailwind.png";
import ReactIcon from "../assets/skills/react.png";
import NodeIcon from "../assets/skills/node.png";
import ExpressIcon from "../assets/skills/Express.png";
import TsIcon from "../assets/skills/TypeScript.png";
import LinuxIcon from "../assets/skills/linux.jpeg";
import MongoIcon from "../assets/skills/mongodb.png";
import MySQLIcon from "../assets/skills/sql.png";
import PostgresqlIcon from "../assets/skills/Postgresql.png";
import GithubIcon from "../assets/skills/github.png";

const skills = [
  { name: "C", icon: cIcon },
  { name: "JAVA", icon: JavaIcon },
  { name: "C++", icon: CppIcon },
  { name: "Python", icon: PythonIcon },
  { name: "JavaScript", icon: JsIcon },
  { name: "Flutter", icon: FlutterIcon },
  { name: "HTML", icon: HtmlIcon },
  { name: "CSS", icon: CssIcon },
  // { name: "TailwindCSS", icon: TailwindIcon },
  { name: "React.Js", icon: ReactIcon },
  { name: "Node.Js", icon: NodeIcon },
  { name: "Express.Js", icon: ExpressIcon },
  { name: "TypeScript.Js", icon: TsIcon },
  { name: "Linux", icon: LinuxIcon },
  { name: "MongoDB", icon: MongoIcon },
  { name: "Postgresql", icon: PostgresqlIcon },
  { name: "MySQL", icon: MySQLIcon },
  { name: "Github", icon: GithubIcon },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          <span className="text-white">Skills</span> <span className="text-yellow-400">& Abilities</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 70,
              }}
            >
              <Card className="bg-background/90 border-border text-center hover:scale-105 transition-transform duration-300 shadow-md">
                <CardContent className="flex flex-col items-center justify-center p-4 gap-3">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-24 aspect-square object-contain mx-auto"
                  />
                  <p className="text-sm font-medium text-foreground">{skill.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
