// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

// ||||||||||||||||||||||||||||| AccordionButton Component ||||||||||||||||||||||||||||||||||||

interface IAccordionButtonProps {
  title: string;
  content: string;
}

const AccordionButton: React.FC<IAccordionButtonProps> = ({
  title,
  content,
}) => {
  // Hooks
  const [is_active, setActive] = useState(false);

  // Return
  return (
    <button
      title={title}
      className="w-full max-w-[800px] flex flex-col px-4 py-3 bg-tw_inactive"
      onClick={() => setActive(!is_active)}
    >
      <div
        aria-label="top"
        className="w-full flex gap-x-6 justify-between items-center"
      >
        <p className="w-full text-start truncate max_sm:max-w-[400px]">
          {title}
        </p>
        <FaChevronDown
          className={`text-lg transition-all duration-300 ${
            is_active ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <div className="w-full">
        <p
          className={`text-start transition-all duration-300 ${
            is_active ? "h-fiy py-4 opacity-100" : "h-0 py-0 opacity-0"
          }`}
        >
          {content}
        </p>
      </div>
    </button>
  );
};
export default AccordionButton;
