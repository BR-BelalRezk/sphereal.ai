import { testimonials } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Testimonial({
  item,
}: {
  item: (typeof testimonials)[number];
}) {
  return (
    <motion.li
      layout
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 25 }}
    >
      <blockquote className="flex flex-col lg:flex-row gap-12">
        <p className="text-xl md:text-2xl text-gray-100 font-medium">
          {item.quote}
        </p>
        <figure className="lg:text-right">
          <Image
            src={item.image}
            className="rounded-xl size-28 max-w-none"
            alt={item.name}
          />
          <figcaption className="font-bold mt-4 text-gray-100">
            {item.name}
          </figcaption>
          <figcaption className="text-xs text-gray-400 mt-2">
            {item.title}
          </figcaption>
        </figure>
      </blockquote>
    </motion.li>
  );
}
