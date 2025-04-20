import { motion } from "framer-motion";

const AnimatedPages = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-8">
        <h1>Welcome to the Animated Page</h1>
        <p>This is the animated page content.</p>
      </div>
    </motion.section>
  );
};

export default AnimatedPages;
