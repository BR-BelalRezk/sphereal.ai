"use client";
import { loginItems } from "@/constants";
import Link from "next/link";
import { cva } from "class-variance-authority";
import { useEffect, useState } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

type Props = {
  href?: (typeof loginItems)[number]["href"];
  name: (typeof loginItems)[number]["name"] | string;
  variant?: (typeof loginItems)[number]["buttonVariant"] | "secondary";
};

const classes = cva(
  "text-xs rounded-lg tracking-widest uppercase font-bold h-10 px-6",
  {
    variants: {
      variant: {
        primary: "border-gradient",
        tertiary: "bg-gray-800 text-gray-200",
        secondary: "bg-gray-100 text-gray-950",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export default function Button(
  props: Props & React.HTMLAttributes<HTMLButtonElement>
) {
  const [hover, setHover] = useState(false);
  const { href, name, variant = "primary" } = props;
  const { className = "", ...otherProps } = props;
  const angle = useMotionValue(45);
  const background = useMotionTemplate`linear-gradient(var(--color-gray-950),black) padding-box, conic-gradient(from ${angle}deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400)) border-box`;
  useEffect(() => {
    if (hover) {
      animate(angle, angle.get() + 360, {
        duration: 1,
        ease: "linear",
        repeat: Infinity,
      });
    } else {
      animate(angle, 45, { duration: 0.5 });
    }
  }, [hover, angle]);
  return (
    <motion.button
      style={variant === "primary" ? { background } : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={classes({ ...otherProps, variant, className })}
    >
      <Link href={href || "#"}>{name}</Link>
    </motion.button>
  );
}
