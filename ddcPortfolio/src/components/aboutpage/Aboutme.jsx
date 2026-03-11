import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MagicCard } from "../magicui/magic-card";
import ShineBorder from "../magicui/shine-border";
import LightRays from "../magicui/light-rays";
import LetterGlitch from "../magicui/letter-glitch";
import { Github, Linkedin, Mail, ExternalLink, Database, Code, Server, Bot, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollStack, { ScrollStackItem } from "../ui/ScrollStack";
import CircularGallery from "../ui/CircularGallery";

// Project images
import blufinsImg from "../../images/project-blufins.png";
import qualitypicksImg from "../../images/project-qualitypicks.png";
import weatherImg from "../../images/project-weather.png";
import automationImg from "../../images/project-automation.png";
import skillmatchImg from "../../images/project-skillmatch.png";

const Aboutme = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const scaleProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const skills = [
        {
            category: "Frontend Development",
            icon: <Code className="text-primary" />,
            items: [
                "React.js",
                "Vite",
                "JavaScript (ES6+)",
                "HTML5",
                "CSS3",
                "Bootstrap",
                "Responsive UI",
                "State Management",
                "API-driven UI"
            ]
        },
        {
            category: "Backend Development",
            icon: <Server className="text-secondary" />,
            items: [
                "Node.js",
                "Express.js",
                "REST API Development",
                "JWT Authentication",
                "MongoDB",
                "Mongoose",
                "MongoDB Aggregation",
                "Middleware & Error Handling"
            ]
        },
        {
            category: "AI & Automation",
            icon: <Bot className="text-accent" />,
            items: [
                "LLM APIs",
                "LangChain",
                "RAG Pipelines",
                "AI Agents",
                "n8n Automation",
                "Prompt Engineering",
                "Webhooks",
                "Model Context Protocol (MCP)",
            ]
        },
        {
            category: "Databases & Storage",
            icon: <Database className="text-blue-400" />,
            items: [
                "MongoDB",
                "Mongoose ODM",
                "NoSQL Design",
                "Indexing & Query Optimization",
                "Vector Databases (Pinecone)",
            ]
        },
        {
            category: "DevOps & Deployment",
            icon: <Wrench className="text-green-400" />,
            items: [
                "Git & GitHub",
                "GitHub Actions (CI/CD)",
                "Vercel",
                "Netlify",
                "Render",
                "Cloud Hosting",
            ]
        },
        {
            category: "Tools & Productivity",
            icon: <Wrench className="text-yellow-400" />,
            items: [
                "Postman",
                "VS Code",
                "Cursor AI",
                "GitHub Copilot",
                "Antigravity AI",
                "Figma",
                "Canva"
            ]
        }
    ];


    const projects = [
        {
            title: "Blufins Aquatic Solutions",
            desc: "A freelance MERN-based business website created for an aquatic solutions company, featuring product showcases, service listings, lead-capture forms, and a clean modern UI.",
            tags: ["MERN", "Business Website", "Full-Stack", "Responsive UI"],
            link: "https://blufinsaquatics.netlify.app/",
            image: blufinsImg
        },
        {
            title: "QualityPicks – Product Discovery Platform",
            desc: "A full-stack product discovery platform that allows users to browse, search, and filter products across categories with secure access and fast performance.",
            tags: ["MERN", "Filtering", "Search", "JWT", "Full-Stack"],
            link: "https://qualitypicks.vercel.app/",
            image: qualitypicksImg
        },
        {
            title: "Weather App – Live Forecasting",
            desc: "A real-time weather forecasting application displaying temperature, humidity, wind data, and location-based conditions with an optimized, responsive UI.",
            tags: ["React", "API Integration", "OpenWeather API", "Responsive UI"],
            link: "https://ddcweather.netlify.app/",
            image: weatherImg
        },
        {
            title: "AI Automation Workflows",
            desc: "Automated workflows using AI triggers, webhooks, and LLMs to AI Agents , AI Chatbots,  generate emails, summarize content, process text, and perform real-time automated tasks.",
            tags: ["API", "LangChain", "n8n", "Automation", "LLM"],
            link: "https://qualitypicks.vercel.app/",
            image: automationImg
        },
        {
            title: "SkillMatch AI – Smart Job Role Predictor",
            desc: "An AI-powered system that analyzes user skills and automatically suggests suitable job roles using prompt engineering, automation flows, and LLM-based logic.",
            tags: ["AI", "LLM", "Automation", "Skill Analysis", "Prompt Engineering", "Python Fast-API"],
            link: "https://skill-match-ai.netlify.app/",
            image: skillmatchImg
        }
    ];

    // Format for CircularGallery: { image, text }
    const galleryItems = projects.map(p => ({ image: p.image, text: p.title }));


    return (
        <div ref={containerRef} className="min-h-screen relative">
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary origin-left z-50"
                style={{ scaleX: scaleProgress }}
            />

            <div className="pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto space-y-20">

                {/* About Section */}
                <section className="pt-2 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.3 }}
                        className="space-y-6"
                    >
                        <motion.h2
                            className="text-4xl md:text-5xl font-heading font-bold text-white"
                            variants={{
                                offscreen: {
                                    x: -100,
                                    opacity: 0,
                                    scale: 0.5
                                },
                                onscreen: {
                                    x: 0,
                                    opacity: 1,
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        bounce: 0.6,
                                        duration: 1
                                    }
                                }
                            }}
                        >
                            About <motion.span
                                className="text-primary"
                                animate={{
                                    textShadow: [
                                        "0 0 8px hsl(var(--primary))",
                                        "0 0 16px hsl(var(--primary))",
                                        "0 0 8px hsl(var(--primary))"
                                    ]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >Me</motion.span>
                        </motion.h2>
                        <motion.div
                            className="space-y-4 text-muted-foreground text-lg leading-relaxed"
                            variants={{
                                offscreen: { opacity: 0 },
                                onscreen: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.3,
                                        delayChildren: 0.2
                                    }
                                }
                            }}
                        >
                            <motion.p
                                variants={{
                                    offscreen: { x: -50, opacity: 0 },
                                    onscreen: {
                                        x: 0,
                                        opacity: 1,
                                        transition: {
                                            type: "spring",
                                            stiffness: 100
                                        }
                                    }
                                }}
                            >
                                I'm someone who believes in <motion.strong
                                    className="text-white"
                                    whileHover={{
                                        scale: 1.1,
                                        color: "hsl(var(--primary))",
                                        transition: { duration: 0.2 }
                                    }}
                                    style={{ display: "inline-block" }}
                                >learning by doing</motion.strong>. My journey started with frontend development using HTML, CSS, and JavaScript. Over time, I expanded into <motion.strong
                                    className="text-white"
                                    whileHover={{
                                        scale: 1.05,
                                        color: "hsl(var(--secondary))",
                                        transition: { duration: 0.2 }
                                    }}
                                    style={{ display: "inline-block" }}
                                >React.js, Node.js, Express.js, and MongoDB</motion.strong>, which led me into building complete full-stack applications.
                            </motion.p>
                            <motion.p
                                variants={{
                                    offscreen: { x: -50, opacity: 0 },
                                    onscreen: {
                                        x: 0,
                                        opacity: 1,
                                        transition: {
                                            type: "spring",
                                            stiffness: 100
                                        }
                                    }
                                }}
                            >
                                Along the way, my interest in <motion.strong
                                    className="text-white"
                                    whileHover={{
                                        scale: 1.1,
                                        color: "hsl(var(--primary))",
                                        transition: { duration: 0.2 }
                                    }}
                                    style={{ display: "inline-block" }}
                                >Artificial Intelligence</motion.strong> grew rapidly. Today, I'm focused on developing <motion.span
                                    className="text-white"
                                    whileHover={{
                                        scale: 1.1,
                                        color: "hsl(var(--secondary))",
                                        transition: { duration: 0.2 }
                                    }}
                                    style={{ display: "inline-block" }}
                                >AI Agents</motion.span>, <motion.span
                                    className="text-white"
                                    whileHover={{
                                        scale: 1.1,
                                        color: "hsl(var(--secondary))",
                                        transition: { duration: 0.2 }
                                    }}
                                    style={{ display: "inline-block" }}
                                >Autonomous Workflows</motion.span>, and <motion.span
                                    className="text-white"
                                    whileHover={{
                                        scale: 1.1,
                                        color: "hsl(var(--secondary))",
                                        transition: { duration: 0.2 }
                                    }}
                                    style={{ display: "inline-block" }}
                                >RAG Pipelines</motion.span>. My curiosity pushes me to try new tools, tackle challenging problems, and keep upgrading my skills every day.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            className="flex gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <motion.a
                                href="https://github.com/deepak-05dktopG"
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 bg-white/5 rounded-full hover:bg-primary/20 transition-colors text-white hover:text-primary relative overflow-hidden"
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileHover={{ scale: 1, opacity: 0.2 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <Github size={24} className="relative z-10" />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/deepak-05dktopg/"
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 bg-white/5 rounded-full hover:bg-primary/20 transition-colors text-white hover:text-primary relative overflow-hidden"
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileHover={{ scale: 1, opacity: 0.2 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <Linkedin size={24} className="relative z-10" />
                            </motion.a>
                            <motion.a
                                href="mailto:forwebdeepak@gmail.com"
                                className="p-3 bg-white/5 rounded-full hover:bg-primary/20 transition-colors text-white hover:text-primary relative overflow-hidden"
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileHover={{ scale: 1, opacity: 0.2 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <Mail size={24} className="relative z-10" />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.3 }}
                        className="relative"
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-3xl opacity-20 rounded-full"
                            variants={{
                                offscreen: { scale: 0, opacity: 0 },
                                onscreen: {
                                    scale: 1,
                                    opacity: 0.2,
                                    transition: {
                                        type: "spring",
                                        bounce: 0.6,
                                        duration: 1.5
                                    }
                                }
                            }}
                        />
                        <motion.div
                            variants={{
                                offscreen: {
                                    rotateX: -90,
                                    opacity: 0,
                                    y: 100
                                },
                                onscreen: {
                                    rotateX: 0,
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        type: "spring",
                                        bounce: 0.4,
                                        duration: 1.2
                                    }
                                }
                            }}
                            whileHover={{
                                rotateX: 5,
                                scale: 1.02,
                                transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10
                                }
                            }}
                            style={{ perspective: 1000, transformStyle: "preserve-3d" }}
                        >
                            <MagicCard
                                className="overflow-hidden p-8 border border-white/10 bg-card/50 backdrop-blur-xl flex flex-col gap-6"
                                background={(
                                    <LightRays
                                        className="opacity-100"
                                        rayColor="hsl(var(--primary))"
                                        rayOpacity={0.55}
                                        rayCount={12}
                                        raySpeed={2.4}
                                        rayLength={1.4}
                                        noiseAmount={0.18}
                                        respectReducedMotion={false}
                                    />
                                )}
                            >
                                    <motion.h3
                                        className="text-2xl font-bold text-white"
                                        initial={{ x: -50, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.3, duration: 0.6 }}
                                    >
                                        My Vision
                                    </motion.h3>
                                    <motion.p
                                        className="text-muted-foreground"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.5, duration: 0.8 }}
                                    >
                                        I want to build <motion.span
                                            className="text-white"
                                            whileHover={{
                                                scale: 1.1,
                                                color: "hsl(var(--primary))",
                                                transition: { duration: 0.2 }
                                            }}
                                            style={{ display: "inline-block" }}
                                        >intelligent systems</motion.span> that make life simpler. My long-term vision is to become a <motion.span
                                            className="text-primary font-bold"
                                            style={{ display: "inline-block" }}
                                        >Full-Stack + AI Engineer</motion.span> who can create smart automation tools, intelligent agents, and scalable full-stack products.
                                    </motion.p>
                                    <motion.div
                                        className="space-y-2 pt-2"
                                        initial={{ y: 30, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.7, duration: 0.6 }}
                                    >
                                        <h4 className="font-bold text-white">What Defines Me:</h4>
                                        <ul className="space-y-2 text-muted-foreground">
                                            {[
                                                { emoji: "🚀", text: "Fast learner with a growth mindset" },
                                                { emoji: "💡", text: "Problem solver who breaks down complex ideas" },
                                                { emoji: "🔥", text: "Passionate about clean code & user-focused design" }
                                            ].map((item, i) => (
                                                <motion.li
                                                    key={i}
                                                    className="flex items-center gap-2"
                                                    initial={{ x: -30, opacity: 0 }}
                                                    whileInView={{ x: 0, opacity: 1 }}
                                                    transition={{
                                                        delay: 0.9 + i * 0.1,
                                                        type: "spring",
                                                        stiffness: 100
                                                    }}
                                                    whileHover={{
                                                        x: 10,
                                                        color: "hsl(var(--primary))",
                                                        transition: { duration: 0.2 }
                                                    }}
                                                >
                                                    <motion.span
                                                        whileHover={{
                                                            scale: 1.3,
                                                            rotate: 360,
                                                            transition: { duration: 0.5 }
                                                        }}
                                                        style={{ display: "inline-block" }}
                                                    >
                                                        {item.emoji}
                                                    </motion.span>
                                                    {item.text}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>
                            </MagicCard>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Skills Section */}
                <section>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-heading font-bold text-center mb- text-white"
                    >
                        Technical <span className="text-secondary">Strengths</span>
                    </motion.h2>

                    <div className="relative w-full ">
                        <ScrollStack 
                            itemDistance={80} 
                            itemScale={0.05} 
                            itemStackDistance={20} 
                            stackPosition="15%"
                            useWindowScroll={true}
                            className="bg-transparent"
                        >
                            {skills.map((skillGroup, index) => (
                                <ScrollStackItem key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        <MagicCard
                                            className="p-8 border border-white/10 bg-card/20 backdrop-blur-xl flex flex-col gap-6 min-h-[300px] max-w-3xl mx-auto shadow-2xl overflow-hidden"
                                            background={(
                                                <>
                                                    <LetterGlitch glitchSpeed={0.9} density={10.95} smooth={true} fontSize={13} />
                                                    <div className="absolute inset-0 bg-black/35" />
                                                </>
                                            )}
                                        >
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="p-3 bg-white/5 rounded-xl border border-white/10 shadow-inner">
                                                    {skillGroup.icon}
                                                </div>
                                                <h3 className="text-2xl font-bold text-white tracking-tight">{skillGroup.category}</h3>
                                            </div>
                                            
                                            <div className="flex flex-wrap gap-3">
                                                {skillGroup.items.map((item, i) => (
                                                    <motion.span
                                                        key={i}
                                                        className="px-4 py-2 bg-white/5 rounded-lg text-sm text-muted-foreground border border-white/10 hover:border-primary/50 hover:text-white transition-all duration-300"
                                                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                                    >
                                                        {item}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </MagicCard>
                                    </motion.div>
                                </ScrollStackItem>
                            ))}
                        </ScrollStack>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="overflow-hidden">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-white"
                    >
                        Featured <span className="text-primary">Projects</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-center text-muted-foreground text-sm tracking-widest font-mono uppercase"
                    >
                        Scroll or drag to explore
                    </motion.p>

                    {/* CSS 3D Circular Gallery with project cards */}
                    <div style={{ height: '400px', position: 'relative' }}>
                        <CircularGallery
                            items={projects}
                            bend={3}
                            textColor="#ffffff"
                            scrollSpeed={4}
                            scrollEase={0.05}
                        />
                    </div>
                </section>

                {/* CTA Section */}
                <motion.section
                    className="text-center pb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8">
                        Ready to <span className="text-primary">Collaborate?</span>
                    </h2>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link to="/service" className="px-8 py-4 border border-white/10 rounded-lg text-white hover:bg-white/5 transition-colors font-bold text-xl inline-block">
                                View Services
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-white hover:opacity-90 transition-opacity font-bold text-xl inline-block">
                                Contact Me
                            </Link>
                        </motion.div>
                    </div>
                </motion.section>

            </div>
        </div>
    );
};

export default Aboutme;