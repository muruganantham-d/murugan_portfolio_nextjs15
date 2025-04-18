'use client'

import { Suspense } from 'react'
import { Html, OrbitControls, Preload, useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import HeroCamera from '../components/my_three/HeroCamera';
import { HackerRoom } from '../components/my_three/HackerRoom';
import { calculateSizes } from "../components/constants/index";
import { PerspectiveCamera } from '@react-three/drei';
import { Leva } from 'leva';
//
import { useMediaQuery } from 'react-responsive';
// import { Dog } from './Model'

const HomeSceneFallback = () => {

  const { progress } = useProgress();


  return (
    <Html className='flex items-center justify-center'>
      {progress.toFixed(1)}% loaded
    </Html>
  )
}

const HomeScene = () => {

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <Canvas
      // className='size-full murugan'
      className='size-full'
      camera={{
        fov: 147,
        near: 0.1,
        far: 200,
        position: [4, 3, 6],
      }}
      gl={{ antialias: true }}
      dpr={[1, 2]}
    >
      <Suspense fallback={<HomeSceneFallback />}>
        {/* <Dog position={[0, -0.9, 0]} scale={[0.67, 0.67, 0.67]} /> */}
        <Leva hidden />
        <PerspectiveCamera makeDefault position={[0, 0, 30]} />

        <HeroCamera isMobile={isMobile}>
          
<HackerRoom 
  scale={sizes.deskScale * 1.4}  
  position={[sizes.deskPosition[0], sizes.deskPosition[1] + 1, sizes.deskPosition[2]]}  
  rotation={[0.1, -Math.PI, 0]} 
/>



            </HeroCamera>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
        <OrbitControls autoRotate autoRotateSpeed={0.5} />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default HomeScene
