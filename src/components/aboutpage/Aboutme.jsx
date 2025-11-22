import React from "react";
import { motion } from "framer-motion";
import { MagicCard } from "../magicui/magic-card";
import ShineBorder from "../magicui/shine-border";
import { Github, Linkedin, Mail, ExternalLink, Database, Code, Server, Bot, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const Aboutme = () => {
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
            link: "https://blufinsaquatics.netlify.app/"
        },
        {
            title: "QualityPicks – Product Discovery Platform",
            desc: "A full-stack product discovery platform that allows users to browse, search, and filter products across categories with secure access and fast performance.",
            tags: ["MERN", "Filtering", "Search", "JWT", "Full-Stack"],
            link: "https://qualitypicks.vercel.app/"
        },
        {
            title: "Weather App – Live Forecasting",
            desc: "A real-time weather forecasting application displaying temperature, humidity, wind data, and location-based conditions with an optimized, responsive UI.",
            tags: ["React", "API Integration", "OpenWeather API", "Responsive UI"],
            link: "https://ddcweather.netlify.app/"
        },
        {
            title: "AI Automation Workflows",
            desc: "Automated workflows using AI triggers, webhooks, and LLMs to AI Agents , AI Chatbots,  generate emails, summarize content, process text, and perform real-time automated tasks.",
            tags: ["API", "LangChain", "n8n", "Automation", "LLM"],
            link: "https://qualitypicks.vercel.app/"
        },
        {
            title: "SkillMatch AI – Smart Job Role Predictor",
            desc: "An AI-powered system that analyzes user skills and automatically suggests suitable job roles using prompt engineering, automation flows, and LLM-based logic.",
            tags: ["AI", "LLM", "Automation", "Skill Analysis", "Prompt Engineering", "Python Fast-API"],
            link: "https://skill-match-ai.netlify.app/"
        }

    ];


    return (
        <div className="min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto space-y-20">

            {/* About Section */}
            <section className="pt-2 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
                        About <span className="text-primary">Me</span>
                    </h2>
                    <div className="space-y-4 text-muted-foreground text-lg leading-relaxed ">
                        <p>
                            I’m someone who believes in <strong className="text-white">learning by doing</strong>. My journey started with frontend development using HTML, CSS, and JavaScript. Over time, I expanded into <strong className="text-white">React.js, Node.js, Express.js, and MongoDB</strong>, which led me into building complete full-stack applications.
                        </p>
                        <p>
                            Along the way, my interest in <strong className="text-white">Artificial Intelligence</strong> grew rapidly. Today, I’m focused on developing <span className="text-white">AI Agents</span>, <span className="text-white">Autonomous Workflows</span>, and <span className="text-white">RAG Pipelines</span>. My curiosity pushes me to try new tools, tackle challenging problems, and keep upgrading my skills every day.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <a href="https://github.com/deepak-05dktopG" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-primary/20 transition-colors text-white hover:text-primary">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/deepak-05dktopg/" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-primary/20 transition-colors text-white hover:text-primary">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:forwebdeepak@gmail.com" className="p-3 bg-white/5 rounded-full hover:bg-primary/20 transition-colors text-white hover:text-primary">
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-3xl opacity-20 rounded-full"></div>
                    <MagicCard className="p-8 border border-white/10 bg-card/50 backdrop-blur-xl flex flex-col gap-6">
                        <h3 className="text-2xl font-bold text-white">My Vision</h3>
                        <p className="text-muted-foreground">
                            I want to build <span className="text-white">intelligent systems</span> that make life simpler. My long-term vision is to become a <span className="text-primary font-bold">Full-Stack + AI Engineer</span> who can create smart automation tools, intelligent agents, and scalable full-stack products.
                        </p>
                        <div className="space-y-2 pt-2">
                            <h4 className="font-bold text-white">What Defines Me:</h4>
                            <ul className="space-y-1  text-muted-foreground">
                                <li className="flex items-center gap-2">🚀 Fast learner with a growth mindset</li>
                                <li className="flex items-center gap-2">💡 Problem solver who breaks down complex ideas</li>
                                <li className="flex items-center gap-2">🔥 Passionate about clean code & user-focused design</li>
                            </ul>
                        </div>
                    </MagicCard>
                </motion.div>
            </section>

            {/* Skills Section */}
            <section>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-white"
                >
                    Technical <span className="text-secondary">Strengths</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <MagicCard className="h-full p-6 border border-white/10 bg-card/30 hover:bg-card/50 transition-colors flex flex-col gap-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-white/5 rounded-lg">
                                        {skillGroup.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-white">{skillGroup.category}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((item, i) => (
                                        <span key={i} className="px-2 py-1 bg-white/5 rounded text-xs text-muted-foreground border border-white/5">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </MagicCard>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-white"
                >
                    Featured <span className="text-primary">Projects</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <ShineBorder
                                className="h-full w-full p-1 bg-card/30 rounded-2xl border-white/5"
                                color={["#00f3ff", "#bc13fe", "#ff0055"]}
                            >
                                <div className="h-full bg-card/80 backdrop-blur-xl rounded-xl p-6 flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                                        <a href={project.link}><ExternalLink className="text-muted-foreground group-hover:text-white transition-colors" size={20} /></a>
                                    </div>
                                    <p className="text-muted-foreground mb-6 flex-grow">{project.desc}</p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="text-xs font-mono text-secondary bg-secondary/10 px-2 py-1 rounded">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </ShineBorder>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="text-center pb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8">
                    Ready to <span className="text-primary">Collaborate?</span>
                </h2>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <Link to="/service" className="px-8 py-4 border border-white/10 rounded-lg text-white hover:bg-white/5 transition-colors font-bold text-xl">
                        View Services
                    </Link>
                    <Link to="/contact" className="px-8 py-4 border border-white/10 rounded-lg text-white hover:bg-white/5 transition-colors font-bold text-xl">
                        Contact
                    </Link>

                </div>
            </section>

        </div>
    );
};

export default Aboutme;
