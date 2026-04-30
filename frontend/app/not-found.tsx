'use client'

import Link from 'next/link'
import Image from 'next/image'
import styles from './not-found.module.css'

export default function NotFound() {
    return (
        <div className={styles.page}>
            <div className={styles.bgImage} aria-hidden="true" />

            <div className={styles.content}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image
                            src="/logo/Gasparro.png"
                            alt="Fotografia Gasparro"
                            width={608}
                            height={190}
                            priority
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Link>
                </div>

                <div className={styles.dividerTop} />

                <h1 className={styles.number}>404</h1>

                <div className={styles.ornament} aria-hidden="true">
                    <span />
                    <div className={styles.diamond} />
                    <span />
                </div>

                <h2 className={styles.title}>
                    Questa pagina è andata fuori fuoco.
                </h2>

                <p className={styles.description}>
                    La pagina che stai cercando non esiste, è stata spostata o il link non è corretto.
                </p>

                <p className={styles.descriptionEn}>
                    The page you are looking for does not exist or has been moved.
                </p>

                <Link href="/" className={styles.btn}>
                    Homepage
                </Link>

                <p className={styles.logoText}>gasparro · fotografia</p>
            </div>
        </div>
    );
}