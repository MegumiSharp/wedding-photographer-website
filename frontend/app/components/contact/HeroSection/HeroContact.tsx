import Image from 'next/image'
import { useTranslations } from 'next-intl';

import styles from './HeroContact.module.css'
import { DotSvg, CornerSVG } from "@/app/components/icons/Icons"


export default function HeroContact() {

    const t = useTranslations('footer');
    const c = useTranslations('contactPage');

    return (
        <section
            className={styles.heroSectionContainer}
            aria-labelledby="contact-title"
        >
            {/* Decorazione angolo sinistro */}
            <div className={styles.leftCornerFrame} aria-hidden="true">
                <CornerSVG width={80} height={100} className={styles.left} />
            </div>

            <div className={styles.contentContainer}>
                <div className={styles.content}>
                    <div className={styles.textContent}>

                        {/* TITOLO + SOTTOTITOLO */}
                        <div className={styles.title}>
                            <h1 id="contact-title">{c('title')}</h1>
                            <p>
                                {c('subtext1')}
                                {' '}
                                <span style={{ color: '#D2B48C' }}>{c('subtext2')}</span>
                                {' '}
                                {c('subtext3')}
                            </p>
                        </div>

                        {/* INFO STUDIO */}
                        <address
                            className={styles.infoBoxContainerDesktop}
                            aria-label={c('studioInfoLabel')}
                        >
                            <div className={styles.studioInformationContainer}>
                                <ul className={styles.infoListContainer} role="list">

                                    <li className={styles.infoList}>
                                        <DotSvg size={8} aria-hidden="true" />
                                        <strong>{t('addressLabel')}</strong>
                                        <a
                                            href={t('addressHref')}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={t('addressAriaLabel')}
                                            style={{ textDecoration: 'underline' }}
                                        >
                                            {t('address')}
                                        </a>
                                    </li>

                                    <li className={styles.infoList}>
                                        <DotSvg size={8} aria-hidden="true" />
                                        <strong>{t('phoneLabel')}</strong>
                                        <a
                                            href={t('phoneHref')}
                                            aria-label={t('phoneAriaLabel')}
                                            style={{ textDecoration: 'underline' }}
                                        >
                                            {t('phone')}
                                        </a>
                                        <span aria-hidden="true">|</span>
                                        <strong>{t('mobileLabel')}</strong>
                                        <a
                                            href={t('mobileHref')}
                                            aria-label={t('mobileAriaLabel')}
                                            style={{ textDecoration: 'underline' }}
                                        >
                                            {t('mobile')}
                                        </a>
                                    </li>

                                    <li className={styles.infoList}>
                                        <DotSvg size={8} aria-hidden="true" />
                                        <strong>{t('emailLabel')}</strong>
                                        <a
                                            href={t('emailHref')}
                                            aria-label={t('emailAriaLabel')}
                                            style={{ textDecoration: 'underline' }}
                                        >
                                            {t('email')}
                                        </a>
                                    </li>

                                    <li className={styles.subtext}>
                                        <DotSvg size={8} aria-hidden="true" />
                                        <span>{t('hours')}</span>
                                    </li>

                                </ul>
                            </div>
                        </address>

                    </div>
                </div>

                {/* FOTO */}
                <Image
                    src="/images/contactPhoto.webp"
                    alt={c('photoAlt')}
                    width={1920}
                    height={1080}
                    className={styles.photo}
                    loading="eager"
                    priority
                />
            </div>

            {/* Decorazione angolo destro */}
            <div className={styles.rightCornerFrame} aria-hidden="true">
                <CornerSVG width={80} height={100} className={styles.right} />
            </div>
        </section>
    )
}