import logo from "@/assets/images/sphereal-logo.svg?url";
import { twMerge } from "tailwind-merge";

export default function LogoImage(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className, style } = props;
  return (
    <div
      style={{ maskImage: `url(${logo.src})`, maskSize: "contain", ...style }}
      className={twMerge(
        "bg-[conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))]",
        className
      )}
    />
  );
}
