"use client";

import { motion } from "framer-motion";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "white";
  className?: string;
}

export default function LoadingSpinner({
  size = "md",
  color = "primary",
  className = "",
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  const colorClasses = {
    primary: "border-coral-pink border-t-transparent",
    secondary: "border-ocean-blue border-t-transparent",
    white: "border-white border-t-transparent",
  };

  const classes = `${sizeClasses[size]} ${colorClasses[color]} border-2 rounded-full ${className}`;

  return (
    <motion.div
      className={classes}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}
