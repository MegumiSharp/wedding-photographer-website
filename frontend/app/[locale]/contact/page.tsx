import HeroContact from "@/app/components/contact/HeroSection/HeroContact"
import Form from "@/app/components/contact/Form/form"
import styles from './page.module.css'

export default function Contact(){

    return (
        <div className={styles.mainSection}>
            <HeroContact/>
            <Form/>
        </div>
    )
}