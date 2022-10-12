/*
 * Import remote dependencies
 */
import * as THREE from 'three'
import react, {useRef} from 'react';
import {useFrame} from '@react-three/fiber'

const PointLight = (props) => {
    const light = useRef()
    useFrame(({pointer}) => {
        light.current.rotation.y = THREE.MathUtils.lerp(light.current.rotation.y, pointer.x * (Math.PI / 5), 0.05)
        light.current.rotation.x = THREE.MathUtils.lerp(light.current.rotation.x, (1 - pointer.y) * (Math.PI / 10), 0.05)
    })

    return (
        <group ref={light}>
            <pointLight castShadow shadow-mapSize={[2048, 2048]} intensity={1} args={[`hsl(230, 30%, 50%)`, 1, 100]} position={[0, 5, 15]}/>
        </group>
    );
};

export default PointLight