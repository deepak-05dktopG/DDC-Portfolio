import React, { useRef, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { MagicCard } from "../magicui/magic-card";
import { Bot, Code, MessageSquare, PenTool, Cpu, Globe, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Service = () => {
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

  const scrollToService = (id) => {
    const element = document.getElementById(`service-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen relative">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary origin-left z-50"
        style={{ scaleX: scaleProgress }}
      />

      <div className="pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        className="pt-2 text-center mb-16"
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-heading font-bold text-white mb-4"
          variants={{
            offscreen: { scale: 0.5, opacity: 0, rotateX: -90 },
            onscreen: {
              scale: 1,
              opacity: 1,
              rotateX: 0,
              transition: {
                type: "spring",
                bounce: 0.5,
                duration: 1
              }
            }
          }}
        >
          What I <motion.span 
            className="text-primary"
            animate={{
              textShadow: [
                "0 0 10px hsl(var(--primary))",
                "0 0 20px hsl(var(--primary))",
                "0 0 10px hsl(var(--primary))"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >Do</motion.span>
        </motion.h1>
        <motion.p 
          className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8"
          variants={{
            offscreen: { y: 30, opacity: 0 },
            onscreen: {
              y: 0,
              opacity: 1,
              transition: { delay: 0.3, duration: 0.6 }
            }
          }}
        >
          I offer professional services to help you establish a strong online presence and automate your business processes.
        </motion.p>

        {/* Service Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
          variants={{
            offscreen: { opacity: 0 },
            onscreen: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.5
              }
            }
          }}
        >
          {services.map((service) => (
            <motion.button
              key={service.id}
              onClick={() => scrollToService(service.id)}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/50 transition-all text-sm md:text-base text-white/80 hover:text-white relative overflow-hidden"
              variants={{
                offscreen: { scale: 0, rotate: -180 },
                onscreen: {
                  scale: 1,
                  rotate: 0,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }
                }
              }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">{service.domain}</span>
            </motion.button>
          ))}
        </motion.div>
      </motion.div>



      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            id={`service-${service.id}`}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            style={{ perspective: 1000 }}
          >
            <motion.div
              variants={{
                offscreen: {
                  rotateY: index % 2 === 0 ? -90 : 90,
                  opacity: 0,
                  x: index % 2 === 0 ? -100 : 100
                },
                onscreen: {
                  rotateY: 0,
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 1,
                    delay: index * 0.15
                  }
                }
              }}
              whileHover={{
                scale: 1.02,
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <MagicCard className="h-full p-8 border border-white/10 bg-card/30 hover:bg-card/50 transition-colors flex flex-col gap-6">
                <motion.div 
                  className="flex items-center gap-4 mb-2"
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                >
                  <motion.div 
                    className="p-3 bg-white/5 rounded-xl border border-white/10"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                  >
                    {service.icon}
                  </motion.div>
                  <h2 className="text-2xl font-bold text-white">{service.domain}</h2>
                </motion.div>

                <motion.div 
                  className="grid gap-4"
                  variants={{
                    offscreen: { opacity: 0 },
                    onscreen: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: index * 0.15 + 0.5
                      }
                    }
                  }}
                >
                  {service.categories.map((category, i) => (
                    <motion.div 
                      key={i} 
                      className="p-4 rounded-lg bg-white/5 border border-white/5 hover:border-primary/30 transition-colors group"
                      variants={{
                        offscreen: {
                          x: -50,
                          opacity: 0,
                          scale: 0.8
                        },
                        onscreen: {
                          x: 0,
                          opacity: 1,
                          scale: 1,
                          transition: {
                            type: "spring",
                            stiffness: 200,
                            damping: 20
                          }
                        }
                      }}
                      whileHover={{
                        x: 10,
                        scale: 1.02,
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.h3 
                        className="font-bold text-primary mb-1"
                        whileHover={{
                          scale: 1.05,
                          x: 5,
                          transition: { duration: 0.2 }
                        }}
                      >{category.title}</motion.h3>
                      <p className="text-sm text-muted-foreground">{category.content}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </MagicCard>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div 
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-heading font-bold text-white mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
        >
          Have a Project in <motion.span 
            className="text-secondary"
            animate={{
              textShadow: [
                "0 0 10px hsl(var(--secondary))",
                "0 0 20px hsl(var(--secondary))",
                "0 0 10px hsl(var(--secondary))"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >Mind?</motion.span>
        </motion.h2>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            to="/contact" 
            className="inline-block px-10 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-bold text-xl hover:opacity-90 transition-opacity relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 0.1 }}
              transition={{ duration: 0.4 }}
            />
            <motion.span
              className="relative z-10"
              animate={{
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Start a Project
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
      </div>
    </div>
  );
};

export default Service;

