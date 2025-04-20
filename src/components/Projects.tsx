import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import CodeMateImg from "../assets/CodeMate.jpeg";
import ExpensesImg from "../assets/Expenses.png";
import StockImg from "../assets/StockPrice.png";
import WhiteBoardImg from "../assets/WhiteBoard.jpeg";
import WanderLustImg from "../assets/WanderLustImg.png";
import WeatherImg from "../assets/WeatherImg.png";

const projects = [
  {
    title: "CodeMate",
    description: "A modern web application built with React and TypeScript",
    image: CodeMateImg,
  },
  {
    title: "Digital-WhiteBoard",
    description: "Full-stack application with real-time features",
    image: WhiteBoardImg,
  },
  {
    title: "Stock Price Predictor",
    description: "Full-stack application with real-time features",
    image: StockImg,
  },
  {
    title: "Wander Lust",
    description: "Full-stack application with real-time features",
    image: WanderLustImg,
  },
  {
    title: "Weather App",
    description: "Full-stack application with real-time features",
    image: WeatherImg,
  },
  {
    title: "Expenses Management App",
    description: "Full-stack application with real-time features",
    image: ExpensesImg,
  },
];

export const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 70,
              }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-border bg-secondary/20">
                <div className="flex justify-center items-center h-50 bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <Button variant="outline" className="w-full border-border">
                    View Project
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
