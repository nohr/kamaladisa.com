import React, { useEffect, useState, useRef, useMemo } from 'react'
import * as THREE from "three";
import { useGLTF, useAnimations, MeshDistortMaterial } from '@react-three/drei'
import useLocation from "wouter/use-location";
import { proxy, useSnapshot } from 'valtio'

const state = proxy({
    sign: "#FFFFFF",
    black: '#000000'
})

export function TicketBooth() {
    const snap = useSnapshot(state)
    const [location, setLocation] = useLocation();
    console.log(location);
    const group = useRef();
    const { nodes, materials } = useGLTF("/Models/TicketBooth.gltf");
    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])

    return (
        <group ref={group} dispose={null}
            onClick={() => setLocation("/HTTCIS")}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}>
            <group position={[0, 56, -130]} rotation={[0, Math.PI / 2, 0]} scale={0.5}
            >

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
                // material-color={hovered ? snap.sign : snap.black}
                />

            </group>
            <MeshDistortMaterial attach="material" distort={1} speed={10} />
        </group>
    );
}

export function Car() {
    const [location, setLocation] = useLocation();
    console.log(location);
    const { nodes, materials } = useGLTF("Models/car.gltf")
    const group = useRef();
    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])

    return (
        <group ref={group} dispose={null}
            onClick={() => setLocation("/HTTCIS")}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}>
            <group position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]} scale={0.5}>
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

