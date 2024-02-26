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

interface ProjectCardProps {
  title: string;
  role: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, role, title }) => {
  const [is_enter, setIsEnter] = useState(false);

  // Return
  return (
    <div className="item flex justify-center">
      <LinkStyled
        href={"/projects/1/nom-du-projet"}
        className="image relative w-full  max-w-[400px] h-[600px]"
        onMouseEnter={() => setIsEnter(true)}
        onMouseLeave={() => setIsEnter(false)}
      >
        {/*@ts-ignore*/}
        <Scene is_enter={is_enter} url={image} className={"brightness-50"} />
        <div
          className={`content absolute bottom-0 flex items-end justify-center w-full h-full left-1/2 -translate-x-1/2 pb-12 text-center transition-all duration-300 ${
            is_enter ? "bg-tw_bg/50 text-tw_text" : "bg-transparent text-tw_bg"
          }`}
        >
          <div className="text space-y-3">
            <h3
              className={`font-bold transition-all duration-300 ${
                is_enter ? "opacity-100" : "opacity-0"
              }`}
            >
              {title}
            </h3>
            <p
              className={`font-bold text-sm transition-all duration-300 ${
                is_enter ? "opacity-100" : "opacity-0"
              }`}
            >
              {role}
            </p>
            <StandardButton
              color={`bg-tw_bg text-tw_text font-bold transition-all duration-300`}
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
