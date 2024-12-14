import underline from "@/assets/images/underline.svg?url";

export default function SpherealUnderlineWord() {
  return (
    <span className=" relative isolate">
      <span>Sphereal</span>
      <span
        style={{
          maskImage: `url(${underline.src})`,
          maskSize: "contain",
          maskPosition: "center",
          maskRepeat: "no-repeat",
        }}
        className=" absolute w-full h-4 left-0 top-full -translate-y-1/2 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]"
      />
    </span>
  );
}
