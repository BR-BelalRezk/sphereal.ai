import { loginItems, navItems, transition } from "@/constants";
import Logo from "./Logo";
import { Menu, MenuList, MenuListItem } from "./Menu";
import Link from "next/link";
import Button from "../ui/Button";

export default function DesktopNavbar() {
  return (
    <Menu className="lg:flex items-center justify-between hidden size-full">
      <Logo />
      <MenuList
        variants={{
          open: {
            transition: {
              ...transition,
              delayChildren: 0.75,
              staggerChildren: 0.05,
            },
          },
          close: {
            transition: transition,
          },
        }}
        className="flex items-center h-full  uppercase relative font-bold text-xs tracking-widest text-gray-400"
      >
        {navItems.map((item) => (
          <MenuListItem
            className="inline-flex h-full items-center px-10 before:content-[''] before:absolute before:bottom-0 before:h-2 before:w-px before:bg-gray-200/20 before:left-0 last:after:content-[''] last:after:absolute last:after:bottom-0 last:after:h-2 last:after:w-px last:after:bg-gray-200/20 last:after:right-0 "
            variants={{
              open: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 250, damping: 25 },
              },
              close: { opacity: 0, y: 25, transition: { duration: 0.5 } },
            }}
            key={item}
          >
            <Link href={`#${item}`}>{item}</Link>
          </MenuListItem>
        ))}
      </MenuList>
      <MenuList
        variants={{
          open: {
            transition: {
              ...transition,
              delayChildren: 1.2,
              staggerChildren: 0.05,
            },
          },
          close: {
            transition: transition,
          },
        }}
        className="flex items-center gap-5  h-full  uppercase relative font-bold text-xs tracking-widest text-gray-400"
      >
        {loginItems.map((item) => (
          <MenuListItem
            className="inline-flex h-full items-center"
            variants={{
              open: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 250, damping: 25 },
              },
              close: { opacity: 0, y: 25, transition: { duration: 0.5 } },
            }}
            key={item.name}
          >
            <Button
              href={item.href}
              name={item.name}
              variant={item.buttonVariant}
            />
          </MenuListItem>
        ))}
      </MenuList>
    </Menu>
  );
}
