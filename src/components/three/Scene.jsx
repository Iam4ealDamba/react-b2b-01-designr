// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Image from "./models/Image";

// ||||||||||||||||||||||||||||| Scene Component ||||||||||||||||||||||||||||||||||||

const Scene = ({ is_enter, url }) => {
  // Return
  return (
    <Canvas camera={{ fov: 7.5 }}>
      <pointLight position={[0, 10, 10]} />
      <Suspense fallback={null}>
        <Image active={is_enter} url={url} />
      </Suspense>
    </Canvas>
  );
};
export default Scene;
