import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';

const AnimatedSphere = () => {
    const sphereRef = useRef();
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        sphereRef.current.rotation.x = time * 0.2;
        sphereRef.current.rotation.y = time * 0.3;

        // Pulse effect
        const scale = 1 + Math.sin(time * 2) * 0.05;
        sphereRef.current.scale.set(scale, scale, scale);
    });

    return (
        <Sphere
            ref={sphereRef}
            args={[1, 64, 64]}
            scale={2.5}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <MeshDistortMaterial
                color={hovered ? "#ff0055" : "#00f3ff"}
                attach="material"
                distort={0.6}
                speed={3}
                roughness={0.2}
                metalness={0.9}
                wireframe={false}
            />
        </Sphere>
    );
};

const Hero3D = () => {
    return (
        <div className="h-[100vh] w-full absolute top-0 left-0 -z-10 opacity-80">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} intensity={2} color="#bc13fe" />
                <pointLight position={[10, 10, 5]} intensity={2} color="#00f3ff" />

                <AnimatedSphere />
                <Stars radius={150} depth={50} count={7000} factor={4} saturation={1} fade speed={2} />

                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} enablePan={false} />
            </Canvas>
        </div>
    );
};

export default Hero3D;
