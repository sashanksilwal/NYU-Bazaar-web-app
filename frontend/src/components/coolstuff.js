import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry"></boxBufferGeometry>
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

function Cool() {
  return (
    <Canvas className="Canvas">
      <OrbitControls />
      <Stars />
      <ambientLight intensity="0.5" />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Box></Box>
    </Canvas>
  );
}

export default Cool;
