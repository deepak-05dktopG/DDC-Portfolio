import React from "react";
import { motion } from "framer-motion";
import CircularGallery from "../ui/CircularGallery";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Importing images from assets
import blufinsImg from "../../images/project-blufins.png";
import qualitypicksImg from "../../images/project-qualitypicks.png";
import weatherImg from "../../images/project-weather.png";
import automationImg from "../../images/project-automation.png";
import skillmatchImg from "../../images/project-skillmatch.png";

const FeaturedProjects = () => {
    const projects = [
        {
            text: "Blufins Aquatic",
            image: blufinsImg,
            desc: "Business website for aquatic solutions.",
            link: "https://blufinsaquatics.netlify.app/"
        },
        {
            text: "QualityPicks",
            image: qualitypicksImg,
            desc: "Full-stack product discovery platform.",
            link: "https://qualitypicks.vercel.app/"
        },
        {
            text: "Weather Live",
            image: weatherImg,
            desc: "Real-time weather forecasting app.",
            link: "https://ddcweather.netlify.app/"
        },
        {
            text: "AI Automation",
            image: automationImg,
            desc: "LLM-driven workflow automation.",
            link: "https://qualitypicks.vercel.app/"
        },
        {
            text: "SkillMatch AI",
            image: skillmatchImg,
            desc: "AI job role predictor system.",
            link: "https://skill-match-ai.netlify.app/"
        }
    ];

    return (
        <section id="featured-projects" className="py-24 relative overflow-hidden bg-black z-10">
            <div className="max-w-7xl mx-auto px-4 mb-16 text-center relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-xl md:text-3xl font-mono text-primary tracking-[0.3em] mb-4 uppercase">
                        Work // Portfolio
                    </h2>
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
                        Featured <span className="text-primary italic">Projects</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Explore a curated selection of my most impactful projects, blending cutting-edge 
                        <span className="text-white"> Web Development</span> with 
                        <span className="text-white"> AI Intelligence</span>.
                    </p>
                </motion.div>
            </div>

            {/* Circular Gallery Container */}
            <div className="relative w-full h-[600px] cursor-grab active:cursor-grabbing">
                <CircularGallery 
                    items={projects}
                    bend={1.5}
                    textColor="#ffffff"
                    scrollSpeed={1.5}
                    scrollEase={0.05}
                />
            </div>

            {/* Bottom Call to Action */}
            <div className="mt-16 text-center">
                <Link to="/about">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center gap-2 mx-auto px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-bold hover:bg-white/10 transition-all"
                    >
                        Explore All Projects
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </Link>
            </div>

            {/* Decorative Grid Background */}
            <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
            </div>
        </section>
    );
};

export default FeaturedProjects;
