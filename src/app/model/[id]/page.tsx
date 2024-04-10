"use client";
import React from "react";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";

import "@/app/model/module.model.css";

export default function Model() {
  return (
    <div>
      <div id="canvas-container" className={"height: 100%;"}>
        <Link
          href={"/"}
          className={
            "flex z-10 fixed top-4 left-8 bg-red-200 px-4 py-2 rounded-3xl"
          }
        >
          Back
        </Link>
        <Link
          href={"/"}
          className={
            "flex z-10 fixed bottom-4 right-8 bg-red-200 px-3 py-2 justify-center rounded-3xl"
          }
        >
          ...
        </Link>
        <Canvas className={"height: 100%"}>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <mesh>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
        </Canvas>
      </div>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    createRoot(rootElement).render(<Model />);
  } else {
    console.error("Root element not found.");
  }
});
