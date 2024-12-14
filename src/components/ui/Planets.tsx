"use client";
import { useSpring, useTransform } from "framer-motion";
import Planet from "./Planet";
import { motion } from "framer-motion";
import useMousePosition from "@/hooks/useMousePosition";
export function HeroPlanets() {
  const { x, y } = useMousePosition();
  const sptringX = useSpring(x);
  const sptringY = useSpring(y);
  const translateLargX = useTransform(sptringX, [0, 1], ["-25%", "25%"]);
  const translateLargY = useTransform(sptringY, [0, 1], ["-25%", "25%"]);

  const translateMediumX = useTransform(sptringX, [0, 1], ["-50%", "50%"]);
  const translateMediumY = useTransform(sptringY, [0, 1], ["-50%", "50%"]);
  const translateSmallX = useTransform(sptringX, [0, 1], ["-200%", "200%"]);
  const translateSmallY = useTransform(sptringY, [0, 1], ["-200%", "200%"]);
  return (
    <div className=" absolute left-1/2 top-0">
      <motion.div style={{ x: translateLargX, y: translateLargY }}>
        <Planet
          size="lg"
          color="violet"
          className="rotate-135 -translate-x-[316px] -translate-y-[76px]"
        />
      </motion.div>
      <motion.div style={{ x: translateLargX, y: translateLargY }}>
        <Planet
          size="lg"
          color="violet"
          className="-rotate-135 translate-x-[334px] -translate-y-[188px]"
        />
      </motion.div>
      <motion.div style={{ x: translateSmallX, y: translateSmallY }}>
        <Planet
          size="sm"
          color="fuchsia"
          className="-translate-y-[372px] rotate-135 -translate-x-[508px]"
        />
      </motion.div>
      <motion.div style={{ x: translateMediumX, y: translateMediumY }}>
        <Planet
          size="md"
          color="teal"
          className="-translate-y-[342px] -rotate-135 translate-x-[488px]"
        />
      </motion.div>
    </div>
  );
}

export function CTAPlanets() {
  const { x, y } = useMousePosition();
  const sptringX = useSpring(x);
  const sptringY = useSpring(y);
  const translateLargX = useTransform(sptringX, [0, 1], ["-25%", "25%"]);
  const translateLargY = useTransform(sptringY, [0, 1], ["-25%", "25%"]);

  const translateMediumX = useTransform(sptringX, [0, 1], ["-50%", "50%"]);
  const translateMediumY = useTransform(sptringY, [0, 1], ["-50%", "50%"]);
  const translateSmallX = useTransform(sptringX, [0, 1], ["-200%", "200%"]);
  const translateSmallY = useTransform(sptringY, [0, 1], ["-200%", "200%"]);
  return (
    <>
      <motion.div
        style={{ x: translateLargX, y: translateLargY }}
        className="-z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <Planet
          size="lg"
          color="violet"
          className="translate-y-[200px] -translate-x-[200px] rotate-45"
        />
      </motion.div>
      <motion.div
        style={{ x: translateLargX, y: translateLargY }}
        className="-z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <Planet
          size="lg"
          color="violet"
          className="-translate-y-[200px] translate-x-[200px] -rotate-135"
        />
      </motion.div>
      <motion.div
        style={{ x: translateMediumX, y: translateMediumY }}
        className="-z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <Planet
          size="md"
          color="teal"
          className=" -translate-x-[500px] rotate-90"
        />
      </motion.div>
      <motion.div
        style={{ x: translateMediumX, y: translateMediumY }}
        className="-z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <Planet
          size="md"
          color="teal"
          className="-translate-y-[100px] translate-x-[500px] -rotate-135"
        />
      </motion.div>
      <motion.div
        style={{ x: translateSmallX, y: translateSmallY }}
        className="-z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <Planet
          size="sm"
          color="fuchsia"
          className="-translate-y-[250px] -translate-x-[400px] rotate-135"
        />
      </motion.div>
      <motion.div
        style={{ x: translateSmallX, y: translateSmallY }}
        className="-z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <Planet
          size="sm"
          color="fuchsia"
          className="translate-y-[150px] translate-x-[400px] -rotate-45"
        />
      </motion.div>
    </>
  );
}
