import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import ShineBorder from "../magicui/shine-border";
import { ExternalLink } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  return (
    <div className="w-[300px] sm:w-[350px] md:w-[450px] shrink-0 h-full px-4 select-none group">
      <ShineBorder
        className="h-full w-full p-1 bg-card/30 rounded-2xl border-white/5"
        color={["#00f3ff", "#bc13fe", "#ff0055"]}
      >
        <div className="h-full bg-card/80 backdrop-blur-xl rounded-xl p-6 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noreferrer"
              className="z-50 p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <ExternalLink
                className="text-muted-foreground group-hover:text-white transition-colors"
                size={20}
              />
            </a>
          </div>
          <p className="text-sm md:text-base text-muted-foreground mb-6 flex-grow leading-relaxed">
            {project.desc}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[10px] md:text-xs font-mono text-secondary bg-secondary/10 px-2 py-1 rounded border border-secondary/20"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </ShineBorder>
    </div>
  );
};

const GalleryItem = ({ project, index, containerRef }) => {
  const itemRef = useRef(null);
  
  // Use scroll progress relative to the container and this item
  const { scrollXProgress } = useScroll({
    target: itemRef,
    container: containerRef,
    offset: ["start end", "center center", "end start"]
  });

  // Smoothing the transforms for a liquid feel
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  
  const rotateY = useSpring(useTransform(scrollXProgress, [0, 0.5, 1], [45, 0, -45]), springConfig);
  const z = useSpring(useTransform(scrollXProgress, [0, 0.5, 1], [-200, 0, -200]), springConfig);
  const scale = useSpring(useTransform(scrollXProgress, [0, 0.5, 1], [0.8, 1, 0.8]), springConfig);
  const opacity = useSpring(useTransform(scrollXProgress, [0, 0.2, 0.5, 0.8, 1], [0.2, 0.8, 1, 0.8, 0.2]), springConfig);

  return (
    <motion.div
      ref={itemRef}
      style={{
        rotateY,
        z,
        scale,
        opacity,
        transformStyle: "preserve-3d",
        scrollSnapAlign: "center",
      }}
      className="shrink-0 py-12 flex items-center justify-center"
    >
      <ProjectCard project={project} index={index} />
    </motion.div>
  );
};

const ProjectGallery = ({ projects }) => {
  const containerRef = useRef(null);

  return (
    <div className="relative w-full py-10 overflow-hidden group/gallery">
      {/* 3D Perspective Wrapper */}
      <div style={{ perspective: "1200px" }} className="w-full">
        <motion.div
          ref={containerRef}
          className="flex overflow-x-auto overflow-y-hidden gap-0 px-[15vw] md:px-[30vw] no-scrollbar scroll-smooth"
          style={{
            transformStyle: "preserve-3d",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {projects.map((project, index) => (
            <GalleryItem
              key={index}
              project={project}
              index={index}
              containerRef={containerRef}
            />
          ))}
          {/* Transparent spacers to allow first/last items to center perfectly */}
          <div className="shrink-0 w-[5vw] md:w-[10vw]" />
        </motion.div>
      </div>

      {/* Atmospheric Depth Overlays */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-background via-background/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-background via-background/50 to-transparent z-10 pointer-events-none" />

      {/* Scrollbar Cleanup */}
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
};

export default ProjectGallery;
