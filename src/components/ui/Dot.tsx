import { motion } from "framer-motion";
export default function Dot({
  index,
  testIndex,
  onClick,
}: {
  testIndex: number;
  index: number;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="size-6 relative isolate inline-flex items-center justify-center cursor-pointer"
    >
      {testIndex === index && (
        <motion.div
          layoutId="test"
          transition={{
            duration: 0.75,
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          className=" absolute border-gradient size-full rounded-full -z-10"
        />
      )}
      <div className="size-1.5 bg-gray-200 rounded-full" />
    </div>
  );
}
