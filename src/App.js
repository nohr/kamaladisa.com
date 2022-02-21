import React, { Suspense, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { Car, Cone, TicketBooth, Evans, Head, Light, Stars, Snacks } from './Shapes';
import { useGLTF, OrbitControls, PerspectiveCamera } from '@react-three/drei'
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
          <Cone xpos={-250} ypos={-25} />
          <Cone xpos={-125} ypos={-25} />
          <Cone xpos={0} ypos={-25} />
          <Cone xpos={125} ypos={-25} />
          <Cone xpos={250} ypos={-25} />
        </Route>
        <Route path='/HTTCIS'>
          <Cone xpos={-50} ypos={25} />
          <Cone xpos={-125} ypos={-25} />
          <Cone xpos={0} ypos={-25} />
          <Cone xpos={125} ypos={-25} />
          <Cone xpos={250} ypos={275} />
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
      maxDistance={1500}
      minAzimuthAngle={Math.PI / -40}
      maxAzimuthAngle={Math.PI / 40}
      minPolarAngle={Math.PI / 2.05}
      maxPolarAngle={Math.PI / 2}
      target={[0, 150, 0]}
    />
  )
}

function CanvasComp() {
  const camera = useRef(null);

  const body = document.querySelector("html");
  body.addEventListener('mousemove', function (e) {
    let scale = -0.000009;
    if (camera.current) {
      camera.current.rotateY(e.movementX * scale);
      camera.current.rotateX(e.movementY * scale);
      camera.current.rotation.z = 0;
    }
  })


  console.log(camera.rotation);


  return (
    <Canvas linear shadows shadowMap frameloop='always'
    // camera={{ position: [0, 150, 1400], fov: 20, far: 6000, near: 1 }}
    // onCreated={({ camera }) => camera.lookAt(0, 150, 0)}
    >
      <PerspectiveCamera
        makeDefault
        ref={camera}
        aspect={1200 / 600}
        fov={20}
        far={4000}
        near={1}
        target={[0, 150, 0]}
        position={[0, 150, 1400]}

        onUpdate={self => self.updateProjectionMatrix()}
      />
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <spotLight castShadow color={"#ffffff"} position={[200, 150, -200]} intensity={2} />
        <Shapes />
      </Suspense>
      {false && <Controls />}
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