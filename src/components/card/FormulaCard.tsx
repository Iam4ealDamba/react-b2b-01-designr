// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { useState, useEffect } from "react";
import StandardButton from "../button/StandardButton";
import LinkButton from "../button/LinkButton";

// ||||||||||||||||||||||||||||| FormulaCard Component ||||||||||||||||||||||||||||||||||||

interface FormulaCardProps {
  title: string;
  price: string;
  per: string;
  content: string;
  color: string;
  separator: string;
}

const FormulaCard : React.FC<FormulaCardProps> = ({ title, price, per, content, color, separator }) => {
  // Return
  return (
    <div
      className={`formula-item flex flex-col gap-y-4 max-w-[300px] px-6 py-8 text-start ${color}`}
    >
      <div className="first flex flex-col">
        <h3 className="text-lg font-black">{title}</h3>
        <hr className={separator} />
      </div>
      <div className="second flex flex-col pb-4">
        <p className="text-sm font-bold">À partir de </p>
        <h3 className="text-lg font-bold">
          € {parseFloat(price).toFixed(2).toString()} EUR
        </h3>
        <p className="text-sm font-bold">par {per}</p>
        <hr className={separator} />
      </div>
      <div className="third pb-12">
        <p className="font-bold text-sm">{content}</p>
      </div>
      <div className="forth px-2 mx-auto">
        <LinkButton
          link={"/contact"}
          color={"w-full bg-tw_bg text-tw_text"}
        >
          Nous Contacter
        </LinkButton>
      </div>
    </div>
  );
};
export default FormulaCard;
