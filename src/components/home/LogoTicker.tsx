"use client";
import { logos } from "@/constants";
import Section from "../ui/Section";
import { motion } from "framer-motion";

export default function LogoTicker() {
  return (
    <Section className="!pt-0">
      <h2 className="font-bold uppercase text-xs text-center tracking-widest text-gray-500">
        Empowering creators at leading companies
      </h2>
      <div className="flex mt-20 overflow-x-clip -mx-4 lg:-mx-8">
        <motion.ul
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex gap-18 md:gap-36 px-9 md:px-18 flex-none"
        >
          {[...logos, ...logos].map((item, index) => (
            <li key={index}>
              <item.logo className="h-8" />
            </li>
          ))}
        </motion.ul>
      </div>
    </Section>
  );
}
