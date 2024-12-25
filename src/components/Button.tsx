"use client";
import { cva } from "class-variance-authority";
import { HTMLAttributes, useEffect, useState } from "react";
import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";

export type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";
  block?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

const classes = cva(
  "text-xs tracking-widest uppercase font-bold h-10 px-6 rounded-lg",
  {
    variants: {
      block: {
        true: "w-full",
      },
      variant: {
        primary:
          "border-2 border-transparent [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_padding-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300))_border-box]",
        secondary: "bg-gray-100 text-gray-950",
        tertiary: "bg-gray-800 text-gray-200",
      },
    },
    defaultVariants: {
      variant: "primary",
      block: false,
    },
  }
);

export const Button = (props: ButtonProps) => {
  const { className = "", children, variant = "primary", ...otherProps } = props;
  const [isHovered, setIsHovered] = useState(false);
  const angel = useMotionValue(45);
  const background = useMotionTemplate`linear-gradient(var(--color-gray-950),var(--color-gray-950)) padding-box,conic-gradient(from ${angel}deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300)) border-box`;

  useEffect(() => {
    if (isHovered) {
      animate(angel, angel.get() + 360,{
        duration: 2,
        ease: 'linear',
        repeat: Infinity
      })
    } else{
      animate(angel, 45, {duration: 0.5})
    }
  }, [isHovered, angel])

  return (
    <motion.button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={classes({ ...otherProps, variant, className })}
      style={
        variant === "primary" ? { background } : undefined
      }
    >
      {children}
    </motion.button>
  );
};
