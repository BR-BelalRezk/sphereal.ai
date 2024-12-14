import { loginItems, navItems, transition } from "@/constants";
import HamburgerIcon from "./HamburgerIcon";
import { Menu, MenuList, MenuListItem, MenuToggleButton } from "./Menu";
import Link from "next/link";
import Logo from "./Logo";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <Menu className="relative flex items-center justify-between lg:hidden w-full">
      <Logo />
      <MenuToggleButton
        variants={{
          open: {
            translateX: -15,
            translateY: 10,
            transition: transition,
          },
          close: {
            translateX: 0,
            translateY: 0,
            transition: transition,
          },
        }}
        className="border-2 border-transparent size-10 rounded-full  flex flex-col items-center justify-center gap-1.5 relative z-50"
      >
        <HamburgerIcon />
      </MenuToggleButton>
      <MenuList
        variants={{
          open: {
            width: 240,
            height: 275,
            borderRadius: 25,
            transition: {
              ...transition,
              delayChildren: 0.75,
              staggerChildren: 0.05,
            },
          },
          close: {
            width: 40,
            height: 40,
            borderRadius: 25,
            transition: transition,
          },
        }}
        className=" uppercase  font-bold text-xs tracking-widest text-gray-400 border-2 border-transparent  rounded-[25px] [background:linear-gradient(var(--color-gray-950),black)_content-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))_border-box]  flex flex-col items-center gap-5 justify-center z-40 absolute top-0 right-0"
      >
        <div className="flex items-start flex-col gap-5 justify-start self-start p-3">
          {navItems.map((item) => (
            <MenuListItem
              variants={{
                open: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 250, damping: 25 },
                },
                close: { opacity: 0, y: 25, transition: { duration: 0.5 } },
              }}
              key={item}
              className="uppercase"
            >
              <Link href={`#${item}`}>{item}</Link>
            </MenuListItem>
          ))}
        </div>
        <div className="flex items-center gap-2.5 justify-between w-full p-3">
          {loginItems.map((item) => (
            <MenuListItem
              variants={{
                open: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 250, damping: 25 },
                },
                close: { opacity: 0, y: 25, transition: { duration: 0.5 } },
              }}
              key={item.name}
              className=""
            >
              <Button
                name={item.name}
                variant={item.buttonVariant}
                href={item.href}
              />
            </MenuListItem>
          ))}
        </div>
      </MenuList>
    </Menu>
  );
}
