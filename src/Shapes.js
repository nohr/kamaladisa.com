import React, { useRef, useMemo } from 'react'
import './App.css';
import * as THREE from "three";
import { useGLTF } from '@react-three/drei'

export function TicketBooth() {
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

export function Car() {
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

export function Cone(xpos) {
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

export function Evans() {
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

export function Light() {
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

export function Stars() {
    let group = useRef();

    const [geo, mat, coords] = useMemo(() => {
        const geo = new THREE.SphereBufferGeometry(1, 5, 5);
        const mat = new THREE.MeshStandardMaterial({
            color: new THREE.Color('#ffffff'),
            emissive: '#ffffff',
            emissiveIntensity: 100,
        });
        const coords = new Array(400)
            .fill()
            .map(() => [
                Math.random() * 2000 - 1000,
                Math.random() * 2000 - 1000,
                Math.random() * 2000 - 1000
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

// function Floor() {
//   return (
//     <mesh position={[0, -85, 0]} rotation={[Math.PI / -2, 0, 0]}>
//       <planeGeometry args={[2000, 2000, 1, 1]} />
//       <meshStandardMaterial color="black" transparent />
//     </mesh>
//   );
// }