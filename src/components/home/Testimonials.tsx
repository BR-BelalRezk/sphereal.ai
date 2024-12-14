"use client";
import React, { useState } from "react";
import { testimonials } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Section from "../ui/Section";
import Dot from "../ui/Dot";
import Testimonial from "../ui/Testimonial";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

export default function Testimonials() {
  const [testIndex, setTestIndex] = useState(0);
  return (
    <Section id="testimonials" borderTop>
      <LayoutGroup>
        <motion.ul
          layout
          className="border-gradient flex flex-col md:flex-row  gap-12 rounded-3xl px-6 md:px-10 lg:px-16 lg:py-24 py-16 relative md:mx-10 lg:mx-20"
        >
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className=" absolute size-20 text-violet-400 top-0 left-6 md:left-10 lg:left-16 -translate-y-1/2"
          />
          <AnimatePresence mode="wait">
            {testimonials.map((item, index) =>
              testIndex === index ? (
                <Testimonial key={item.name} item={item} />
              ) : null
            )}
          </AnimatePresence>
          <motion.div layout="position" className="flex gap-2  md:flex-col">
            {testimonials.map((_, index) => (
              <Dot
                onClick={() => setTestIndex(index)}
                key={index}
                index={index}
                testIndex={testIndex}
              />
            ))}
          </motion.div>
        </motion.ul>
      </LayoutGroup>
    </Section>
  );
}
