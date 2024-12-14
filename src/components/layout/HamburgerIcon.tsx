"use client";
import { transition } from "@/constants";
import { motion } from "framer-motion";

export default function HamburgerIcon({ toggle }: { toggle?: boolean }) {
  const span_1 = toggle ? { translateY: 4, rotate: 45 } : {};
  const span_2 = toggle ? { translateY: -4, rotate: -45 } : {};
  return (
    <>
      {Array.from({ length: 2 }, (_, index) => index).map((index) => (
        <motion.span
          animate={index === 0 ? span_1 : span_2}
          transition={transition}
          key={index}
          className="w-[22px] h-0.5 bg-white rounded-full"
        />
      ))}
    </>
  );
}
