"use client";
// compound components

import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { motion, Variants } from "framer-motion";

type classNameAndChildren = {
  className: string;
  children: React.ReactNode;
};

type MenuContextType = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

interface variant extends classNameAndChildren {
  variants: Variants;
}

const MenuContext = createContext<MenuContextType | null>(null);
const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("use the useMenu hook inside the Menu context component");
  }
  return context;
};

const Menu = ({ className, children }: classNameAndChildren) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const value = { toggle, setToggle };
  useEffect(() => {
    if (window.screen.width >= 1024) {
      setToggle(true);
    }
  }, []);
  return (
    <MenuContext.Provider value={value}>
      <div className={className}>{children}</div>
    </MenuContext.Provider>
  );
};

const MenuList = ({ className, children, variants }: variant) => {
  const { toggle } = useMenu();
  return (
    <motion.ul
      variants={variants}
      initial={"close"}
      animate={toggle ? "open" : "close"}
      className={className}
    >
      {children}
    </motion.ul>
  );
};

const MenuListItem = ({ className, children, variants }: variant) => {
  return (
    <motion.li className={className} variants={variants}>
      {children}
    </motion.li>
  );
};

const MenuToggleButton = ({
  children,
  className,
  variants,
}: {
  className: string;
  children: React.ReactElement;
  variants: Variants;
}) => {
  const { toggle, setToggle } = useMenu();
  return (
    <motion.button
      variants={variants}
      className={className}
      animate={toggle ? "open" : "close"}
      onClick={() => setToggle((prevState) => !prevState)}
    >
      {cloneElement(children, { toggle })}
    </motion.button>
  );
};

export { Menu, MenuList, MenuListItem, MenuToggleButton };
