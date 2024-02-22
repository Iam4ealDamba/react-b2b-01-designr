// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { useState, useEffect } from "react";

// ||||||||||||||||||||||||||||| StandardButton Component ||||||||||||||||||||||||||||||||||||

const StandardButton = ({ onClick, children, color }) => {
  // Hooks
  const [val, setVal] = useState();

  // Functions
  useEffect(() => {
    // Enter some content here.
  }, []);

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