export function Evans() {
    const group = useRef();
    const { nodes, materials } = useGLTF("/Models/Evans.gltf");
    return (
        <group ref={group} dispose={null}>
            <group position={[95, 20, -97]} rotation={[0, Math.PI / 2, 0]} scale={0.5}>
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

export function Cone(xpos) {
    const group = useRef();
    const { nodes, materials } = useGLTF("/Models/Cone.gltf");
    return (
        <group ref={group} dispose={null}>
            <group position={[xpos.xpos, -25, 150]}>
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
        const geo = new THREE.SphereBufferGeometry(1, 1, 1);
        const mat = new THREE.MeshStandardMaterial({
            color: new THREE.Color('#ffffff'),
            emissive: '#ffffff',
            emissiveIntensity: 100,
        });
        const coords = new Array(4000)
            .fill()
            .map(() => [
                Math.random() * 2000 - 1000,
                Math.random() * 2000 - 1000,
                Math.random() * 4000 - 4000
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

export function Head() {
    const { nodes, materials, animations } = useGLTF("/Models/me face.gltf");
    const { ref, actions } = useAnimations(animations);
    useEffect(() => {
        // actions.animation_0.play()
        console.log(actions.animation_0);
    })


    const light = useMemo(() => new THREE.SpotLight(0xffffff), [])
    light.castShadow = true;
    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;
    light.distance = 40;
    light.intensity = 19;
    light.angle = Math.PI / 2;
    light.decay = 0.5;

    return (
        <group dispose={null}>
            <group>
                <primitive object={light} position={[0, 260, 670]} />
                <primitive object={light.target} position={[0, 270, 650]} />
                <group name="head2" position={[0, 260, 650]}>
                    <mesh
                        ref={ref}
                        name="head2-Mat2"
                        castShadow
                        receiveShadow
                        geometry={nodes["head2-Mat2"].geometry}
                        material={nodes["head2-Mat2"].material}
                    />
                    <mesh
                        name="head2-Mat1"
                        castShadow
                        receiveShadow
                        geometry={nodes["head2-Mat1"].geometry}
                        material={materials["Mat.1"]}
                    />
                    <mesh
                        name="head2-Mat2_1"
                        castShadow
                        receiveShadow
                        geometry={nodes["head2-Mat2_1"].geometry}
                        material={nodes["head2-Mat2_1"].material}
                    />
                    <mesh
                        name="head2-Mat2_2"
                        castShadow
                        receiveShadow
                        geometry={nodes["head2-Mat2_2"].geometry}
                        material={nodes["head2-Mat2_2"].material}
                    />
                    <mesh
                        name="head2-Mat"
                        castShadow
                        receiveShadow
                        geometry={nodes["head2-Mat"].geometry}
                        material={materials.Mat}
                    />
                    <mesh
                        name="head2-Mat4"
                        castShadow
                        receiveShadow
                        geometry={nodes["head2-Mat4"].geometry}
                        material={materials["Mat.4"]}
                    />
                </group>
            </group>
        </group>
    );
}

export function Snacks() {
    const group = useRef();
    const { nodes, materials } = useGLTF("/Models/SnackSection.gltf");
    const light = useMemo(() => new THREE.SpotLight(0xffffff), [])
    light.castShadow = true;
    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;
    light.distance = 400;
    light.intensity = 5;
    light.angle = Math.PI / 2;
    light.decay = 0.5;
    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])
    return (
        <group ref={group} dispose={null} position={[-125, -10, 300]}
            onClick={() => window.location.href = "https://kamaladisa.com/HTTCIS"}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            scale={1.5}
        >
            <primitive object={light} position={[0, 0, 10]} />
            <primitive object={light.target} position={[0, 0, 0]} />
            <group position={[28.6, 19.71, 0]}>
                <group position={[5.05, 1.76, 0]} rotation={[0, 0, -0.21]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Straw2-UniformWhite"].geometry}
                        material={nodes["Straw2-UniformWhite"].material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Straw2-RedShadow3"].geometry}
                        material={nodes["Straw2-RedShadow3"].material}
                    />
                </group>
                <group position={[1.28, -2.58, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["NewCup2-UniformWhite"].geometry}
                        material={nodes["NewCup2-UniformWhite"].material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["NewCup2-Blue"].geometry}
                        material={nodes["NewCup2-Blue"].material}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.S1.geometry}
                    material={nodes.S1.material}
                    position={[4.89, -14.38, 2.89]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.PlayTheGame2.geometry}
                    material={nodes.PlayTheGame2.material}
                    position={[1.28, -8.82, 8.44]}
                />
            </group>
            <group position={[6.41, 30.38, 0]}>
                <group position={[-6.41, -11.89, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Bucket-UniformWhite"].geometry}
                        material={nodes["Bucket-UniformWhite"].material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Bucket-RedShadow3"].geometry}
                        material={nodes["Bucket-RedShadow3"].material}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.BuyATote.geometry}
                    material={materials.Mat}
                    position={[-6.41, -10.51, 19.47]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.popcorn2.geometry}
                    material={materials.Popcorn}
                    position={[6.41, 11.89, 0]}
                />
            </group>
            <group position={[-32.05, 19.71, 0]}>
                <group position={[-1.28, 2.58, 0]} rotation={[0, 0, 0.3]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Straw1-UniformWhite"].geometry}
                        material={nodes["Straw1-UniformWhite"].material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Straw1-RedShadow3"].geometry}
                        material={nodes["Straw1-RedShadow3"].material}
                    />
                </group>
                <group position={[1.28, -2.58, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["NewCup1-UniformWhite"].geometry}
                        material={nodes["NewCup1-UniformWhite"].material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["NewCup1-Blue"].geometry}
                        material={nodes["NewCup1-Blue"].material}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.S2.geometry}
                    material={nodes.S2.material}
                    position={[4.92, -14.38, 2.89]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.PlayTheGame1.geometry}
                    material={nodes.PlayTheGame1.material}
                    position={[1.27, -8.82, 7.81]}
                />
            </group>
            <group position={[19.77, 19.45, 12.18]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Extrude3.geometry}
                    material={nodes.Extrude3.material}
                    position={[0.53, -0.04, 0.37]}
                    rotation={[-0.02, -0.05, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Extrude1.geometry}
                    material={nodes.Extrude1.material}
                    position={[-0.76, -0.05, 0.31]}
                    rotation={[-0.02, -0.05, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Purple2.geometry}
                    material={nodes.Purple2.material}
                    position={[0.23, 0.09, -0.67]}
                />
            </group>
            <group position={[-24.1, 21.11, 12.82]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Extrude2.geometry}
                    material={nodes.Extrude2.material}
                    position={[0.17, 0.21, 0.56]}
                    rotation={[-0.34, -0.62, -0.24]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Extrude.geometry}
                    material={nodes.Extrude.material}
                    position={[-0.85, 0.26, -0.23]}
                    rotation={[-0.34, -0.62, -0.24]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Purple1.geometry}
                    material={nodes.Purple1.material}
                    position={[0.68, -0.47, -0.33]}
                />
            </group>
            <group position={[-6.05, 3.4, 20.13]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Donate-NeonGreen"].geometry}
                    material={materials.NeonGreen}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Donate-RedShadow3"].geometry}
                    material={nodes["Donate-RedShadow3"].material}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pink2.geometry}
                material={nodes.Pink2.material}
                position={[13.98, 0, 23.02]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Pink1.geometry}
                material={nodes.Pink1.material}
                position={[-24.22, 0, 18.25]}
            />
        </group>
    );
}

