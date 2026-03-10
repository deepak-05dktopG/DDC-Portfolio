import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import "./bubble-menu.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.18 } },
  exit: { opacity: 0, transition: { duration: 0.14 } },
};

const panelVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 220, damping: 22 },
  },
  exit: { opacity: 0, scale: 0.98, y: 10, transition: { duration: 0.14 } },
};

const bubbleVariants = {
  hidden: { opacity: 0, scale: 0.6, y: 20 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 18,
      delay: 0.05 + i * 0.05,
    },
  }),
};

export default function BubbleMenu({ items, onClose }) {
  const rotations = [-8, 5, 8, -6, 4, -4];

  return (
    <motion.div
      className="bubble-menu"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <button
        type="button"
        className="bubble-menu__backdrop"
        onClick={onClose}
        aria-label="Close menu"
      />

      <motion.div className="bubble-menu__panel" variants={panelVariants}>
        <div className="bubble-menu__panel-bg" aria-hidden="true" />

        <button
          type="button"
          className="bubble-menu__close"
          onClick={onClose}
          aria-label="Close menu"
        >
          <X size={18} />
        </button>

        <div className="bubble-menu__bubbles" role="navigation" aria-label="Primary">
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              custom={i}
              variants={bubbleVariants}
              initial="hidden"
              animate="visible"
              style={{ transform: `rotate(${rotations[i % rotations.length]}deg)` }}
            >
              <NavLink
                to={item.path}
                onClick={onClose}
                className="bubble-menu__bubble"
              >
                <span className="bubble-menu__label">{item.name}</span>
              </NavLink>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
