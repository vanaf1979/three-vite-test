/*
 * Import remote dependencies
 */
import {MathUtils} from 'three';
import {useRef, useEffect} from "react";
import {useFrame} from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";

const Cube = () => {
    const group = useRef()
    const mesh = useRef()
    useFrame(({pointer}) => {
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, gsap.utils.mapRange(-1, 1, -.1, .1, pointer.x), 0.05)
        group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, gsap.utils.mapRange(-1, 1, .1, -.1, pointer.y), 0.05)
    })

    useEffect(() => {
        gsap.to(mesh.current.position, {
            duration: .4,
            ease: "strong.easeOut",
            delay: gsap.utils.random(0, 2),
            z: gsap.utils.random(-2, 2)
        })
    }, [mesh])

    return (
        <group ref={group}>
            <mesh ref={mesh} castShadow receiveShadow scale={MathUtils.randFloat(.2, .6)} position={[MathUtils.randFloat(-8, 8), MathUtils.randFloat(-3, 3), -25]} rotation={[MathUtils.degToRad(15), MathUtils.degToRad(0), 0]}>
                <boxGeometry attach="geometry" args={[MathUtils.randFloat(.3, 1), .05, 7]}/>
                <meshStandardMaterial attach="material" color={`hsl(0, 0%, 100%)`} metalness={0} roughness={1}/>
            </mesh>
        </group>
    );
};

export default Cube