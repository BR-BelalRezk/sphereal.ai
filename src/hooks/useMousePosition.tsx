import { useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function useMousePosition() {
  const [innerWidth, setInnerWidth] = useState(1);
  const [innerHeight, setInnerHeight] = useState(1);
  const clientX = useMotionValue(0);
  const clientY = useMotionValue(0);
  const x = useTransform(clientX, [0, innerWidth], [0, 1]);
  const y = useTransform(clientX, [0, innerHeight], [0, 1]);
  useEffect(() => {
    setInnerHeight(window.innerHeight);
    setInnerWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setInnerHeight(window.innerHeight);
      setInnerWidth(window.innerWidth);
    });
  }, []);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      clientX.set(e.clientX);
      clientY.set(e.clientY);
    });
  }, []);

  return { x, y };
}
