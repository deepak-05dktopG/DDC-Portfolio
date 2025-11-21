import React from "react";
import { motion } from "framer-motion";
import { MagicCard } from "../magicui/magic-card";
import ShineBorder from "../magicui/shine-border";
import { Github, Linkedin, Mail, ExternalLink, Code, Server, Bot, Wrench } from "lucide-react";

const Aboutme = () => {
    const skills = [
        {
            category: "Frontend Development",
            icon: <Code className="text-primary" />,
            items: ["React", "Vite", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap", "State Management", "API Integration"]
        },
        {
            category: "Backend Development",
            icon: <Server className="text-secondary" />,
            items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "MongoDB", "Mongoose", "File Uploads", "Cron Jobs"]
        },
        {
            category: "AI & Automation",
            icon: <Bot className="text-accent" />,
            items: ["OpenAI API", "LangChain", "RAG Chatbots", "n8n Automation", "Python Basics", "Prompt Engineering", "AI Agents"]
        },
        {
            category: "Tools & Workflow",
            icon: <Wrench className="text-green-400" />,
            items: ["Git", "GitHub", "VS Code", "Postman", "Cloud Hosting", "Deployment"]
        }
    ];

    const projects = [
        {
            title: "Affiliate E-commerce Website",
            desc: "A complete MERN stack application where users can register, browse products, and receive email updates on new additions.",
            tags: ["MERN", "Redux", "Email Notifications"]
        },
        {
            title: "AI Chatbots + RAG Systems",
            desc: "Intelligent chatbots trained on PDFs or custom data using OpenAI & LangChain for precise information retrieval.",
            tags: ["OpenAI", "LangChain", "RAG", "Vector DB"]
        },
        {
            title: "Cloud Collaboration Tool",
            desc: "Real-time collaboration platform featuring file sharing and productivity tools for seamless teamwork.",
            tags: ["MERN", "Socket.io", "Real-time"]
        },
        {
            title: "React Frontend E-Commerce",
            desc: "A visually stunning and responsive e-commerce interface with clean UI, smooth navigation, and reusable components.",
            tags: ["React", "UI/UX", "Responsive"]
        },
        {
            title: "Weather App",
            desc: "A modern weather application providing live updates using weather APIs, built with a focus on UI/UX.",
            tags: ["React", "API Integration", "Modern UI"]
        }
    ];

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto space-y-20">

            {/* About Section */}
            <section className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
                        About <span className="text-primary">Me</span>
                    </h2>
                    <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                        <p>
                            I’m someone who believes in <strong className="text-white">learning by doing</strong>. My journey started with frontend development using HTML, CSS, and JavaScript. Over time, I expanded into <strong className="text-white">React.js, Node.js, Express.js, and MongoDB</strong>, which led me into building complete full-stack applications.
                        </p>
                        <p>
                            Along the way, my interest in <strong className="text-secondary">Artificial Intelligence</strong> grew rapidly. Today, I’m focused on developing <span className="text-secondary">AI Agents</span>, <span className="text-secondary">Autonomous Workflows</span>, and <span className="text-secondary">RAG Pipelines</span>. My curiosity pushes me to try new tools, tackle challenging problems, and keep upgrading my skills every day.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <a href="https://github.com/deepak-05dktopG" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-primary/20 transition-colors text-white hover:text-primary">
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-primary/20 transition-colors text-white hover:text-primary">
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
                        <div className="space-y-2">
                            <h4 className="font-bold text-white">What Defines Me:</h4>
                            <ul className="space-y-1 text-sm text-muted-foreground">
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
                                        <ExternalLink className="text-muted-foreground group-hover:text-white transition-colors" size={20} />
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

        </div>
    );
};

export default Aboutme;
