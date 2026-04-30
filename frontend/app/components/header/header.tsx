'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import styles from './header.module.css';


export default function Header() {
    const t = useTranslations('navigation');
    const locale = useLocale();
    const pathname = usePathname();
    const [showNavbar, setShowNavbar] = useState(false);

    const [scrolled,setScrolled] = useState(false);
    const threshold = 80;

    useEffect(() => {
        const handler = () => {
            // Se desktop → sempre false, se mobile → controlla scroll
            setScrolled(window.innerWidth < 1024 && window.scrollY > threshold)
        }

        window.addEventListener('scroll', handler, { passive: true })
        window.addEventListener('resize', handler, { passive: true })

        return () => {
            window.removeEventListener('scroll', handler)
            window.removeEventListener('resize', handler)
        }
    }, [threshold])

    useEffect(() => {
        if (showNavbar) {
            document.body.style.overflow = 'hidden'
            document.body.style.position = 'fixed'
            document.body.style.width = '100%'
        } else {
            document.body.style.overflow = ''
            document.body.style.position = ''
            document.body.style.width = ''
        }

        return () => {
            document.body.style.overflow = ''
            document.body.style.position = ''
            document.body.style.width = ''
        }
    }, [showNavbar])

    const isActive = (href: string) => pathname === href;

    const navLinks = [
        { href: `/${locale}`,          label: t('home') },
        { href: `/${locale}/about`,    label: t('about') },
        { href: `/${locale}/gallery`,  label: t('gallery') },
        { href: `/${locale}/video`,    label: t('video') },
        { href: `/${locale}/contact`,  label: t('contact') },
    ];

    return (
        <header role="banner" className={`${styles.header}  ${scrolled ? styles.scrolled : ""}`}>

            {/* LOGO */}
            <div className={styles.logo}>
                <Link href={`/${locale}`} aria-label={t('logoAriaLabel')}>
                    <Image
                        src="/logo/Gasparro.png"
                        alt={t('logoAlt')}
                        width={608}
                        height={190}
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
                    aria-label={showNavbar ? 'Chiudi menu' : 'Apri menu'}
                    aria-expanded={showNavbar}
                >
                    <svg className={styles.hamburgerIcon}
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
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={isActive(link.href) ? styles.activeMobile : ''}
                                    aria-current={isActive(link.href) ? 'page' : undefined}
                                    onClick={() => setShowNavbar(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        <div className={styles.mobileUtilities}>
                            <div className={styles.mobileLang} role="group" aria-label="Selezione lingua">
                                <Link
                                    href="/en"
                                    lang="en"
                                    className={locale === 'en' ? styles.activeLang : ''}
                                    onClick={() => setShowNavbar(false)}
                                >
                                    English
                                </Link>
                                <span aria-hidden="true">|</span>
                                <Link
                                    href="/it"
                                    lang="it"
                                    className={locale === 'it' ? styles.activeLang : ''}
                                    onClick={() => setShowNavbar(false)}
                                >
                                    Italiano
                                </Link>
                            </div>
                            <Link
                                href={`/${locale}/contact`}
                                className={styles.mobileBtn}
                                onClick={() => setShowNavbar(false)}
                            >
                                {t('contactBtn')}
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            {/* NAV DESKTOP */}
            <nav className={styles.menuContainer} role="navigation" aria-label="Menu principale">
                <div className={styles.menu}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={isActive(link.href) ? styles.active : ''}
                            aria-current={isActive(link.href) ? 'page' : undefined}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </nav>

            <div className={styles.utilities}>
                <div className={styles.utilitiesWrapper}>
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

                    

                    
                    <Link href={`/${locale}/contact`}  role="button">
                        <button className={styles.ctaBtn}>
                            {t('contactBtn')}
                        </button>
                    </Link>
                </div>
            </div>
            

        </header>
    );
}