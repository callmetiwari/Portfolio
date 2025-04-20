
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Get in Touch</h2>
        <Card className="max-w-lg mx-auto border-border bg-secondary/30">
          <CardContent className="p-6">
            <form className="space-y-4">
              <div>
                <Input placeholder="Your Name" className="bg-secondary/20 border-border" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" className="bg-secondary/20 border-border" />
              </div>
              <div>
                <Textarea 
                  placeholder="Your Message" 
                  className="min-h-[150px] bg-secondary/20 border-border" 
                />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
