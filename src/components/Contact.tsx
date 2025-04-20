import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("All fields are required.");
      return;
    }
    
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    const serviceId = "service_56r7eje";
    const templateId = "template_denhq7f";
    const publicKey = "tbV7lK9Mn6tfhxLTO";
  
    const templateParams = {
    
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };
      console.log(templateParams);

   try {
    await emailjs.send(serviceId, templateId, templateParams, publicKey);
    setSuccessMessage("Your message has been sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    console.error("EmailJS Error:", error);
    setErrorMessage("Failed to send message. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
  };

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Get in Touch</h2>
        <Card className="max-w-lg mx-auto border-border bg-secondary/30 shadow-lg">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="bg-secondary/20 border-border focus:ring-2 focus:ring-primary/60"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="bg-secondary/20 border-border focus:ring-2 focus:ring-primary/60"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="min-h-[150px] bg-secondary/20 border-border focus:ring-2 focus:ring-primary/60"
                />
              </div>
              {errorMessage && (
                <p className="text-red-500 text-sm">{errorMessage}</p>
              )}
              {successMessage && (
                <p className="text-green-500 text-sm">{successMessage}</p>
              )}
              <Button
                type="submit"
                className="w-full py-3 text-lg bg-primary hover:bg-primary/80 focus:outline-none focus:ring-4 focus:ring-primary/60"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className="mt-8 text-center">
          <p className="text-lg">
            You can also reach me directly at{" "}
            <a
              href="mailto:shashanktiwari3101@gmail.com"
              className="text-primary hover:underline"
            >
              shashanktiwari3101@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
