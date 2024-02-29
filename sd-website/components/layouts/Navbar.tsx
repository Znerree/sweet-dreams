import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header className=" container mx-auto">
      <DesktopNav />
      {/* <MobileNav /> */}
    </header>
  );
};

export default Navbar;
