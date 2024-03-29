// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import Link from "next/link";
import { useState, useEffect } from "react";

// ||||||||||||||||||||||||||||| LinkButton Component ||||||||||||||||||||||||||||||||||||

interface LinkButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  color?: string;
  link: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  onClick,
  children,
  color,
  link,
}) => {
  // Hooks
  const [val, setVal] = useState();

  // Functions
  useEffect(() => {
    // Enter some content here.
  }, []);

  // Return
  return (
    <Link
      href={link}
      className={`px-8 py-3 rounded-full font-medium text-sm ${color && color}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
export default LinkButton;
