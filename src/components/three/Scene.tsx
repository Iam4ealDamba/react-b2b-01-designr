// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import ThreeImage from "./models/ThreeImage";

// ||||||||||||||||||||||||||||| Scene Component ||||||||||||||||||||||||||||||||||||

interface SceneProps {
  is_enter: boolean;
  url: string;
}

const Scene: React.FC<SceneProps> = ({ is_enter, url }) => {
  // Return
  return (
    <Canvas camera={{ fov: 7.5 }}>
      <pointLight position={[0, 10, 10]} />
      <Suspense fallback={null}>
        <ThreeImage active={is_enter} url={url} />
      </Suspense>
    </Canvas>
  );
};
export default Scene;
