"use client"

import { useRef, useMemo, Suspense } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, Stars, Sparkles } from "@react-three/drei"
import * as THREE from "three"

/* Glowing blue planet with an inner glowing core and a soft atmosphere shell */
function Planet() {
  const planetRef = useRef<THREE.Mesh>(null)
  const atmosphereRef = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (planetRef.current) planetRef.current.rotation.y += delta * 0.12
  })

  return (
    <group>
      {/* Core planet */}
      <mesh ref={planetRef}>
        <icosahedronGeometry args={[1.6, 8]} />
        <meshStandardMaterial
          color="#0b2a6b"
          emissive="#1e6bff"
          emissiveIntensity={0.55}
          roughness={0.35}
          metalness={0.6}
          flatShading
        />
      </mesh>

      {/* Wireframe hologram overlay */}
      <mesh scale={1.02}>
        <icosahedronGeometry args={[1.6, 3]} />
        <meshBasicMaterial color="#00f5ff" wireframe transparent opacity={0.18} />
      </mesh>

      {/* Atmospheric glow shell (backside additive) */}
      <mesh ref={atmosphereRef} scale={1.28}>
        <sphereGeometry args={[1.6, 64, 64]} />
        <meshBasicMaterial
          color="#2a7bff"
          transparent
          opacity={0.22}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Outer faint halo */}
      <mesh scale={1.55}>
        <sphereGeometry args={[1.6, 48, 48]} />
        <meshBasicMaterial
          color="#00f5ff"
          transparent
          opacity={0.06}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  )
}

/* Futuristic rings made of segmented arcs that rotate slowly */
function FuturisticRings() {
  const ringGroup = useRef<THREE.Group>(null)
  const innerRing = useRef<THREE.Mesh>(null)
  const outerRing = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (ringGroup.current) ringGroup.current.rotation.z += delta * 0.15
    if (innerRing.current) innerRing.current.rotation.z -= delta * 0.25
    if (outerRing.current) outerRing.current.rotation.z += delta * 0.1
  })

  return (
    <group ref={ringGroup} rotation={[Math.PI / 2.6, 0, 0]}>
      {/* Solid glowing ring */}
      <mesh>
        <torusGeometry args={[2.6, 0.02, 16, 128]} />
        <meshStandardMaterial
          color="#00f5ff"
          emissive="#00f5ff"
          emissiveIntensity={2}
          toneMapped={false}
        />
      </mesh>

      {/* Thicker violet band */}
      <mesh ref={innerRing} scale={0.9}>
        <torusGeometry args={[2.6, 0.06, 2, 96]} />
        <meshStandardMaterial
          color="#7c3aed"
          emissive="#7c3aed"
          emissiveIntensity={1.4}
          transparent
          opacity={0.7}
          toneMapped={false}
        />
      </mesh>

      {/* Wide outer dashed-look ring */}
      <mesh ref={outerRing} scale={1.25}>
        <torusGeometry args={[2.6, 0.015, 8, 200]} />
        <meshStandardMaterial
          color="#2563eb"
          emissive="#2563eb"
          emissiveIntensity={1.6}
          transparent
          opacity={0.55}
          toneMapped={false}
        />
      </mesh>
    </group>
  )
}

/* Rotates the whole rig slightly toward the mouse pointer */
function MouseRig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null)
  const { pointer } = useThree()

  useFrame(() => {
    if (!group.current) return
    const targetX = pointer.y * 0.25
    const targetY = pointer.x * 0.4
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.05
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.05
  })

  return <group ref={group}>{children}</group>
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[5, 3, 5]} intensity={2.2} color="#00f5ff" />
      <pointLight position={[-5, -2, -3]} intensity={1.6} color="#7c3aed" />
      <pointLight position={[0, 4, -5]} intensity={1.2} color="#2563eb" />

      <MouseRig>
        <Float speed={1.6} rotationIntensity={0.3} floatIntensity={1.1} floatingRange={[-0.15, 0.15]}>
          <Planet />
          <FuturisticRings />
          {/* Hologram sparkles hugging the planet */}
          <Sparkles count={60} scale={5} size={3} speed={0.4} color="#00f5ff" opacity={0.8} />
        </Float>
      </MouseRig>

      {/* Deep starfield */}
      <Stars radius={80} depth={50} count={4000} factor={4} saturation={0} fade speed={1} />
    </>
  )
}

export function PlanetScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}
