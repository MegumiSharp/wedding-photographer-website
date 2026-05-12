'use client'

import { useTranslations } from 'next-intl'
import styles from './FaqSection.module.css'
import { SwirlTitleSVG, FaqArrow } from '../../icons/Icons'
import { useState } from 'react'

export default function FaqSection() {

    const t = useTranslations('faqSection');

    const faqKeys = ['booking', 'engagement', 'locations', 'photogenic', 'pricing', 'video'];
    const faqs = faqKeys.map((key, index) => ({
        id: index,
        question: t(`faqs.${key}.question`),
        answer: t(`faqs.${key}.answer`),
    }));

  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  const handleClick = (index: number) => {
    setOpenIndexes(prev => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  };

  return (
    <div className={styles.faqSectionContainer}>
        {/* Titolo con swirl */}
        <div className={styles.titleRow}>
            <SwirlTitleSVG rotate={true} />
            <h2>{t("title")}</h2>
            <SwirlTitleSVG />
        </div>

        {/* Lista domande */}
        <div className={styles.faqSection}>
            {faqs.map((faq) => (
                <div className={styles.questionFrame} key={faq.id}>
                    <div
                    className={styles.arrowTitle}
                    onClick={() => handleClick(faq.id)}
                    aria-expanded={openIndexes.has(faq.id)}
                    aria-controls={`faq-answer-${faq.id}`}
                    >
                    <FaqArrow
                        width={24}
                        className={openIndexes.has(faq.id) ? styles.arrowOpen : styles.arrow}
                        color={openIndexes.has(faq.id) ? "rgba(39, 68, 63, 1)" : "#D2B48C"}
                    />
                    <span>{faq.question}</span>
                    </div>

                    <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-hidden={!openIndexes.has(faq.id)}
                    className={`${styles.ans} ${openIndexes.has(faq.id) ? styles.answerOpen : styles.answer}`}
                    >
                    <p>{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
  );
}