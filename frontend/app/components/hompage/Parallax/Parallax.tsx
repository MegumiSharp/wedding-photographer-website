'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRef } from 'react';

import styles from './Parallax.module.css';
import parallaxImage from '@/public/images/landing_page_hero_section.webp';

export default function Parallax() {
    const locale = useLocale();
    const parallaxRef = useRef<HTMLDivElement>(null); // ✅ single ref, typed
    const parText = useTranslations('parallax');

    const { scrollYProgress } = useScroll({
        target: parallaxRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

    return (
            <div ref={parallaxRef} className={styles.parallaxContainer}>
                <motion.div
                    style={{
                        y,
                        position: 'absolute',
                        width: '100%',
                        height: '130%',
                        top: '-15%',
                        left: 0,
                        willChange: 'transform',
                    }}
                >
                    <Image
                        src={parallaxImage}
                        alt="Matrimonio"
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="100vw"
                        priority
                    />
                </motion.div>

                <div className={styles.overlay} />

                <div className={styles.parallaxContent}>
                    <p className={styles.parTextH1}>
                        {parText('line1')} <span style={{ color: "var(--color-accent)" }}>{parText('accent1')}</span><br />
                        {parText('line2')} <span style={{ color: "var(--color-accent)" }}>{parText('accent2')}</span><br />
                        {parText('line3')} <span style={{ color: "var(--color-accent)" }}>{parText('accent3')}</span><br />
                    </p>
                    <p className={styles.parTextSubText}>
                        {parText('description')}
                    </p>
                    <Link href={`/${locale}/contact`} role="button">
                        <button>{parText('cta')}</button>
                    </Link>
                </div>
            </div>
    );
}