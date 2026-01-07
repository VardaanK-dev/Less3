"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useRef, useState } from "react";

function LogoPlane({ src }: { src: string }) {
  const mesh = useRef<THREE.Mesh>(null);
  const texture = useTexture(src);

  useFrame(() => {
    if (!mesh.current) return;
    // subtle idle rotation
    mesh.current.rotation.y += 0.002;
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[2, 2]} />
      <meshStandardMaterial map={texture} transparent />
    </mesh>
  );
}

export default function CreditThree({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMouse({ x: (x - 0.5) * 1.2, y: -(y - 0.5) * 1.0 });
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-16">
      <div className="text-gray-200">
        <h2 className="text-2xl font-semibold mb-3">{title}</h2>
        <p className="text-gray-400">{desc}</p>
      </div>

      <div
        onMouseMove={handleMouseMove}
        className="relative h-72 rounded-2xl overflow-hidden bg-gray-800/60 backdrop-blur-md ring-1 ring-white/10 shadow-[0_0_30px_rgba(255,255,255,0.12)]"
      >
        <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[2, 2, 3]} intensity={0.8} />
          <group rotation={[mouse.y, mouse.x, 0]}>
            <LogoPlane src={icon} />
          </group>
        </Canvas>
      </div>
    </section>
  );
}
