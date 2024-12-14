import { footerItems, socialLinks } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="container py-8">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between justify-center gap-10">
          <div className="font-extrabold text-2xl text-gray-300">
            Spereal.AI
          </div>
          <ul className="flex flex-col gap-8 items-center md:flex-row md:gap-16">
            {footerItems.map((item) => (
              <li
                key={item.name}
                className=" uppercase text-xs font-bold tracking-widest text-gray-400"
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-16 flex flex-col md:flex-row-reverse md:justify-between items-center justify-center gap-8">
          <ul className="flex justify-center items-center gap-6">
            {socialLinks.map((item) => (
              <li
                key={item.name}
                className="size-10 rounded-full flex items-center justify-center bg-gray-900 cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="size-4 text-gray-500"
                />
              </li>
            ))}
          </ul>
          <pre className="text-gray-500 text-sm">
            &copy; BR, all rights reserved.
          </pre>
        </div>
      </div>
    </footer>
  );
}
