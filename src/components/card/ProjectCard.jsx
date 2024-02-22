// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import Link from "next/link";
import { useState, useEffect } from "react";
import StandardButton from "../button/StandardButton";
import styled from "styled-components";
import Scene from "../three/Scene";

// ||||||||||||||||||||||||||||| ProjectCard Component ||||||||||||||||||||||||||||||||||||

const LinkStyled = styled(Link)`
  &:hover {
    button {
      background: #d7b84c;
    }
  }
`;

// ||||||||||||||||||||||||||||| ProjectCard Component ||||||||||||||||||||||||||||||||||||

const ProjectCard = ({ image }) => {
  const [is_enter, setIsEnter] = useState(false);

  // Return
  return (
    <div className="item flex justify-center">
      <LinkStyled
        href={"/projets/1"}
        className="image relative w-[400px] h-[600px]"
        onMouseEnter={() => setIsEnter(true)}
        onMouseLeave={() => setIsEnter(false)}
      >
        <Scene is_enter={is_enter} url={image} className={"brightness-50"} />
        <div
          className={`content absolute bottom-0 flex items-end justify-center w-full h-full left-1/2 -translate-x-1/2 pb-12 text-center transition-all duration-300 ${
            is_enter
              ? "bg-color_bg/50 text-color_text"
              : "bg-transparent text-color_bg"
          }`}
        >
          <div className="text space-y-3">
            <h3
              className={`font-bold transition-all duration-300 ${
                is_enter ? "opacity-100" : "opacity-0"
              }`}
            >
              Titre Du Projet
            </h3>
            <p
              className={`font-bold text-sm transition-all duration-300 ${
                is_enter ? "opacity-100" : "opacity-0"
              }`}
            >
              Jorem ipsum dolor sit amet consectetu
            </p>
            <StandardButton
              color={`bg-color_bg text-color_text font-bold transition-all duration-300`}
            >
              Voir le projet
            </StandardButton>
          </div>
        </div>
      </LinkStyled>
    </div>
  );
};
export default ProjectCard;
