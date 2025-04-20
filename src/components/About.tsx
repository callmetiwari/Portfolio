
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-6">
            <p className="text-gray-600 leading-relaxed">
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
