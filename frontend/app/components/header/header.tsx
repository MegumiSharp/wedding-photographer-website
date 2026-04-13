'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import styles from './header.module.css';
import { useState } from 'react';

export default function Header() {
    const t = useTranslations('navigation');
    const locale = useLocale();
    const [showNavbar, setShowNavbar] = useState(false);

    return (
        <header role="banner" className={styles.header}>
            {/* LOGO */}
            <div className={styles.logo}>
                <Link href={`/${locale}`} aria-label={t('logoAriaLabel')}>
                <Image
                    src="/logo/logo.png"
                    alt={t('logoAlt')}
                    width={608}
                    height={183}
                    priority
                    style={{ width: '100%', height: 'auto' }}
                />
                </Link>
            </div>

            {/* HAMBURGER — solo mobile */}
            <div className={styles.hamburgerContainer}>
                <button
                className={styles.hamburger}
                onClick={() => setShowNavbar(!showNavbar)}
                aria-label="Apri menu"
                aria-expanded={showNavbar}
                >
                    <svg
                        width="24"
                        height="18"
                        viewBox="0 0 24 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <line x1="0" y1="1"  x2="24" y2="1"  stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <line x1="0" y1="9"  x2="24" y2="9"  stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <line x1="0" y1="17" x2="24" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </button>

                {showNavbar && (
                <div className={styles.mobileContainer}>
                    <div className={styles.closeBtnFrame}>
                    <button onClick={() => setShowNavbar(false)} aria-label="Chiudi menu">
                        ✕
                    </button>
                    </div>

                    <nav className={styles.mobileMenu} aria-label="Menu mobile">
                    <Link href={`/${locale}`} onClick={() => setShowNavbar(false)}>Home</Link>
                    <Link href={`/${locale}/chi-siamo`} onClick={() => setShowNavbar(false)}>Chi Siamo</Link>
                    <Link href={`/${locale}/galleria`} onClick={() => setShowNavbar(false)}>Galleria</Link>
                    <Link href={`/${locale}/video`} onClick={() => setShowNavbar(false)}>Video</Link>
                    <Link href={`/${locale}/contatti`} onClick={() => setShowNavbar(false)}>Contatti</Link>
                    </nav>

                    <div className={styles.mobileUtilities}>
                    <div className={styles.mobileLang} role="group" aria-label="Selezione lingua">
                        <Link href="/en" lang="en">English</Link>
                        <span aria-hidden="true">|</span>
                        <Link href="/it" lang="it" className={styles.activeLang}>Italiano</Link>
                    </div>
                    <Link href={`/${locale}/contatti`} className={styles.mobileBtn}>
                        Contattaci
                    </Link>
                    </div>
                </div>
                )}
            </div>

            {/* NAV DESKTOP */}
            <nav  className={styles.menuContainer} role="navigation" aria-label="Menu principale">
                <div className={styles.menu}> 
                    <Link href={`/${locale}`} className={styles.active}>Home</Link>
                    <Link href={`/${locale}/chi-siamo`}>Chi Siamo</Link>
                    <Link href={`/${locale}/galleria`}>Galleria</Link>
                    <Link href={`/${locale}/video`}>Video</Link>
                    <Link href={`/${locale}/contatti`}>Contatti</Link>
                </div>
            

                <div className={styles.utilities}>
                    <div className={styles.utilitiesWrapper}>
                        <div className={styles.languageSwitch} role="group" aria-label="Selezione lingua">
                        <Link href="/en" lang="en">English</Link>
                        <span aria-hidden="true">|</span>
                        <Link href="/it" lang="it" className={styles.activeLang}>Italiano</Link>
                        </div>
                        <Link href={`/${locale}/contatti`} className={styles.btn} role="button">
                        Contattaci
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}