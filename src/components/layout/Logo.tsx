import Link from "next/link";
import LogoImage from "../ui/LogoImage";

export default function Logo() {
  return (
    <Link href={"/"}>
      <figure className="flex gap-4 items-center">
        <LogoImage className="size-10" />
        <span className="font-extrabold text-2xl text-white">sphereal.ai</span>
      </figure>
    </Link>
  );
}
