import React, { useEffect, useRef } from "react";
import planeScene from "../assets/3d/plane.glb";
import { useAnimations, useGLTF } from "@react-three/drei";

const Plain = ({ isRotating, ...props }) => {
  const planeref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, planeref);

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={planeref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plain;
