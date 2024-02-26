// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import LinkButton from "@/components/button/LinkButton";
import StandardButton from "@/components/button/StandardButton";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

// ||||||||||||||||||||||||||||| Footer Component ||||||||||||||||||||||||||||||||||||

const Footer = () => {
  // Hooks
  const [val, setVal] = useState();

  // Functions
  useEffect(() => {
    // Enter some content here.
  }, []);

  // Return
  return (
    <footer className="">
      <div className="top bg-tw_secondary first px-20 py-6 flex space-x-6 space-y-4 justify-between items-center max_sm:flex-col max_sm:px-10">
        <div className="left">
          <h2 className="text-5xl font-bold text-tw_bg max_md:text-3xl max_md:text-center">
            Travaillons Ensemble !
          </h2>
        </div>
        <div className="right">
          <div className="buttons flex items-center gap-x-10">
            <LinkButton link={"/contact"} color="bg-tw_bg">
              Nous Contacter
            </LinkButton>
          </div>
        </div>
      </div>
      <div className="bottom px-20 py-10 max_sm:px-10">
        <div className="first flex justify-between items-center pb-20 max_md:flex-col max_md:gap-y-10">
          <div className="left">
            <div className="image">
              <Image
                src="/logo-footer.svg"
                alt="logo-footer"
                width={300}
                height={220}
                className="text-tw_text"
              />
            </div>
          </div>
          <div className="right">
            <div className="list flex gap-x-6">
              <a
                href="https://iamdamba-dev.fr"
                rel="noreferrer"
                target="_blank"
                className="icon bg-tw_inactive px-3 py-3 rounded-full cursor-pointer transition-all duration-300 hover:bg-tw_primary"
              >
                <FaFacebookF className="text-lg" />
              </a>
              <a
                href="https://iamdamba-dev.fr"
                rel="noreferrer"
                target="_blank"
                className="icon bg-tw_inactive px-3 py-3 rounded-full cursor-pointer transition-all duration-300 hover:bg-tw_primary"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="https://iamdamba-dev.fr"
                rel="noreferrer"
                target="_blank"
                className="icon bg-tw_inactive px-3 py-3 rounded-full cursor-pointer transition-all duration-300 hover:bg-tw_primary"
              >
                <FaTwitter className="text-lg" />
              </a>
            </div>
          </div>
        </div>
        <div className="second text-center">
          <p className="text-sm font-bold">
            © 2023. Design.R | Tout Droits Reservés |{" "}
            <a
              href="https://iamdamba-dev.fr"
              rel="noreferrer"
              target="_blank"
              className="underline underline-offset-2 transition-all duration-300 hover:text-tw_primary"
            >
              Designé et Créés par IamDamba Dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
