import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Car, Cone, TicketBooth, Evans, Light, Stars, Snacks, state } from './Shapes';
import { useGLTF, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Link, Switch, Route } from "wouter"
import styled from 'styled-components';
import { Film, HTTCISText } from './HTTCIS';


const Face = styled.img`
display: block;
  position: absolute;
  z-index: 300;
  top: 0;
  left: 50%;
  cursor: pointer;
  transform: translateX( -50%);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;


    width: 10vw;
    height: auto;
  

  @media screen and (max-width: 768px) {
      width: 25vw;
  }

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

function Head() {
  return <Link to='/'><Face src='/meface.gif' /></Link>
}
function Shapes() {

  return (
    <>
      <Stars />
      <Switch>
        <Route path='/'>

          <spotLight color={"#ffffff"} position={[200, 150, -200]} intensity={2} />
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
          <Cone xpos={300} ypos={-40} rot={Math.PI / 4} />
          <Cone xpos={-290} ypos={-25} rot={Math.PI / 10} />
          <Cone xpos={0} ypos={75} rot={Math.PI / 15} />
          <Cone xpos={-300} ypos={300} rot={Math.PI / 15} />
          <Cone xpos={300} ypos={330} rot={Math.PI / 28} />
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
      minDistance={700}
      maxDistance={1400}
      minAzimuthAngle={Math.PI / -20}
      maxAzimuthAngle={Math.PI / 20}
      minPolarAngle={Math.PI / 3}
      maxPolarAngle={Math.PI / 1.75}
      target={[0, 150, 0]}
    />
  )
}

function CanvasComp() {
  const camera = useRef(null);

  return (
    <Canvas linear frameloop='always' dpr={[1, 2]}
    >
      <PerspectiveCamera
        makeDefault
        ref={camera}
        fov={20}
        far={4000}
        near={1}
        target={[0, 150, 0]}
        position={[0, 150, 1400]}
      // onUpdate={self => self.updateProjectionMatrix()}
      />
      <Suspense fallback={null}>
        <Shapes />
      </Suspense>
      {true && <Controls />}
    </Canvas>
  )
}

function App() {

  var x = window.matchMedia("(max-width: 768px)")
  if (x.matches) {
    state.mobile = true;
    console.log(state.mobile);
  }

  return (
    <>
      <Switch>
        <Route path='/'>
          <Head />
        </Route>
        <Route path='/HTTCIS'>
          <Head />
          <Film />
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