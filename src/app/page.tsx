import Image from "next/image";
import React from 'react';
// import { Canvas } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    <div>
      
    <Points
        stride={3}
        frustumCulled
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    
    </div>
    </main>
  );
}
