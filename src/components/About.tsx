import { Card, CardContent } from "@/components/ui/card";
import { Typewriter } from "react-simple-typewriter";
 import ProfileImg from "../assets/Profile.jpeg";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">About Me</h2>
        <Card className="max-w-4xl mx-auto border-border bg-secondary/20">
          <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-center">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img
                src={ProfileImg}
                alt="Profile"
                className="w-full v-49 h-44 object-contain "
              />
            </div>

            {/* About Text */}
            <div className="text-muted-foreground leading-relaxed text-lg whitespace-pre-line">
              <Typewriter
                words={[
                  `Hi, I'm a passionate full-stack developer with a knack for crafting modern, intuitive, and impactful web applications.
With solid experience in both frontend and backend development, I enjoy building seamless user experiences and robust systems behind the scenes.
I take pride in writing clean, efficient code and creating elegant solutions that address real-world challenges.
Whether it’s designing a responsive UI, optimizing performance, or building secure APIs — I bring ideas to life with technology.
On top of that, I'm an avid competitive programmer with 1850+ rating on LeetCode (Knight) and 3⭐ on CodeChef, with 1000+ problems solved across platforms — which sharpens my problem-solving, algorithmic thinking, and efficiency under pressure.
Let’s build something great together.`,
                ]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={30}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
