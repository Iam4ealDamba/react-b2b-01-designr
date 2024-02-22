// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import Link from "next/link";
import { useState, useEffect } from "react";

// ||||||||||||||||||||||||||||| Menu Component ||||||||||||||||||||||||||||||||||||

const Menu = ({ active, setActive }) => {
  // Functions
  useEffect(() => {
    // Enter some content here.
    if (document) {
      if (active) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    }
  }, [active]);

  // Return
  return (
    <div
      className={`menu fixed top-0 left-0 w-full h-[100vh] bg-color_secondary transition-all duration-300 ${
        active ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <ul className="list absolute flex flex-col text-center text-5xl font-bold text-color_bg gap-y-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <li className="relative overflow-hidden w-full py-2">
          <Link href={"/"} className="" onClick={() => setActive(!active)}>
            Accueil
          </Link>
          <span className="inline-block "></span>{" "}
          {/*absolute top-1/2 left-1/2 -translate-x-1/2 bg-color_bg h-1 w-full*/}
        </li>
        <li className="relative overflow-hidden w-full py-2">
          <Link
            href={"/a-propos"}
            className=""
            onClick={() => setActive(!active)}
          >
            A Propos
          </Link>
          <span className="inline-block "></span>{" "}
          {/*absolute top-1/2 left-1/2 -translate-x-1/2 bg-color_bg h-1 w-full*/}
        </li>
        <li className="relative overflow-hidden w-full py-2">
          <Link
            href={"/tarifs"}
            className=""
            onClick={() => setActive(!active)}
          >
            Tarifs
          </Link>
          <span className="inline-block "></span>{" "}
          {/*absolute top-1/2 left-1/2 -translate-x-1/2 bg-color_bg h-1 w-full*/}
        </li>
        <li className="relative overflow-hidden w-full py-2">
          <Link
            href={"/projets"}
            className=""
            onClick={() => setActive(!active)}
          >
            Projets
          </Link>
          <span className="inline-block "></span>{" "}
          {/*absolute top-1/2 left-1/2 -translate-x-1/2 bg-color_bg h-1 w-full*/}
        </li>
        <li className="relative overflow-hidden w-full py-2">
          <Link
            href={"/articles"}
            className=""
            onClick={() => setActive(!active)}
          >
            Le Blog
          </Link>
          <span className="inline-block "></span>{" "}
          {/*absolute top-1/2 left-1/2 -translate-x-1/2 bg-color_bg h-1 w-full*/}
        </li>
      </ul>
    </div>
  );
};
export default Menu;
