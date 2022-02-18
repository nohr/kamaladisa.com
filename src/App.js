import React, { Suspense } from 'react'
import './App.css';
import { Canvas } from '@react-three/fiber'
import { Car, Cone, TicketBooth, Evans, Light, Stars } from './Shapes';
import { useGLTF, OrbitControls } from '@react-three/drei'
import { Bloom, EffectComposer, SSAO, SMAA } from '@react-three/postprocessing'
import { Resizer, KernelSize, EdgeDetectionMode } from 'postprocessing'
import { Link, Switch, Route } from "wouter"
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 30;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`
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



function App() {

  return (
    <>
      <Switch>
        <Route path='/'>
          <Enter to='/HTTCIS'> HTTCIS </Enter>
        </Route>
        <Container>
          <Route path='/HTTCIS'>
            <p>Hi</p>
          </Route>
        </Container>
      </Switch>
      <CanvasComp />
    </>
  );
}

useGLTF.preload("/Models/Evans.gltf");
useGLTF.preload("/Models/Cone.gltf");
useGLTF.preload("/Models/car.gltf");
useGLTF.preload("/Models/Cone.gltf");
useGLTF.preload("/Models/TicketBooth.gltf");


export default App;

function Shapes() {

  return (
    <>
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
          <Cone xpos={0} />
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
      maxDistance={1000}
      minAzimuthAngle={Math.PI / -3.5}
      maxAzimuthAngle={Math.PI / 3.5}
      // minPolarAngle={Math.PI / 3}
      maxPolarAngle={Math.PI / 2}
    />
  )
}

function CanvasComp() {

  return (
    <Canvas linear shadows shadowMap frameloop='demand' camera={{ position: [0, 0.25, 1], fov: 60, far: 3000 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <spotLight castShadow color={"#ffffff"} position={[200, 150, -200]} intensity={2} />
        <Shapes />
        <EffectComposer>
          <SSAO samples={25} intensity={40} luminanceInfluence={0.5} radius={10} scale={0.5} bias={0.5} />
          <SMAA edgeDetectionMode={EdgeDetectionMode.DEPTH} />
          {/* <Bloom
            intensity={100.0} // The bloom intensity.
            blurPass={undefined} // A blur pass.
            width={Resizer.AUTO_SIZE} // render width
            height={Resizer.AUTO_SIZE} // render height
            kernelSize={KernelSize.LARGE} // blur kernel size
            luminanceThreshold={90} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
          /> */}
        </EffectComposer>
      </Suspense>

      <Controls />

    </Canvas>
  )
}
