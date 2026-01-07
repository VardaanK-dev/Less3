"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { Mesh } from "three";

function LogoPlane({ src }: { src: string }) {
  const mesh = useRef<Mesh>(null);
  const texture = useTexture(src);

  useFrame(() => {
    if (!mesh.current) return;
    mesh.current.rotation.y += 0.002;
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[2, 2]} />
      <meshStandardMaterial map={texture} transparent />
    </mesh>
  );
}
