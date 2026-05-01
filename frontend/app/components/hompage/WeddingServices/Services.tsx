import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

import { SwirlTitleSVG } from '../../icons/Icons';
import styles from './Services.module.css'

const images1 = [
  { src: '/images/slidecta/column1/1.webp', alt: 'Foto 4' },
  { src: '/images/slidecta/column1/2.webp', alt: 'Foto 5' },
  { src: '/images/slidecta/column1/3.webp', alt: 'Foto 6' },
  { src: '/images/slidecta/column1/4.webp', alt: 'Foto 7' }
]

const images2 = [
  { src: '/images/slidecta/column2/1.webp', alt: 'Foto 1' },
  { src: '/images/slidecta/column2/2.webp', alt: 'Foto 2' },
  { src: '/images/slidecta/column2/3.webp', alt: 'Foto 3' },
  { src: '/images/slidecta/column2/4.webp', alt: 'Foto 4' }
]

const images3 = [
  { src: '/images/slidecta/column3/1.webp', alt: 'Foto 1' },
  { src: '/images/slidecta/column3/2.webp', alt: 'Foto 2' },
  { src: '/images/slidecta/column3/3.webp', alt: 'Foto 3' },
  { src: '/images/slidecta/column3/4.webp', alt: 'Foto 4' }
]

function Column({ images, velocity = 1, reverse = false, className }: {
  images: { src: string; alt: string }[]
  velocity?: number
  reverse?: boolean
  className?: string
}) {
  const [emblaRef] = useEmblaCarousel(
    { axis: 'y', loop: true, dragFree: false },
    [AutoScroll({ speed: velocity, direction: reverse ? 'backward' : 'forward', stopOnInteraction: false, stopOnMouseEnter: false })]
  )

  return (
    <div className={`${styles.embla} ${className ?? ''}`} ref={emblaRef}>
      <div className={styles.emblaContainer}>
        {images.map((img, index) => (
          <div className={styles.emblaSlide} key={index}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="33vw"
              className={styles.emblaImage}
            />
          </div>
        ))}
      </div>
    </div>
  )
}


export default function Services() {
    const t = useTranslations('services');
    const f = useTranslations('finalSection');

    const locale = useLocale();
    
    return (
        <section className={styles.servicesContainer} aria-label={t('ariaLabel')}>
            <div className={styles.servicesTitle}>
                <SwirlTitleSVG rotate={true} />
                <h2>{t('title')}</h2>
                <SwirlTitleSVG />
            </div>

            <div className={styles.servicesFrame} role="group" aria-label={t('ariaLabel')}>
                <article className={styles.serviceCard}>
                <Image
                    src="/svgs/servicesWedding.svg"
                    alt={t('weddings.title')}
                    width={100}
                    height={100}
                    className={styles.serviceImage}
                />
                <h3>{t('weddings.title')}</h3>
                <p>{t('weddings.description')}</p>
                </article>

                <article className={styles.serviceCard}>
                <Image
                    src="/svgs/servicesMaternity.svg"
                    alt={t('maternity.title')}
                    width={100}
                    height={100}
                    className={styles.serviceImage}
                />
                <h3>{t('maternity.title')}</h3>
                <p>{t('maternity.description')}</p>
                </article>

                <article className={styles.serviceCard}>
                <Image
                    src="/svgs/servicesNewborn.svg"
                    alt={t('newborn.title')}
                    width={100}
                    height={100}
                    className={styles.serviceImage}
                />
                <h3>{t('newborn.title')}</h3>
                <p>{t('newborn.description')}</p>
                </article>
            </div>

            <section className={styles.gallerySection}>
                <div className={styles.gallery}>
                    <Column images={images1} velocity={0.5} className={styles.mobile} />
                    <Column images={images2} velocity={0.3} reverse={true} />
                    <Column images={images3} velocity={0.5} className={styles.mobile}/>
                </div>

                <div className={styles.overlay}>
                    <p>{f('title')} <span style={{color: "#D2B48C"}}>{f('titleAccent')}</span></p>
                    <span className={styles.subs}>{f('subtitle')}</span>
                    <Link href={`/${locale}/contact`} role="button"> <button>{f('cta')}</button> </Link>                 
                </div>

            </section>
        </section>
    );
}