import React, { Suspense, useRef, useMemo } from 'react'
import * as THREE from "three";
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'
import { Bloom } from '@react-three/postprocessing'
import { Resizer, KernelSize } from 'postprocessing'
import './App.css';

function TicketBooth() {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Models/TicketBooth.gltf");
  return (
    <group ref={group} dispose={null}>
      <group position={[0, 110, -270]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Ticket_Booth-Pure_Black_1"].geometry}
          material={materials["Pure Black_1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Ticket_Booth-Metalic_1"].geometry}
          material={materials.Metalic_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Ticket_Booth-Red_Shadow_2"].geometry}
          material={materials["Red Shadow_2"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Ticket_Booth-Wood"].geometry}
          material={materials.Wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Ticket_Booth-Grey"].geometry}
          material={materials.Grey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Ticket_Booth-Red_shadow_1"].geometry}
          material={materials["Red shadow_1"]}
        />
      </group>
    </group>
  );
}

function Car() {
  const { nodes, materials } = useGLTF("Models/car.gltf")
  const group = useRef()

  return (
    <group ref={group} dispose={null}>
      <group position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["car1-Dark_Gradient"].geometry}
          material={nodes["car1-Dark_Gradient"].material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["car1-Nice_Green"].geometry}
          material={nodes["car1-Nice_Green"].material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["car1-Polished_Black"].geometry}
          material={nodes["car1-Polished_Black"].material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["car1-Nice_Green_1"].geometry}
          material={nodes["car1-Nice_Green_1"].material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["car1-Metalic_2"].geometry}
          material={materials.Metalic_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["car1-Rainbow"].geometry}
          material={materials.Rainbow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["car1-Yellow"].geometry}
          material={materials.Yellow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["car1-Polished_Black_1"].geometry}
          material={nodes["car1-Polished_Black_1"].material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["car1-Pure_White"].geometry}
          material={materials["Pure White"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["car1-Dark_Gradient_1"].geometry}
          material={nodes["car1-Dark_Gradient_1"].material}
        />
      </group>
    </group>
  )
}

function Cone(xpos) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Models/Cone.gltf");
  return (
    <group ref={group} dispose={null}>
      <group position={[xpos.xpos, -80, 270]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ConeMat.geometry}
          material={materials.Mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ConeMat1.geometry}
          material={materials.Mat1}
        />
      </group>
    </group>
  );
}

function Evans() {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Models/Evans.gltf");
  return (
    <group ref={group} dispose={null}>
      <group position={[180, 50, -200]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Evans-Metalic_3"].geometry}
          material={materials.Metalic_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Evans-Grey_2"].geometry}
          material={materials.Grey_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Evans-Red_Shadow_3"].geometry}
          material={materials["Red Shadow_3"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Evans-Pure_Black_2"].geometry}
          material={materials["Pure Black_2"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Evans-Pure_White_3"].geometry}
          material={materials["Pure White_3"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Evans-Musterd_2"].geometry}
          material={materials.Musterd_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Evans-Marble_White_2"].geometry}
          material={materials["Marble White_2"]}
        />
      </group>
    </group>
  );
}

function Light() {
  const light = useMemo(() => new THREE.SpotLight(0xffffff), [])
  light.castShadow = true;

  light.shadow.mapSize.width = 1024;
  light.shadow.mapSize.height = 1024;
  light.distance = 650;
  light.intensity = 10;
  light.angle = Math.PI / 3;
  return (
    <>
      <primitive object={light} position={[-280, 270, 300]} />
      <primitive object={light.target} position={[-150, 100, 0]} />
    </>
  )
}

function Stars() {
  let group = useRef();

  const [geo, mat, coords] = useMemo(() => {
    const geo = new THREE.SphereBufferGeometry(1, 10, 10);
    const mat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#ffffff'),
      emissive: '#ffffff',
      emissiveIntensity: 100,
    });
    const coords = new Array(400)
      .fill()
      .map(() => [
        Math.random() * 2000 - 400,
        Math.random() * 2000 - 400,
        Math.random() * 2000 - 400
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

function Floor() {
  return (
    <mesh position={[0, -85, 0]} rotation={[Math.PI / -2, 0, 0]}>
      <planeGeometry args={[2000, 2000, 1, 1]} />
      <meshStandardMaterial color="black" transparent />
    </mesh>
  );
}

function App() {
  return (
    <Canvas linear shadows shadowMap camera={{ position: [0, 300, 800], fov: 50, far: 3000 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <spotLight castShadow color={"#ffffff"} position={[200, 150, -200]} intensity={2} />
        <Evans />
        <Light />
        <Stars />
        <Car />
        <TicketBooth />
        <Cone xpos={-250} />
        <Cone xpos={-125} />
        <Cone xpos={0} />
        <Cone xpos={125} />
        <Cone xpos={250} />
        {/* <Floor /> */}
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
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        minDistance={100}
        maxDistance={800}
        minAzimuthAngle={Math.PI / -3.5}
        maxAzimuthAngle={Math.PI / 3.5}
        // minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}


useGLTF.preload("/Models/Evans.gltf");
useGLTF.preload("/Models/Cone.gltf");
useGLTF.preload("/Models/car.gltf");
useGLTF.preload("/Models/Cone.gltf");
useGLTF.preload("/Models/TicketBooth.gltf");

export default App;
