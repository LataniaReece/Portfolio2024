"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Html,
} from "@react-three/drei";

const HeroSection = () => {
  const firstName = "Latania";
  const lastName = "Reece";

  const renderLetters = (name: string, key: string) => {
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span
        key={index}
        // className={`name-animation name-animation-${key}-index inline-block opacity-0 `}
      >
        {letter}
      </span>
    ));
  };

  return (
    <div className="relative h-screen w-full  flex items-center">
      <div className="flex-[3]">
        <div className=" flex flex-col w-fit  mx-auto text-left">
          <h1
            className="text-6xl font-extrabold"
            aria-label={`${firstName} ${lastName}`}
          >
            <span className="block">{renderLetters(firstName, "first")}</span>
            <span className="block mt-4">
              {renderLetters(lastName, "last")}
            </span>
          </h1>
          <p className="block bg-gradient-to-tr from-blue-500 via-blue-200 to-blue-500 bg-clip-text text-2xl font-bold text-transparent uppercase md:text-4xl">
            Software Developer
          </p>
        </div>
      </div>
      <Canvas className="flex-[4]">
        <Suspense fallback={null}>
          {/* Add lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 5]} intensity={1} />

          {/* Floating spheres */}
          <Sphere args={[1, 100, 200]} scale={2.5} position={[-2, 0, -3]}>
            <MeshDistortMaterial color="#FF69B4" distort={0.5} speed={2} />
          </Sphere>

          <Sphere args={[1, 100, 200]} scale={2} position={[2, 1, -3]}>
            <MeshDistortMaterial color="#6A5ACD" distort={0.3} speed={1.5} />
          </Sphere>

          <Sphere args={[1, 100, 200]} scale={1.5} position={[0, -1.5, -3]}>
            <MeshDistortMaterial color="#ADD8E6" distort={0.4} speed={1} />
          </Sphere>

          <Sphere args={[1, 100, 300]} scale={1.5} position={[0, -10, -0]}>
            <MeshDistortMaterial color="#ADD8E6" distort={0.4} speed={1} />
          </Sphere>

          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroSection;
