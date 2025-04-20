
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-semibold text-primary">Portfolio</a>
        <div className="space-x-4">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <Button
              key={item}
              variant="ghost"
              className="hover:bg-secondary/50"
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
