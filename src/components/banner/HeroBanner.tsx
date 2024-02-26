// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { useState, useEffect } from "react";

// ||||||||||||||||||||||||||||| HeroBanner Component ||||||||||||||||||||||||||||||||||||

const HeroBanner = () => {
  // Hooks
  const [val, setVal] = useState();

  // Functions
  useEffect(() => {
    // Enter some content here.
  }, []);

  // Return
  return (
    <section className="text-7xl font-black pt-32 px-20">
      <h1 className="max-w-[800px]">
        Agence Design Digital Assurant{" "}
        <b className="text-tw_primary">La Realisation De Vos Rêves</b>
      </h1>
    </section>
  );
};
export default HeroBanner;
