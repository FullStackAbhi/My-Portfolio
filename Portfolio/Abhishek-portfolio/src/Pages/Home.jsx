import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../Components/Loader";
import Island from "../models/island";
import Sky from "../models/Sky";
import { Bird } from "../models/Bird";
import Plain from "../models/Plain";
import HomeInfo from "../Components/HomeInfo";
import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";
import { useRef } from "react";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [isPlaymusic, setisPlaymusic] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };
  useEffect(() => {
    if (isPlaymusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  });

  const adjustPlaneForScreenSize = () => {
    let screenScale;
    let screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [(0, -4, -4)];
    }
    return [screenScale, screenPosition];
  };

  const [islandScale, islandposition, islandRotaion] =
    adjustIslandForScreenSize();

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-12 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? `cursor-grabing` : `cursor-grab`
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#0c669e"
            groundColor="#000000"
            intensity={1}
          />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={islandposition}
            scale={islandScale}
            rotation={islandRotaion}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plain
            rotation={[0, 20, 0]}
            scale={planeScale}
            position={planePosition}
            isRotating={isRotating}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-2">
        {" "}
        <img
          src={isPlaymusic ? soundon : soundoff}
          alt="sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setisPlaymusic(!isPlaymusic)}
        />
      </div>
    </section>
  );
};

export default Home;
