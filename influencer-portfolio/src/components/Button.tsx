"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient" | "link";
  size?: "sm" | "md" | "lg" | "xl";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
  disabled = false,
  loading = false,
  fullWidth = false,
  className = "",
  icon,
  iconPosition = "left",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary:
      "bg-coral-pink text-white hover:bg-coral-pink/90 focus-visible:ring-coral-pink/50 shadow-lg hover:shadow-xl",
    secondary:
      "bg-ocean-blue text-white hover:bg-ocean-blue/90 focus-visible:ring-ocean-blue/50 shadow-lg hover:shadow-xl",
    outline:
      "border-2 border-coral-pink text-coral-pink hover:bg-coral-pink hover:text-white focus-visible:ring-coral-pink/50",
    ghost: "text-dark hover:bg-sandy-beige/50 focus-visible:ring-sandy-beige/50",
    gradient:
      "text-white bg-gradient-to-r from-coral-pink to-sunrise-gold hover:from-coral-pink/90 hover:to-sunrise-gold/90 shadow-lg hover:shadow-xl focus-visible:ring-sunrise-gold/50",
    link: "text-coral-pink hover:text-coral-pink/80 underline-offset-4 hover:underline focus-visible:ring-coral-pink/40",
  } as const;

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  } as const;

  const widthClass = fullWidth ? "w-full" : "";

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

  const handleClick = () => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={handleClick}
      disabled={disabled || loading}
      whileHover={!disabled && !loading ? { scale: 1.015, y: -2 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.985 } : {}}
      transition={{ duration: 0.18 }}
    >
      {loading ? (
        <motion.div
          className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      ) : (
        <>
          {icon && iconPosition === "left" && (
            <span className="mr-2">{icon}</span>
          )}
          {children}
          {icon && iconPosition === "right" && (
            <span className="ml-2">{icon}</span>
          )}
        </>
      )}
    </motion.button>
  );
}
