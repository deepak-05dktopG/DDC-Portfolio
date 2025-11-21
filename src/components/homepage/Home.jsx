import React from "react";
import { motion } from "framer-motion";
import WordRotate from "../magicui/word-rotate";
import ShineBorder from "../magicui/shine-border";
import Hero3D from "./Hero3D";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";

const Home = () => {
  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#00f3ff", "#bc13fe", "#ff0055"],
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Hero3D />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-5xl font-mono text-primary tracking-widest mb-4">
            SYSTEM ONLINE // WELCOME USER
          </h2>

          <h1 className="text-4xl md:text-8xl lg:text-5xl font-heading font-bold text-white tracking-tighter mb-6 relative inline-block group">
            <span className="relative z-10">DEEPAKKUMAR</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-primary opacity-0 group-hover:opacity-100 animate-glitch-1">DEEPAKKUMAR</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-secondary opacity-0 group-hover:opacity-100 animate-glitch-2">DEEPAKKUMAR</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-accent opacity-0 group-hover:opacity-100 animate-pulse">DEEPAKKUMAR</span>
          </h1>

          <div className=" overflow-hidden mb-8">
            <WordRotate
              className="text-3xl md:text-5xl font-bold text-secondary"
              words={[
                "Full-Stack Developer",
                "AI Enthusiast",
                "Agentic Workflow Architect",
                "MERN Stack Expert",
              ]}
            />
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Building the future with <span className="text-white font-bold">Intelligent Systems</span> and <span className="text-white font-bold">Scalable Web Applications</span>.
            Turning complex problems into elegant, automated solutions.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link to="/about">
              <button
                onClick={handleConfetti}
                className="px-8 py-4 border border-white/10 rounded-lg text-white hover:bg-white/5 transition-colors font-bold text-xl flex items-center gap-2"
              >
                About Me
              </button>
            </Link>

            <Link to="/contact">
              <button
                onClick={handleConfetti}
                className="px-8 py-4 border border-white/10 rounded-lg text-white hover:bg-white/5 transition-colors font-bold text-xl flex items-center gap-2"
              >
                Contact Me
              </button>
            </Link>
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <Link to="/about">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
