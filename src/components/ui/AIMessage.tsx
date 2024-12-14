import Loader from "@/assets/images/loader-animated.svg";

export default function AIMessage() {
  return (
    <div className=" absolute bottom-2 md:bottom-4 lg:bottom-10 left-1/2 -translate-x-1/2 w-full px-4">
      <div className="bg-gray-950/80  flex items-center gap-4 px-4 py-2 rounded-2xl w-[280px] max-w-full mx-auto">
        <Loader className="text-violet-400" />
        <div className=" font-semibold text-xl text-gray-100">
          AI is generating<span className=" animate-cursor-blink">|</span>
        </div>
      </div>
    </div>
  );
}
