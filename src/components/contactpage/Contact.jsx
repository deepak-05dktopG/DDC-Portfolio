import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { MagicCard } from "../magicui/magic-card";
import ShineBorder from "../magicui/shine-border";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from "lucide-react";
import confetti from "canvas-confetti";
import VisitorCounter from "./VisitorCounter";

const Contact = () => {
  useEffect(() => {
    const redirectUrlInput = document.getElementById('redirect-url');
    if (redirectUrlInput) {
      redirectUrlInput.value = window.location.href;
    }
  }, []);

  const handleSubmit = (event) => {
    // The form submits to Web3Forms, so we don't need to prevent default unless we want to handle it via AJAX.
    // For now, let's just trigger confetti on submit button click (which is handled by the button's onClick if we add it, or just let the form submit).
    // We'll add a simple confetti effect on the button click.
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center">

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="pt-2 text-center mb-16 space-y-4"
      >
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">
          Get in <span className="text-primary">Touch</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 w-full">

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <MagicCard className="p-8 border border-white/10 bg-card/30 backdrop-blur-xl flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>

            <div className="space-y-6">
              <a href="mailto:forwebdeepak@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                <div className="p-3 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Mail size={24} />
                </div>
                <span className="text-lg">forwebdeepak@gmail.com</span>
              </a>

              <a href="https://wa.me/+919025454148" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                <div className="p-3 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors">
                  <MessageCircle size={24} />
                </div>
                <span className="text-lg">+91 9025454148</span>
              </a>

              <div className="flex items-center gap-4 text-muted-foreground group">
                <div className="p-3 bg-white/5 rounded-full">
                  <MapPin size={24} />
                </div>
                <span className="text-lg">Erode, Tamil Nadu, India</span>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <h4 className="text-white font-bold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a href="https://github.com/deepak-05dktopG" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-primary/20 transition-colors text-white hover:text-primary">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-primary/20 transition-colors text-white hover:text-primary">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </MagicCard>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <ShineBorder
            className="w-full p-1 bg-card/30 rounded-2xl border-white/5"
            color={["#00f3ff", "#bc13fe", "#ff0055"]}
          >
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="bg-card/80 backdrop-blur-xl rounded-xl p-8 space-y-6 w-full"
            >
              <input type="hidden" name="access_key" value="bf09f79e-4888-4ddb-af54-5b31e0dc1fe4" />
              <input type="hidden" name="redirect" id="redirect-url" />

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="eg., Deepakkumar"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="eg., forwebdeepak@gmail.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                onClick={triggerConfetti}
                className="w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-black font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>

            </form>
          </ShineBorder>
        </motion.div>

      </div>
      <VisitorCounter />
    </div>
  );
};

export default Contact;

