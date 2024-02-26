// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { useState, useEffect, useRef } from "react";
import { extend, useFrame, useLoader } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

import * as THREE from "three";

import imageVertex from "../shaders/image.vert";
import imageFragment from "../shaders/image.frag";

// ||||||||||||||||||||||||||||| Image Component ||||||||||||||||||||||||||||||||||||

const ImageShaderMaterial = shaderMaterial(
  { uColor: new THREE.Color(0x000), uTime: 0, uTexture: new THREE.Texture() },
  // vertex shader
  imageVertex,
  // fragment shader
  imageFragment
);

extend({ ImageShaderMaterial });

// ||||||||||||||||||||||||||||| Image Component ||||||||||||||||||||||||||||||||||||

const Image = ({ active, url }) => {
  // Hooks
  const ref = useRef(null);
  const [image] = useLoader(THREE.TextureLoader, [url]);

  useFrame(
    (state) => (ref.current.uTime = active ? state.clock.elapsedTime : 0)
  );

  // Return
  return (
    <mesh>
      <planeGeometry args={[0.4, 0.6, 16, 16]} />
      <imageShaderMaterial
        uColor={!active ? "#fff" : "#f00"}
        uTexture={image}
        ref={ref}
      />
    </mesh>
  );
};
export default Image;
