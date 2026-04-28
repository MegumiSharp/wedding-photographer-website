'use client'

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import styles from './footer.module.css';
import { usePathname } from 'next/navigation';

import { DotSvg } from '../icons/Icons';

export default function Footer (){

    const t = useTranslations('footer');
    const n = useTranslations('navigation')
    const locale =useLocale();
    const year = new Date()
    const pathname = usePathname();

    const isActive = (href: string) => pathname === href;

    const navLinks = [
        { href: `/${locale}`,          label: n('home') },
        { href: `/${locale}/about`,    label: n('about') },
        { href: `/${locale}/gallery`,  label: n('gallery') },
        { href: `/${locale}/video`,    label: n('video') },
        { href: `/${locale}/contact`,  label: n('contact') },
    ];

    return(
        <footer className={styles.footerContainer}>
            <div className={styles.infoBoxContainerMobile}>
                <a href={t('addressHref')}
                   target='_blank'
                   rel='noopener noreferrer'
                   aria-label={t('addressAriaLabel')}
                   >
                    <span className={styles.address}>{t('address')}</span>
                    <span className={styles.addressMobile}>{t('addressMobile')}</span>
                    
                </a>
                <svg width="10" height="10" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2" cy="2" r="2" fill="#27443F"/>
                </svg>

                <a  href={t('emailHref')}
                    aria-label={t('emailAriaLabel')}
                    >
                    {t('email')}
                </a>
                <svg width="10" height="10" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2" cy="2" r="2" fill="#27443F"/>
                </svg>
                <span >
                    <a  href={t('phoneHref')}
                        aria-label={t('phoneAriaLabel')}
                        className={styles.phone}
                        >
                            {t('phone')} {"|"}
                    </a>
                    <a  href={t('mobileHref')}
                        aria-label={t('mobileAriaLabel')}
                        >
                            {t('mobile')}
                    </a>
                </span>

            </div>

            <div className={styles.infoBoxContainerDesktop}>
                <div className={styles.studioInformationContainer}>
                    <h3>{t('studioTitle')}</h3>
                    <div className={styles.infoListContainer}>
                        <span className={styles.infoList}>
                            <DotSvg size={8}/>
                            <strong>{t('addressLabel')} </strong>
                            <a href={t('addressHref')}
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label={t('addressAriaLabel')}
                                style={{textDecoration: "underline"}}
                            > {t('address')}</a>
                        </span>
                        <span className={styles.infoList}>
                            <DotSvg size={8}/>
                            <strong>{t('phoneLabel')} </strong>

                            <a  href={t('phoneHref')}
                                aria-label={t('phoneAriaLabel')}
                               style={{textDecoration: "underline"}}
                            >
                                {t('phone')}
                            </a>  |
                            <strong> {t('mobileLabel')} </strong>
                            <a  href={t('mobileHref')}
                                aria-label={t('mobileAriaLabel')}
                               style={{textDecoration: "underline"}}
                            >
                                {t('mobile')}
                            </a>
                        </span>
                        <span className={styles.infoList}>
                            <DotSvg size={8}/>
                            <strong>{t('emailLabel')} </strong> 
                            <a  href={t('emailHref')}
                                aria-label={t('emailAriaLabel')}
                                style={{textDecoration: "underline"}}
                            >
                                {t('email')}
                            </a>
                        </span>
                        <span className={styles.subtext}>
                                <DotSvg size={8}/>
                                {t('hours')}
                        </span>
                    </div>
                </div>

                <nav className={styles.navigationMenuContainer}>
                    <h3>{t('menuTitle')}</h3>
                    <div className={styles.menu}>
                        {navLinks.map((link) => (
                            <div key={link.href} className={styles.group}>
                                <Link
                                    href={link.href}
                                    className={isActive(link.href) ? styles.active : ''}
                                    aria-current={isActive(link.href) ? 'page' : undefined}
                                >
                                    {link.label}
                                </Link>
                                <DotSvg size={8}/>
                            </div>
                        ))}
                        
                        <div className={styles.languageSwitch} role="group" aria-label="Selezione lingua">
                            <Link
                                href="/en"
                                lang="en"
                                data-text="English"
                                className={locale === 'en' ? styles.activeLang : ''}
                            >
                                English
                            </Link>
                            <span aria-hidden="true">|</span>
                            <Link
                                href="/it"
                                lang="it"
                                data-text="Italiano"
                                className={locale === 'it' ? styles.activeLang : ''}
                            >
                                Italiano
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
            <div className={styles.socialAndPolicy}>
                <div className={styles.copyright}>
                    <p className={styles.copyrightNormal}>&#169; Gasparro Fotografia {year.getFullYear()} {t('copyright')} | {' '}</p>
                    <p className={styles.copyrightMobile}> &#169; Gasparro Fotografia {year.getFullYear()} | {' '}</p>
                    <Link href={`/${locale}/privacy`} aria-label='Link per la pagina di privacy policy' className={styles.privacyPolicyLink}>{t('privacyLabel')}</Link>
                </div>

                <div className={styles.socialLinks} role="group" aria-label="Link ai social media">
                    <a href={t('social.instagram.href')} aria-label={t('social.instagram.ariaLabel')} target="_blank" rel="noopener noreferrer">
                        <svg width="30" height="30" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.40128 0.0412495C2.78336 0.0702791 2.36161 0.16898 1.99293 0.313713C1.6114 0.462593 1.28793 0.662067 0.9657 0.985124C0.643887 1.30818 0.445657 1.63207 0.298021 2.01401C0.154946 2.38352 0.0583195 2.80569 0.0309487 3.42402C0.00357803 4.04194 -0.00222786 4.24099 0.000675094 5.8173C0.00357805 7.3936 0.0106281 7.59142 0.040487 8.21099C0.0699313 8.82849 0.168217 9.25025 0.31295 9.61934C0.46183 10.0009 0.661305 10.3243 0.984362 10.6466C1.30742 10.9684 1.63089 11.1662 2.01408 11.3143C2.38317 11.4569 2.80576 11.5544 3.42367 11.5813C4.04159 11.6083 4.24065 11.6145 5.81695 11.6116C7.39326 11.6087 7.59149 11.6016 8.21106 11.5722C8.83063 11.5428 9.2499 11.4441 9.61899 11.2997C10.0005 11.1504 10.3244 10.9514 10.6462 10.6279C10.968 10.3044 11.1663 9.98055 11.3135 9.59819C11.4566 9.2291 11.5536 8.80651 11.5806 8.18901C11.6075 7.56944 11.6142 7.37162 11.6108 5.79491C11.6075 4.21819 11.6009 4.02079 11.5714 3.40163C11.542 2.78247 11.4437 2.36195 11.299 1.99286C11.1497 1.61133 10.9506 1.28786 10.6276 0.965633C10.3045 0.643405 9.9802 0.44559 9.59784 0.298368C9.22834 0.155294 8.80617 0.0578378 8.18825 0.0312965C7.57034 0.0047552 7.37128 -0.00229479 5.79456 0.000608168C4.21784 0.00351112 4.02044 0.0105611 3.40128 0.0404201M3.46929 10.5363C2.90321 10.5118 2.59592 10.4177 2.39105 10.3389C2.11983 10.2344 1.92658 10.1079 1.72254 9.9059C1.51851 9.70394 1.39285 9.50986 1.2871 9.23905C1.20747 9.03419 1.11168 8.7273 1.08514 8.16123C1.05652 7.54953 1.0503 7.36582 1.04698 5.81564C1.04367 4.26546 1.04947 4.08216 1.07643 3.47005C1.10048 2.90439 1.19503 2.59668 1.27383 2.39181C1.37833 2.12018 1.50441 1.92734 1.70678 1.7233C1.90916 1.51927 2.10283 1.39361 2.37363 1.28786C2.57808 1.20782 2.88538 1.11285 3.45104 1.0859C4.06315 1.05687 4.24687 1.05106 5.79663 1.04775C7.34639 1.04443 7.53052 1.05023 8.14305 1.07719C8.70871 1.10166 9.01642 1.19538 9.22087 1.27459C9.49209 1.3791 9.68535 1.50475 9.88938 1.70755C10.0934 1.91034 10.2191 2.10318 10.3252 2.37481C10.4053 2.57885 10.5002 2.88573 10.5268 3.45181C10.5558 4.06391 10.5625 4.24763 10.5654 5.79739C10.5683 7.34716 10.5629 7.53129 10.5359 8.14298C10.511 8.70906 10.4173 9.01636 10.3385 9.22164C10.234 9.49285 10.1079 9.68611 9.90514 9.89014C9.70235 10.0942 9.50909 10.2198 9.23829 10.3256C9.03384 10.4052 8.72654 10.5006 8.16129 10.5276C7.54919 10.5562 7.36547 10.5624 5.81529 10.5657C4.26512 10.569 4.0814 10.5628 3.46929 10.5363ZM8.20235 2.70326C8.20318 3.08811 8.51545 3.39955 8.9003 3.39872C9.28515 3.39789 9.5966 3.08562 9.59577 2.70077C9.59494 2.31592 9.28266 2.00448 8.89781 2.00531C8.51297 2.00613 8.20194 2.31841 8.20235 2.70326ZM2.82483 5.81191C2.82815 7.4583 4.16517 8.79034 5.81156 8.78702C7.45795 8.7837 8.79041 7.44669 8.7875 5.8003C8.78419 4.15391 7.44675 2.82145 5.80036 2.82477C4.15397 2.82809 2.82152 4.16552 2.82483 5.81191ZM3.87114 5.80983C3.86907 4.74113 4.73373 3.87273 5.80285 3.87066C6.87155 3.86859 7.73995 4.73325 7.74203 5.80237C7.7441 6.87107 6.87943 7.73947 5.81032 7.74154C4.74161 7.74362 3.87322 6.87937 3.87114 5.81066" fill="#27443F"/>
                        </svg>
                    </a>
                    <a href={t('social.facebook.href')} aria-label={t('social.facebook.ariaLabel')} target="_blank" rel="noopener noreferrer">
                        <svg width="30" height="30" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.80591 0C2.59939 0 0 2.59939 0 5.80591C0 8.52888 1.87448 10.8135 4.40337 11.441V7.58003H3.20611V5.80591H4.40337V5.0416C4.40337 3.06552 5.29748 2.14943 7.23789 2.14943C7.60574 2.14943 8.24024 2.22159 8.49985 2.29375V3.90199C8.363 3.88747 8.12495 3.88042 7.82927 3.88042C6.8771 3.88042 6.50925 4.24122 6.50925 5.17846V5.80591H8.40571L8.07975 7.58003H6.50925V11.5691C9.38401 11.222 11.6118 8.77397 11.6118 5.80591C11.6118 2.59939 9.01243 0 5.80591 0Z" fill="#27443F"/>
                        </svg>
                    </a>
                    <a href={t('social.whatsapp.href')} aria-label={t('social.whatsapp.ariaLabel')} target="_blank" rel="noopener noreferrer">
                        <svg width="30" height="30" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.87253 1.68745C8.78641 0.599667 7.34157 0.000829415 5.80259 0C2.63091 0 0.0493503 2.58114 0.0485209 5.75365C0.0481061 6.76803 0.313104 7.75794 0.81656 8.63007L0 11.6118L3.05018 10.8118C3.89037 11.2705 4.83674 11.5119 5.79969 11.5123H5.80218C8.97345 11.5123 11.555 8.93115 11.5558 5.75863C11.5562 4.2209 10.9587 2.77564 9.87212 1.68828L9.87253 1.68745ZM5.80259 10.5402H5.80052C4.94249 10.5402 4.10063 10.3092 3.36618 9.87378L3.19159 9.7701L1.38139 10.2449L1.86453 8.47994L1.7509 8.29913C1.27232 7.53773 1.01935 6.65772 1.01977 5.75407C1.02101 3.11736 3.16629 0.972075 5.80425 0.972075C7.08155 0.97249 8.28213 1.47055 9.18536 2.37462C10.0882 3.27826 10.5854 4.48009 10.5846 5.7578C10.5833 8.39493 8.43847 10.5402 5.80259 10.5402ZM8.42562 6.9588C8.28171 6.88664 7.57505 6.53911 7.44318 6.49101C7.3113 6.4429 7.2155 6.41885 7.1197 6.56316C7.02391 6.70707 6.74854 7.03095 6.66435 7.12675C6.58058 7.22296 6.4964 7.23458 6.35291 7.16242C6.209 7.09026 5.74578 6.93848 5.1967 6.44912C4.76955 6.068 4.48092 5.59731 4.39673 5.45299C4.31296 5.30909 4.38802 5.23112 4.45977 5.15979C4.52446 5.0951 4.60367 4.99184 4.67542 4.90807C4.74757 4.82429 4.77121 4.76416 4.81932 4.66836C4.86743 4.57215 4.84337 4.48838 4.80729 4.41664C4.77121 4.34448 4.48382 3.63699 4.36397 3.34918C4.24744 3.06884 4.12883 3.10699 4.0405 3.10243C3.95673 3.09828 3.86093 3.09745 3.76472 3.09745C3.66851 3.09745 3.51299 3.13312 3.38111 3.27744C3.24924 3.42134 2.87807 3.76928 2.87807 4.47677C2.87807 5.18426 3.39314 5.86811 3.4653 5.96433C3.53746 6.06054 4.47926 7.51243 5.9212 8.13532C6.26416 8.28337 6.53206 8.37212 6.74108 8.43806C7.08528 8.54754 7.3988 8.5322 7.64638 8.49529C7.92258 8.45382 8.49695 8.14735 8.6168 7.81143C8.73665 7.47552 8.73665 7.18771 8.70057 7.12758C8.66449 7.06745 8.56869 7.03137 8.42479 6.95962L8.42562 6.9588Z" fill="#27443F"/>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    )
}