import React from "react";
import { motion } from "framer-motion";
import { MagicCard } from "../magicui/magic-card";
import { Bot, Code, MessageSquare, PenTool, Cpu, Globe,Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Service = () => {
  const services = [
    {
      id: 1,
      domain: "AI Agents",
      icon: <Bot size={40} className="text-primary" />,
      categories: [
        { title: "Workflow Automation", content: "Automating repetitive tasks to save time and reduce errors." },
        { title: "Customer Support Agents", content: "AI-driven support to handle queries 24/7." },
        { title: "Content Generation Bots", content: "Generating high-quality content for blogs and social media." },
        { title: "Personal Assistant Bots", content: "Managing schedules, emails, and personal tasks." }
      ]
    },
    {
      id: 2,
      domain: "Web Development",
      icon: <Code size={40} className="text-secondary" />,
      categories: [
        { title: "Business Websites", content: "Professional sites to showcase products and services." },
        { title: "Portfolio Websites", content: "Personal branding sites for creatives and professionals." },
        { title: "E-commerce Websites", content: "Online stores with secure payment gateways." },
        { title: "Blog Websites", content: "Platforms for sharing insights and stories." }
      ]
    },
    {
      id: 3,
      domain: "AI Tools & Creative Automation",
      icon: <Sparkles size={40} className="text-primary" />,
      categories: [
        { title: "AI Advertisement Creation", content: "Designing high-converting ads using AI for social media and digital marketing campaigns." },
        { title: "AI Image Generation", content: "Creating stunning visuals, posters, and brand assets using AI image generators." },
        { title: "AI Video Editing & Reels", content: "Automating video editing, captions, and transitions for reels, ads, and promotional videos." },
        { title: "AI Copywriting", content: "Writing persuasive ad copies, captions, and product descriptions powered by AI tools." },
        { title: "AI Logo & Branding", content: "Generating creative logo designs, color palettes, and brand identities using AI." },
        { title: "AI Voice & Speech Tools", content: "Producing voiceovers, podcasts, and ad narrations with natural-sounding AI voices." }
      ]
    },
    {
      id: 4,
      domain: "Chatbot Development",
      icon: <MessageSquare size={40} className="text-accent" />,
      categories: [
        { title: "Website Chatbots", content: "Integrated assistants for real-time user help." },
        { title: "WhatsApp Chatbots", content: "Automated communication via WhatsApp API." },
        { title: "AI-Powered Chatbots", content: "NLP-based bots that understand user intent." },
        { title: "Hybrid Chatbots", content: "Combining rule-based logic with AI capabilities." }
      ]
    },
    {
      id: 5,
      domain: "Graphic Design",
      icon: <PenTool size={40} className="text-purple-400" />,
      categories: [
        { title: "Logo Design", content: "Unique logos that capture brand identity." },
        { title: "Brand Identity", content: "Comprehensive branding packages." },
        { title: "UI/UX Design", content: "Visually appealing and user-friendly interfaces." },
        { title: "Print Design", content: "Brochures, flyers, and business cards." }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="pt-2 text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">
          What I <span className="text-primary">Do</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          I offer professional services to help you establish a strong online presence and automate your business processes.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <MagicCard className="h-full p-8 border border-white/10 bg-card/30 hover:bg-card/50 transition-colors flex flex-col gap-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold text-white">{service.domain}</h2>
              </div>

              <div className="grid gap-4">
                {service.categories.map((category, i) => (
                  <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
                    <h3 className="font-bold text-primary mb-1">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.content}</p>
                  </div>
                ))}
              </div>
            </MagicCard>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8">
          Have a Project in <span className="text-secondary">Mind?</span>
        </h2>
        <Link to="/contact" className="block px-10 py-4 bg-background rounded-lg text-white font-bold text-xl hover:bg-white/5 transition-colors">
          Start a Project
        </Link>
      </div>
    </div>
  );
};

export default Service;

