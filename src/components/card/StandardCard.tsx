// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { useState, useEffect } from "react";

// ||||||||||||||||||||||||||||| StandardCard Component ||||||||||||||||||||||||||||||||||||

interface StandardCardProps {
  color: string;
  title: string;
  content: string;
  icon: React.ReactNode;
}

const StandardCard: React.FC<StandardCardProps> = ({
  color,
  title,
  content,
  icon,
}) => {
  // Hooks
  const [val, setVal] = useState();

  // Functions
  useEffect(() => {
    // Enter some content here.
  }, []);

  // Return
  return (
    <div
      className={`w-full max-w-[280px] h-[400px] px-10 flex flex-col items-center justify-center gap-y-4 max_xl:max-w-[340px] ${color}`}
    >
      <div className="first">
        <div className="icon px-5 py-5 bg-tw_bg rounded-full">{icon}</div>
      </div>
      <div className="second font-bold text-tw_bg">{title}</div>
      <div className="third text-tw_bg">{content}</div>
    </div>
  );
};
export default StandardCard;
