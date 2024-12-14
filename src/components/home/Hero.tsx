"use client";
import robot from "@/assets/images/robot.jpg";
import Image from "next/image";
import Button from "../ui/Button";
import { HeroOrbits } from "../ui/Orbits";
import { HeroPlanets } from "../ui/Planets";
import Chats from "../ui/Chats";
import AIMessage from "../ui/AIMessage";
import SpherealUnderlineWord from "../ui/SpherealUnderlineWord";
import Section from "../ui/Section";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "start end"],
  });
  const yProgress = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <Section
      sectionRef={ref}
      className="relative isolate [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
    >
      <div className=" absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [maskImage:radial-gradient(circle_farthest-side,black,transparent)]" />
      <HeroOrbits />
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-100 text-center leading-tight">
        Unlock the future of AI Conversations with <SpherealUnderlineWord />
      </h1>
      <p className="text-center text-lg md:text-xl mt-8 text-gray-300 max-w-3xl mx-auto">
        Harness the power of AI with Sphereal. Elevate your productivity and
        streamline your workflow with our cutting-edge AI chat platform.
      </p>
      <div className="flex items-center justify-center">
        <Button className="mt-10" variant="secondary" name="Start Chatting" />
      </div>
      <div className=" relative isolate max-w-5xl mx-auto">
        <HeroPlanets />
        <Chats y={yProgress} />
        <figure className="mt-20 relative rounded-2xl border-gradient overflow-hidden">
          <Image src={robot} alt="robot" />
          <AIMessage />
        </figure>
      </div>
    </Section>
  );
}
