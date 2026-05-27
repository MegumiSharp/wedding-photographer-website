import styles from './EmblaCarousel.module.css'
import useEmblaCarousel from 'embla-carousel-react'
import { useTranslations } from 'next-intl'
import { ReviewArrow } from '@/app/components/icons/Icons'

export default function EmblaCarousel(){

    const t = useTranslations('reviewsSections');

    const reviewKeys = ['review1', 'review2', 'review3', 'review4'];
    const reviews = reviewKeys.map((key, index) => ({
        id: index,
        name: t(`reviews.${key}.name`),
        date: t(`reviews.${key}.date`),
        comment: t(`reviews.${key}.comment`),
        title: t(`reviews.${key}.title`)
    }));
    
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: false})

    const nextButton = ()=>{
        if(!emblaApi) return
        emblaApi.scrollNext()
    }

    const prevButton = ()=>{
        if(!emblaApi) return
        emblaApi.scrollPrev()
    }

    return (
        <div className={styles.sectionContainer} role="region" aria-label="Recensioni dei clienti" aria-roledescription="carousel">
            <div className={styles.bigBtn}>
                <button className={styles.btn} onClick={prevButton} aria-label="Recensione precedente"> 
                    <ReviewArrow className={styles.arrow} aria-hidden="true"/>
                </button>
            </div>
            <div className={styles.embla}>
                <div className={styles.embla__viewport} ref={emblaRef}>
                    <div className={styles.embla__container} aria-live="polite">
                    {reviews.map((review) => (
                        <div className={styles.embla__slide} key={review.id} role="group" aria-roledescription="slide" aria-label={`Recensione ${review.id + 1} di ${reviews.length}`}>

                            <div className={styles.messageContainer}>
                                <div className={styles.topContainer}> 
                                    <div className={styles.nameDate}>
                                        <span>{review.name}</span> <span className={styles.date}>{review.date}</span>
                                    </div>
                                    <div className={styles.titleRating}>
                                        <span className={styles.title}>{review.title}</span>
                                        <span className={styles.rating} aria-label="Valutazione: 5 stelle su 5">⭐⭐⭐⭐⭐ 5.0</span>
                                    </div>
                                </div>
                                
                                <span>{review.comment}</span>

                                <div style={{color: "#535252"}}>
                                    Piú recensioni trovabili sul sito di 
                                    <a href='https://www.matrimonio.com/fotografo-matrimonio/gasparro-fotografia--e144526' style={{textDecoration: "underline"}} target="_blank" rel="noopener noreferrer" aria-label="Altre recensioni su matrimonio.com (apre in una nuova scheda)"> matrimonio.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <div className={styles.bigBtn}>
                <button className={styles.btn} onClick={nextButton} aria-label="Recensione successiva">
                    <ReviewArrow className={styles.arrow} flipped={true} aria-hidden="true"/> 
                </button>
            </div>
            <div className={styles.smallBtn}>
                <button className={styles.btn} onClick={prevButton} aria-label="Recensione precedente"> 
                    <ReviewArrow className={styles.arrow} aria-hidden="true"/>
                </button>
                <button className={styles.btn} onClick={nextButton} aria-label="Recensione successiva"> 
                    <ReviewArrow className={styles.arrow} flipped={true} aria-hidden="true"/> 
                </button>
            </div>
        </div>
    )
}