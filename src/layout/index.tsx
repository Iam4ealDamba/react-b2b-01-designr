// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";

// ||||||||||||||||||||||||||||| Layout Component ||||||||||||||||||||||||||||||||||||

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Hooks
  const [val, setVal] = useState();

  // Functions
  useEffect(() => {
    // Enter some content here.
  }, []);

  // Return
  return (
    <div className="app-container">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
