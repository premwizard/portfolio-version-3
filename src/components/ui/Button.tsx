'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  href,
  external = false,
  onClick,
  ...props
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "px-4 py-1.5 text-xs gap-1.5",
    md: "px-6 py-2.5 text-sm gap-2",
    lg: "px-8 py-3.5 text-base gap-2.5",
  };

  // Primary & Secondary button color specifications
  const variantStyles = {
    primary: "bg-[#A288A6] text-[#1C1D21] font-semibold hover:bg-[#BB9BB0] hover:shadow-lg hover:shadow-[#A288A6]/20 border border-[#A288A6]",
    secondary: "bg-transparent text-[#F1E3E4] border border-[#A288A6] hover:bg-[rgba(162,136,166,0.15)] hover:text-[#F1E3E4] backdrop-blur-md",
    outline: "bg-transparent text-[#F1E3E4] border border-[rgba(204,188,188,0.3)] hover:border-[#A288A6] hover:text-[#BB9BB0] hover:bg-[rgba(162,136,166,0.1)]",
    ghost: "bg-transparent text-[rgba(241,227,228,0.7)] hover:text-[#F1E3E4] hover:bg-[rgba(255,255,255,0.05)]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && <span className="transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={`group ${combinedClasses}`}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={`group ${combinedClasses}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...(props as any)}
    >
      {content}
    </motion.button>
  );
};
