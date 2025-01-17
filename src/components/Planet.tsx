import { cva } from "class-variance-authority";
import { HtmlHTMLAttributes } from "react";

const classes = cva("bg-gradient-to-b to-gray-950 rounded-full", {
  variants: {
    size: {
      sm: "size-4",
      md: "size-6",
      lg: "size-8",
    },
    color: {
      violet: "from-violet-400",
      teal: "from-teal-400",
      fuchsia: "from-fuchsia-400",
    },
  },
  defaultVariants: {
    size: "lg",
    color: "violet",
  },
});

export const Planet = (props: {
  size?: "sm" | "md" | "lg";
  color?: "violet" | "teal" | "fuchsia";
  className?: HtmlHTMLAttributes<HTMLDivElement>["className"];
}) => {
  return (
    <div
      className={classes({
        color: props.color,
        size: props.size,
        className: props.className,
      })}
    ></div>
  );
};
