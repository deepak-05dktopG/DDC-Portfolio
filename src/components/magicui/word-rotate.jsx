"use client";;
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";

export default function WordRotate({
  words,
  duration = 2000,

  framerProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },

  className
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    (<div className="" style={{height:'fit-content'}}>
      <AnimatePresence mode="wait">
        <motion.h4 key={words[index]}  className={cn(className)} {...framerProps}>
          {words[index]}
        </motion.h4>
      </AnimatePresence>
    </div>)
  );
}
