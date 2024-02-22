// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

// ||||||||||||||||||||||||||||| AccordionButton Component ||||||||||||||||||||||||||||||||||||

const AccordionButton = ({ title, content }) => {
  // Hooks
  const [is_active, setActive] = useState(false);

  // Return
  return (
    <div
      className={`accordion-item bg-color_inactive text-color_text  max-w-[560px] ${
        is_active ? "max-h-fit" : " max-h-[50px]"
      }`}
    >
      <div
        className="top flex gap-x-24 justify-between items-center py-3 px-4 cursor-pointer"
        onClick={() => setActive(!is_active)}
      >
        <p className="font-bold">{title}</p>
        <FaChevronDown
          className={`text-lg transition-all duration-300 ${
            is_active ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <div
        className={`bottom text-start px-4 transition-all duration-300 overflow-auto ${
          is_active ? "h-fit py-2" : " h-[1px]"
        }`}
      >
        <p className={`${is_active ? "opacity-100" : "opacity-0"}`}>
          {content}
        </p>
      </div>
    </div>
  );
};
export default AccordionButton;
