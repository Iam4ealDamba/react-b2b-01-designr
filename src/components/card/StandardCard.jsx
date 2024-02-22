// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { useState, useEffect } from "react";

// ||||||||||||||||||||||||||||| StandardCard Component ||||||||||||||||||||||||||||||||||||

const StandardCard = ({ color, title, content, icon }) => {
  // Hooks
  const [val, setVal] = useState();

  // Functions
  useEffect(() => {
    // Enter some content here.
  }, []);

  // Return
  return (
    <div
      className={`w-[280px] h-[320px] px-10 flex flex-col items-center justify-center gap-y-4 ${color}`}
    >
      <div className="first">
        <div className="icon px-5 py-5 bg-color_bg rounded-full">{icon}</div>
      </div>
      <div className="second font-bold text-color_bg">{title}</div>
      <div className="third text-color_bg">{content}</div>
    </div>
  );
};
export default StandardCard;
