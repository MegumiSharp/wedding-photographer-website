'use client'

import HeroSection from '../components/hompage/HeroSection/HeroSection';
import OurPhotos from '../components/hompage/OurPhotos/OurPhotos';
import Parallax from '../components/hompage/Parallax/Parallax';
import Services from '../components/hompage/WeddingServices/Services';
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.mainSection}>
      <HeroSection/>
      <Parallax/>
      <OurPhotos/>
      <Services/>
    </main>
  )
}