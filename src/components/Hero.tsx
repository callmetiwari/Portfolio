
import { Button } from "@/components/ui/button";
import { useTypewriter } from "@/hooks/useTypewriter";
import { ParticleBackground } from "./ParticleBackground";
import { Sparkles } from "lucide-react";

export const Hero = () => {
  const typedText = useTypewriter("Hi, I'm Shashank Tiwari", 100);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-900/20 via-background to-background pt-16 overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            {typedText}
            <span className="inline-block animate-pulse ml-1">|</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in delay-200 glass-morphism p-4 rounded-lg max-w-2xl mx-auto">
            Full Stack Developer & Designer
          </p>
          <Button
            size="lg"
            className="animate-fade-in delay-300 glass-morphism group hover:scale-105 transition-transform duration-300"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Sparkles className="mr-2 group-hover:rotate-12 transition-transform" />
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};
