import ReviewSection from '@/app/components/gallery/reviews/ReviewSection'
import styles from './page.module.css'

export default function Gallery(){

    return (
        <div className={styles.mainSection}>
            <ReviewSection/>
        </div>
    )
}