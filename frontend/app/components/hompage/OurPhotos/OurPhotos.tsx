'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

import { SwirlTitleSVG, CornerSVG } from '../../icons/Icons'
import styles from './OurPhotos.module.css'

const images = [
    { src: '/images/carosello/2.webp',  alt: 'Immagine Carosello 2'  },
    { src: '/images/carosello/3.webp',  alt: 'Immagine Carosello 3'  },
    { src: '/images/carosello/4.webp',  alt: 'Immagine Carosello 4'  },
    { src: '/images/carosello/5.webp',  alt: 'Immagine Carosello 5'  },
    { src: '/images/carosello/6.webp',  alt: 'Immagine Carosello 6'  },
    { src: '/images/carosello/7.webp',  alt: 'Immagine Carosello 7'  },
    { src: '/images/carosello/8.webp',  alt: 'Immagine Carosello 8'  },
    { src: '/images/carosello/9.webp',  alt: 'Immagine Carosello 9'  },
    { src: '/images/carosello/10.webp', alt: 'Immagine Carosello 10' },
    { src: '/images/carosello/11.webp', alt: 'Immagine Carosello 11' },
    { src: '/images/carosello/12.webp', alt: 'Immagine Carosello 12' },
    { src: '/images/carosello/14.webp', alt: 'Immagine Carosello 14' },
    { src: '/images/carosello/15.webp', alt: 'Immagine Carosello 15' },
]

export default function OurPhotos(){

    const [emblaRef] = useEmblaCarousel(
        {loop: true, dragFree: true, align: 'start'},
        [AutoScroll({speed: 0.7, stopOnInteraction: false, stopOnMouseEnter: false})]
    );

    const t = useTranslations('gallerySection');
    const locale = useLocale();

    return (
        <div className={styles.ourPhotosContainer}>

            <div className={styles.ourPhotoTitle}>
                <SwirlTitleSVG rotate={true}/>
                <h2>{t("title")}</h2>
                <SwirlTitleSVG/>
            </div>

            <div className={styles.ourPhotoMainContainer}>
                <Image
                    src='/images/OurPhotosMosaic.png'
                    alt= {'lello'}
                    width={300}
                    height={200}
                    className={styles.photoMosaic}
                    quality={75}
                />
                <div className={styles.textContainer}>
                    <CornerSVG width={80} className={styles.cornerBL}/>
                    <CornerSVG width={80} className={styles.cornerBR}/>
                    <CornerSVG width={80} className={styles.cornerTL}/>
                    <CornerSVG width={80} className={styles.cornerTR}/>

                    <div className={styles.content}>
                        <div className={styles.textFrame}>
                            <h1>
                                {t("textTitle")} {" "}
                                <span style={{color: "#D2B48C"}}> 
                                    {t("textAccent1")}{" "}
                                </span> 
                                {t("textAnd")} {" "}
                                <span style={{color: "#D2B48C"}}>
                                    {t("textAccent2")}
                                </span>
                            </h1>
                            <p className={styles.descMobile}>{t('descriptionMobile')}</p>
                            <p className={styles.desc}>{t('description')}</p>
                        </div>
                        <Link href={`/${locale}/gallery`} role="button">
                            <button>{t('cta')}</button>
                        </Link>
                    </div>
                    
                </div>
            </div>
            <div className={styles.carosello} ref= {emblaRef} aria-label='Carosello Fotografico'> 
                <div className={styles.emblaContainer}>
                    {images.map((img,index)=>(
                        <div className={styles.emblaSlide} key={index}>
                            <Image
                                src={img.src}
                                alt= {img.alt}
                                width={400}
                                height={600}
                                quality={75}
                                priority={index === 0}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}