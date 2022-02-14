import React, { Suspense, useRef, useMemo } from 'react'
import * as THREE from "three";
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'
import { Bloom } from '@react-three/postprocessing'
import { BlurPass, Resizer, KernelSize } from 'postprocessing'
import './App.css';

function Stars() {
  let group = useRef();

  const [geo, mat, coords] = useMemo(() => {
    const geo = new THREE.SphereBufferGeometry(1, 10, 10);
    const mat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#ffffff'),
      emissive: '#ffffff',
      emissiveIntensity: 100,
    });
    const coords = new Array(200)
      .fill()
      .map(i => [
        Math.random() * 800 - 400,
        Math.random() * 800 - 400,
        Math.random() * 800 - 400
      ]);
    return [geo, mat, coords];
  }, []);

  return (
    <group ref={group}>
      {coords.map(([p1, p2, p3], i) => (
        <mesh key={i} geometry={geo} material={mat} position={[p1, p2, p3]} />
      ))}
    </group>
  );
}

function Car() {
  const { nodes, materials } = useGLTF("Models/STOP_SIGN.gltf")
  const group = useRef()

  return (
    <group ref={group} dispose={null}
      scale={.5}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StopSignMat1.geometry}
        material={nodes.StopSignMat1.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StopSignMat.geometry}
        material={materials.Mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StopSignMat1_1.geometry}
        material={nodes.StopSignMat1_1.material}
      />
    </group>
  )
}

function App() {
  return (
    <Canvas linear shadowMap camera={{ position: [0, 0, 200], fov: 50 }}>
      <ambientLight intensity={1} />
      <pointLight position={[0, 0, 10]} intensity={5} />
      <pointLight position={[0, 0, -10]} intensity={5} />
      {/* <spotLight position={[-10, 10, 10]} angle={0.2} intensity={2} castShadow /> */}
      <Suspense fallback={null}>
        <Stars />
        <Car />
      </Suspense>
      <Bloom
        intensity={100.0} // The bloom intensity.
        blurPass={undefined} // A blur pass.
        width={Resizer.AUTO_SIZE} // render width
        height={Resizer.AUTO_SIZE} // render height
        kernelSize={KernelSize.LARGE} // blur kernel size
        luminanceThreshold={9} // luminance threshold. Raise this value to mask out darker elements in the scene.
        luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
      />
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={100}
        maxDistance={300} />
    </Canvas>
  );
}

useGLTF.preload("/STOP_SIGN.gltf");
export default App;
