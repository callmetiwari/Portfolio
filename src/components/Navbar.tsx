
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-secondary/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-semibold text-foreground">Portfolio</a>
        <div className="space-x-4">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <Button
              key={item}
              variant="ghost"
              className="hover:bg-accent/50 text-foreground"
              onClick={() => {
                document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};
