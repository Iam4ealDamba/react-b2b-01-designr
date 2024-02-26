// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { useState, useEffect } from "react";

// ||||||||||||||||||||||||||||| StandardButton Component ||||||||||||||||||||||||||||||||||||

interface StandardButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  color?: string;
}

const StandardButton: React.FC<StandardButtonProps> = ({
  onClick,
  children,
  color,
}) => {
  // Return
  return (
    <button
      className={`px-8 py-3 rounded-full font-medium text-sm ${color && color}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default StandardButton;
