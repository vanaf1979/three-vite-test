/*
 * Import remote dependencies
 */
import {Canvas} from "@react-three/fiber";
import {Cloud} from '@react-three/drei'

/*
 * Import local dependencies
 */
import Cube from "./Cube.jsx";
import PointLight from './PointLight.jsx'

const App = () => {
    return (
        <Canvas shadows alpha={true} camera={{position: [0, -1, 5]}}>
            <ambientLight intensity={.1} color={`hsl(0, 0%, 100%)`}/>
            <fog attach="fog" args={['black', 0, 5]}/>
            <PointLight/>
            <Cloud opacity={.15} speed={0.5} width={2} depth={2} segments={25}/>
            {[...Array(500)].map((_, i) => {
                return <Cube key={i}/>
            })}
        </Canvas>
    )
}

export default App
