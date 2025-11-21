import React from "react";
import { Github, Linkedin, Mail, Instagram, Heart } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/10 bg-black/50 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">

                <div className="text-center md:text-left">
                    <p className="text-muted-foreground flex items-center gap-2 justify-center md:justify-start">
                        © 2025 DDC Tech. Made with <Heart size={16} className="text-red-500 fill-red-500" /> by Deepak Kumar.
                    </p>
                </div>

                <div className="flex gap-6">
                    <a href="https://github.com/deepak-05dktopG" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Instagram size={20} />
                    </a>
                    <a href="mailto:forwebdeepak@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        <Mail size={20} />
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
