"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type Props = {
  src: StaticImageData | string;
  alt: string;
  rotate: number;
};
export default function FeatureLogo({ src, alt, rotate }: Props) {
  return (
    <motion.div
      initial={{ rotate }}
      animate={{
        rotate: [
          rotate,
          rotate + 45,
          rotate + 45,
          rotate + 90,
          rotate + 90,
          rotate + 135,
          rotate + 135,
          rotate + 180,
          rotate + 180,
          rotate + 225,
          rotate + 225,
          rotate + 270,
          rotate + 270,
          rotate + 315,
          rotate + 315,
          rotate + 360,
          rotate + 360,
        ],
      }}
      transition={{ duration: 10, repeat: Infinity }}
      className=" absolute inset-0"
    >
      <motion.div
        initial={{ translate: "-50% -50%", rotate: -rotate }}
        animate={{
          rotate: [
            -rotate,
            -rotate - 45,
            -rotate - 45,
            -rotate - 90,
            -rotate - 90,
            -rotate - 135,
            -rotate - 135,
            -rotate - 180,
            -rotate - 180,
            -rotate - 225,
            -rotate - 225,
            -rotate - 270,
            -rotate - 270,
            -rotate - 315,
            -rotate - 315,
            -rotate - 360,
            -rotate - 360,
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="inline-flex bg-gray-950 size-10 md:size-14 items-center justify-center border border-[var(--color-border)] rounded-lg absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <Image src={src} alt={alt} className="size-6 md:size-9" />
      </motion.div>
    </motion.div>
  );
}
