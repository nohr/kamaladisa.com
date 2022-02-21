import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Car, Cone, TicketBooth, Evans, Head, Light, Stars, Snacks } from './Shapes';
import { useGLTF, OrbitControls } from '@react-three/drei'
import { Link, Switch, Route } from "wouter"
import styled from 'styled-components';
import { HTTCIS, HTTCISText } from './HTTCIS';

const Enter = styled(Link)`
  color: white;
  font-size: 48px;
  text-decoration: none;
  position: absolute;
  z-index: 30;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 5px solid white;
  padding: 2px 10px 5px 10px;
  transition: 1s;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover{
    animation: pulse 3s ease infinite;
    @keyframes pulse {
      0%,
      50%,
      100% {
        opacity: 1;
      }

      25%,
      75% {
        opacity: .5;
      }
    }
  }
`

function Shapes() {

  return (
    <>
      <Head />
      <Stars />
      <Switch>
        <Route path='/'>
          <TicketBooth />
          <Light />
          <Car />
          <Evans />
          <Cone xpos={-250} />
          <Cone xpos={-125} />
          <Cone xpos={0} />
          <Cone xpos={125} />
          <Cone xpos={250} />
        </Route>
        <Route path='/HTTCIS'>
          {/* <Cone xpos={0} /> */}
          <Snacks />
          <HTTCISText />
        </Route>
      </Switch>
    </>
  )
}

function Controls() {
  return (
    <OrbitControls
      enablePan={false}
      enableZoom={true}
      enableRotate={true}
      minDistance={1400}
      maxDistance={1800}
      minAzimuthAngle={Math.PI / -20}
      maxAzimuthAngle={Math.PI / 20}
      minPolarAngle={Math.PI / 2.05}
      maxPolarAngle={Math.PI / 2}
      target={[0, 150, 0]}
    />
  )
}

function CanvasComp() {
  const [rotation, setRotation] = useState([0, 0, 0, 0]);
  const onMouseMove = e => {
    setRotation([
      ((e.clientY / e.target.offsetHeight - 0.5) * -Math.PI) / 8,
      ((e.clientX / e.target.offsetWidth - 0.5) * -Math.PI) / 8,
      0
    ]);
  };
  return (
    <Canvas linear shadows shadowMap frameloop='demand'
      camera={{ position: [0, 150, 1400], fov: 20, far: 6000, near: 1 }}
      onCreated={({ camera }) => camera.lookAt(0, 150, 0)}
      onMouseMove={onMouseMove}
      rotation={rotation}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <spotLight castShadow color={"#ffffff"} position={[200, 150, -200]} intensity={2} />
        <Shapes />
      </Suspense>
      {true && <Controls />}
    </Canvas>
  )
}

function App() {

  return (
    <>
      <Switch>
        <Route path='/HTTCIS'>
          <HTTCIS />
        </Route>
      </Switch>
      <CanvasComp />
    </>
  );
}

useGLTF.preload("/Models/me face.gltf");
useGLTF.preload("/Models/Evans.gltf");
useGLTF.preload("/Models/Cone.gltf");
useGLTF.preload("/Models/car.gltf");
useGLTF.preload("/Models/Cone.gltf");
useGLTF.preload("/Models/TicketBooth.gltf");
useGLTF.preload("/Models/SnackSection.gltf");

export default App;