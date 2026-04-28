'use client'

import HeroSection from '../components/hompage/HeroSection/HeroSection';
import OurPhotos from '../components/hompage/OurPhotos/OurPhotos';
import Parallax from '../components/hompage/Parallax/Parallax';

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <Parallax/>
      <OurPhotos/>
    </main>
  )
}