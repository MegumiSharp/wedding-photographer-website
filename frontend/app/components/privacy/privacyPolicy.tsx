import styles from './privacyPolicy.module.css'

import { SwirlTitleSVG, CornerSVG } from '../icons/Icons'
import { useTranslations } from 'next-intl'

export default function PrivacyPolicy(){

    const t = useTranslations('privacyPolicy')

    return(
        <div className={styles.textContainer}>
            <div className={styles.topCorners}>
                <CornerSVG width={80} className={styles.cornerRight}/>
                <CornerSVG width={80} className={styles.cornerLeft}/>
            </div>

            <div className={styles.subcontainer}>
                <div className={styles.ourPhotoTitle}>
                        <SwirlTitleSVG rotate={true}/>
                    <h2>{t('title')}</h2>
                    <SwirlTitleSVG/>
                </div>

                <div className={styles.content}>
                    <div className={styles.sectionsContainer}>
                        <p className={styles.policyText}>
                            {t('intro1')}
                            <a href={t('linkHref')} className={styles.highlight}>{t('link')}</a>
                            {t('intro2')}
                            <a href={t('linkHref')} className={styles.highlight}>{t('link')}</a>
                            {t('intro3')}
                            <a href={t('linkHref')} className={styles.highlight}>{t('link')}</a>
                            {t('intro4')}
                        </p>
                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('section1Title')}</h2>
                            <p className={styles.text}>{t('section1Text')}</p>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('section2Title')}</h2>
                            <p className={styles.text}>{t('section2Text')}</p>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('section3Title')}</h2>
                            <p className={styles.text}>{t('section3Text')}</p>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('section4Title')}</h2>
                            <p className={styles.text}>{t('section4Text')}</p>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('section5Title')}</h2>
                            <p className={styles.text}>{t('section5Text')}</p>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('section6Title')}</h2>
                            <p className={styles.text}>{t('section6Text')}</p>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('section7Title')}</h2>
                            <p className={styles.text}>{t('section7Text')}</p>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('section8Title')}</h2>
                            <p className={styles.text}>{t('section8Text')}</p>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('section9Title')}</h2>
                            <p className={styles.text}>{t('section9Text')}</p>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('section10Title')}</h2>
                            <p className={styles.text}>{t('section10Text')}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={styles.bottomCorners}>
                <CornerSVG width={80} className={styles.cornerBRight}/>
                <CornerSVG width={80} className={styles.cornerBLeft}/>
            </div>
        </div>
    )
}

