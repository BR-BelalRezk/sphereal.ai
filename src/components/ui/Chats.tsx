import { MotionValue } from "framer-motion";
import Chat from "./Chat";

export default function Chats({ y }: { y: MotionValue<number> }) {
  return (
    <>
      <Chat
        y={y}
        className="top-[30%] left-0  -translate-x-10 hidden lg:block"
        time="1m ago"
        message={"Can you generate an incredible frontend dev video tutorial?"}
      />
      <Chat
        y={y}
        className="right-0 translate-x-10 top-1/2 hidden lg:block"
        time="Just now"
        message={
          <>
            <strong>Sphereal:</strong> I created one beased on videos from BR!
          </>
        }
      />
    </>
  );
}
