import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'secondary' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const baseStyles = "inline-flex items-center font-medium rounded-full transition-colors font-mono";
  
  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-xs",
  };

  const variantStyles = {
    default: "bg-[rgba(162,136,166,0.15)] text-[#F1E3E4] border border-[rgba(204,188,188,0.15)]",
    accent: "bg-[rgba(162,136,166,0.15)] text-[#F1E3E4] border border-[#A288A6]/30",
    secondary: "bg-[rgba(187,155,176,0.2)] text-[#F1E3E4] border border-[#BB9BB0]/30",
    outline: "bg-transparent text-[#F1E3E4] border border-[rgba(204,188,188,0.25)]",
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
