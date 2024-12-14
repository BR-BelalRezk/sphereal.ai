import { motion, MotionValue } from "framer-motion";
type Props = {
  message: React.ReactNode;
  time: string;
  className: string;
  y: MotionValue<number>;
};

export default function Chat({ message, time, className, y }: Props) {
  return (
    <div className={`absolute z-10 ${className}`}>
      <motion.div
        style={{ y }}
        className=" bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72"
      >
        <div className="text-gray-100">{message}</div>
        <div className="text-right text-gray-400 text-sm font-semibold">
          {time}
        </div>
      </motion.div>
    </div>
  );
}
