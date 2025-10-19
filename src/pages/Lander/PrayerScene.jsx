import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const PrayerScene = ({ position }) => {
  function PrayerModel() {
    const path = `/models/${position}.glb`;
    const { scene } = useGLTF(path);
    return <primitive object={scene} scale={2.1} position={[0, -1, 0]} />;
  }
  return (
    <div>
      <Canvas style={{ height: '80vh', background: '#c0c0bf' }}>
        <boxGeometry />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <PrayerModel />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default PrayerScene;
