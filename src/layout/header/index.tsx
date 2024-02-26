// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Menu from "@/components/menu";
import LinkButton from "@/components/button/LinkButton";

// ||||||||||||||||||||||||||||| Header Component ||||||||||||||||||||||||||||||||||||

const Header = () => {
  // Hooks
  const [menu, setMenuActive] = useState(false);

  // Return
  return (
    <header className="sticky z-[10] top-0 left-0 bg-tw_secondary">
      <nav className="px-20 py-6 flex justify-between items-center max_lg:px-10 max_md:px-6 max_md:gap-x-12">
        <div className="left">
          <Link href={"/"} className="logo">
            <Image src={"/logo.svg"} alt="logo" width={180} height={180} />
          </Link>
        </div>
        <div className="right">
          <div className="buttons flex items-center gap-x-6">
            <div className="max_md:hidden">
              <LinkButton link={"/contact"} color="bg-tw_bg">
                Nous Contacter
              </LinkButton>
            </div>
            <button
              className="flex z-[11] flex-col items-center justify-center gap-y-2 h-[50px] w-[50px] bg-tw_bg rounded-full"
              onClick={() => setMenuActive(!menu)}
            >
              <span
                className={`inline-block bg-tw_text h-1 w-[20px] transition-all duration-300 ${
                  menu
                    ? "rotate-45 translate-y-[.35rem]"
                    : "rotate-0 translate-y-0"
                }`}
              ></span>
              <span
                className={`inline-block bg-tw_text h-1 w-[20px] transition-all duration-300 ${
                  menu
                    ? "-rotate-45 -translate-y-[.4rem]"
                    : "rotate-0 -translate-y-0"
                }`}
              ></span>
            </button>
          </div>
        </div>
      </nav>
      <Menu active={menu} setActive={setMenuActive} />
    </header>
  );
};
export default Header;
