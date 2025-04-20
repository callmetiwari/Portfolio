
import { Button } from "@/components/ui/button";
import { useTypewriter } from "@/hooks/useTypewriter";

export const Hero = () => {
  const typedText = useTypewriter("Hi, I'm Shashank Tiwari", 100);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary/20 to-background pt-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary/60 bg-clip-text text-transparent">
          {typedText}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in delay-200">
          Full Stack Developer & Designer
        </p>
        <Button
          size="lg"
          className="animate-fade-in delay-300"
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Get in Touch
        </Button>
      </div>
    </section>
  );
};
