import React from "react";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
            {/* Background Elements */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                {/* Cyber Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                {/* Radial Gradient Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#00f3ff10,transparent)]"></div>

                {/* Animated Blobs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"
                />
            </div>

            {/* Main Content */}
            <main className="relative z-10">
                {children}
            </main>
        </div>
    );
};

export default Layout;
