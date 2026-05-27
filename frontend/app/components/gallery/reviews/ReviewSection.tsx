'use client'

import { SwirlTitleSVG } from '../../icons/Icons';
import { useTranslations } from 'next-intl';
import EmblaCarousel from './Carousell/EmblaCarousel';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import styles from './ReviewSection.module.css'

export default function ReviewSection(){

    const t = useTranslations('reviewsSections');
    const locale = useLocale();

    return (
        <motion.section 
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0}}
                viewport={{ once: true, amount: 0.3 }}
                transition={{duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }} 
            className={styles.reviewContainer} aria-labelledby="reviews-title">
            <div className={styles.mainContent}>
                <div className={styles.reviewTitle}>
                    <SwirlTitleSVG rotate={true} aria-hidden="true"/>
                    <h2 id="reviews-title">{t("title")}</h2>
                    <SwirlTitleSVG aria-hidden="true"/>
                </div>
                <div className={styles.reviewsCarousell}>
                    <EmblaCarousel/>
                </div>   
                <div className={styles.cta}>
                    {t('subtitle')}
                    <Link href={`/${locale}/contact#contact-form`} role="button">
                            <button  aria-label="Contattaci per maggiori informazioni">{t('cta')}</button>
                    </Link>    
                </div>
            </div>
        </motion.section>
    )
}