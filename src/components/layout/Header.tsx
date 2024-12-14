import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Header() {
  return (
    <header className="border-b overflow-x-clip border-[var(--color-border)] sticky top-0 z-50 backdrop-blur-sm">
      <nav className="container h-18 lg:h-20 flex items-center">
        <MobileNavbar />
        <DesktopNavbar />
      </nav>
    </header>
  );
}
