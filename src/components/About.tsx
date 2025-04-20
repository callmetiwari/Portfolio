
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">About Me</h2>
        <Card className="max-w-3xl mx-auto border-border bg-secondary/20">
          <CardContent className="p-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate developer with expertise in building modern web applications. 
              With a strong foundation in both frontend and backend development, 
              I create elegant solutions that solve real-world problems.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
