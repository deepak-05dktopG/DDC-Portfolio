import React, { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { MagicCard } from "../magicui/magic-card";
import ShineBorder from "../magicui/shine-border";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { FadeInSection, StaggeredList, ScaleOnScroll, CounterAnimation } from "../ui/gsap-animations";
import { Github, Linkedin, Mail, ExternalLink, Database, Code, Server, Bot, Wrench, Sparkles, Rocket, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Aboutme = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll();
    const scaleProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        // Smooth scroll behavior
        document.documentElement.style.scrollBehavior = 'smooth';

        // Hero parallax effect
        if (heroRef.current) {
            gsap.to(heroRef.current, {
                yPercent: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                }
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const stats = [
        { label: "Projects Completed", value: 15, suffix: "+" },
        { label: "Technologies Mastered", value: 30, suffix: "+" },
        { label: "Lines of Code", value: 50, suffix: "K+" },
        { label: "Coffee Cups", value: 200, suffix: "+" }
    ];

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
            category: "Full-Stack"
        },
        {
            title: "QualityPicks â€“ Product Discovery Platform",
            desc: "A full-stack product discovery platform that allows users to browse, search, and filter products across categories with secure access and fast performance.",
            tags: ["MERN", "Filtering", "Search", "JWT", "Full-Stack"],
            link: "https://qualitypicks.vercel.app/",
            category: "Full-Stack"
        },
        {
            title: "Weather App â€“ Live Forecasting",
            desc: "A real-time weather forecasting application displaying temperature, humidity, wind data, and location-based conditions with an optimized, responsive UI.",
            tags: ["React", "API Integration", "OpenWeather API", "Responsive UI"],
            link: "https://ddcweather.netlify.app/",
            category: "Frontend"
        },
        {
            title: "AI Automation Workflows",
            desc: "Automated workflows using AI triggers, webhooks, and LLMs to AI Agents, AI Chatbots, generate emails, summarize content, process text, and perform real-time automated tasks.",
            tags: ["API", "LangChain", "n8n", "Automation", "LLM"],
            link: "https://qualitypicks.vercel.app/",
            category: "AI"
        },
        {
            title: "SkillMatch AI â€“ Smart Job Role Predictor",
            desc: "An AI-powered system that analyzes user skills and automatically suggests suitable job roles using prompt engineering, automation flows, and LLM-based logic.",
            tags: ["AI", "LLM", "Automation", "Skill Analysis", "Prompt Engineering", "Python Fast-API"],
            link: "https://skill-match-ai.netlify.app/",
            category: "AI"
        }
    ];


