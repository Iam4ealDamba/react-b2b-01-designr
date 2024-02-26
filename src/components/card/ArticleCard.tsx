// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styled from "styled-components";

const LinStyled = styled(Link)`
  &:hover {
    img {
      transform: scale(1.2);
      transform-origin: center;
      filter: grayscale(0%);
      filter: brightness(1);
    }
  }
`;

// ||||||||||||||||||||||||||||| ArticleCard Component ||||||||||||||||||||||||||||||||||||

interface ArticleCardProps {
  title: string;
  date: string;
  tag: string;
  image: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  date,
  tag,
  image,
}) => {
  // Return
  return (
    <LinStyled
      href={"/articles/1/premier-article"}
      className="link inline-block w-full max-w-[340px]"
    >
      <div className="item flex flex-col gap-y-3">
        <div className="first">
          <div className="image overflow-hidden h-[200px]">
            <Image
              src={image}
              alt="image"
              width={340}
              height={10}
              className="bg-tw_text transition-all duration-300  ease-in-out grayscale brightness-90"
            />
          </div>
        </div>
        <div className="second flex gap-x-10">
          <div className="left">
            <p className="text-sm font-bold">{tag}</p>
          </div>
          <div className="right">
            <p className="text-sm">{date}</p>
          </div>
        </div>
        <div className="third">
          <div className="title font-bold">{title}</div>
        </div>
      </div>
    </LinStyled>
  );
};
export default ArticleCard;
