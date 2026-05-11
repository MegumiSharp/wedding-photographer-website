'use client';

import { useTranslations } from 'next-intl';
import { useForm, SubmitHandler } from "react-hook-form"
import { Toaster, toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import styles from './form.module.css'

type Inputs = {
  name: string
  email: string
  phone?: string
  eventLocation: string
  message: string
  _honeypot?: string
}

export default function Form() {
    const constraints = { max: 30, min: 3 }
    const t = useTranslations('contactForm');

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        if (data._honeypot) return

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    name: data.name,
                    email: data.email,
                    phone: data.phone || 'Non fornito',
                    eventLocation: data.eventLocation,
                    message: data.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            )
            toast.success("Richiesta inviata! Ti risponderemo entro 24h.");
            reset();
        }
        catch {
            toast.error("Qualcosa è andato storto. Scrivici su WhatsApp o a info@gasparrofotografia.it");
        }
    }

    return (
        <div className={styles.formContainer} id="contact-form">
            <Toaster />
            <div className={styles.module}>
                <h1 className={styles.title}>{t('title')}</h1>

                <form 
                    className={styles.form} 
                    onSubmit={handleSubmit(onSubmit)} 
                    noValidate
                    aria-label={t('title')}
                >
                    <div className={styles.fieldFrame}>
                        <div className={styles.labelFrame}>
                            <label htmlFor="name" className={styles.label}>
                                {t('fields.name.label')} <span aria-hidden="true" style={{color:"#cf5757"}}>*</span>
                            </label>
                            <span className={styles.errormsg} role="alert" aria-live="polite" id="name-error">
                                {errors.name && t('errors.name')}
                            </span>
                        </div>
                        <input
                            id="name"
                            type="text"
                            className={`${styles.field} ${errors.name ? styles.fieldError : ''}`}
                            aria-required="true"
                            aria-invalid={!!errors.name}
                            aria-describedby="name-error"
                            {...register("name", {
                                required: true,
                                minLength: constraints.min,
                                maxLength: constraints.max
                            })}
                            placeholder={t('fields.name.placeholder')}
                        />
                    </div>

                    <div className={styles.fieldFrame}>
                        <div className={styles.labelFrame}>
                            <label htmlFor="email" className={styles.label}>
                                {t('fields.email.label')} <span aria-hidden="true" style={{color:"#cf5757"}}>*</span>
                            </label>
                            <span className={styles.errormsg} role="alert" aria-live="polite" id="email-error">
                                {errors.email && t('errors.email')}
                            </span>
                        </div>
                        <input
                            id="email"
                            type="email"
                            className={`${styles.field} ${errors.email ? styles.fieldError : ''}`}
                            aria-required="true"
                            aria-invalid={!!errors.email}
                            aria-describedby="email-error"
                            {...register("email", {
                                required: true,
                                pattern: /^\S+@\S+\.\S+$/
                            })}
                            placeholder={t('fields.email.placeholder')}
                        />
                    </div>

                    <div className={styles.fieldFrame}>
                        <div className={styles.labelFrame}>
                            <label htmlFor="phone" className={styles.label}>
                                {t('fields.phone.label')}
                            </label>
                            <span className={styles.errormsg} aria-hidden="true" id="phone-error" />
                        </div>
                        <input
                            id="phone"
                            type="tel"
                            inputMode="numeric"
                            className={styles.field}
                            aria-describedby="phone-error"
                            {...register("phone", {
                                pattern: /^[0-9+\s]*$/
                            })}
                            onInput={(e) => {
                                e.currentTarget.value = e.currentTarget.value.replace(/[^0-9+]/g, '');
                            }}
                            placeholder={t('fields.phone.placeholder')}
                        />
                    </div>

                    <div className={styles.fieldFrame}>
                        <div className={styles.labelFrame}>
                            <label htmlFor="eventLocation" className={styles.label}>
                                {t('fields.eventLocation.label')} <span aria-hidden="true" style={{color:"#cf5757"}}>*</span>
                            </label>
                            <span className={styles.errormsg} role="alert" aria-live="polite" id="eventLocation-error">
                                {errors.eventLocation && t('errors.eventLocation')}
                            </span>
                        </div>
                        <input
                            id="eventLocation"
                            type="text"
                            className={`${styles.field} ${errors.eventLocation ? styles.fieldError : ''}`}
                            aria-required="true"
                            aria-invalid={!!errors.eventLocation}
                            aria-describedby="eventLocation-error"
                            {...register("eventLocation", {
                                required: true,
                                minLength: constraints.min,
                                maxLength: constraints.max
                            })}
                            placeholder={t('fields.eventLocation.placeholder')}
                        />
                    </div>

                    <div className={`${styles.fieldFrame} ${styles.message}`}>
                        <div className={styles.labelFrame}>
                            <label htmlFor="message" className={styles.label}>
                                {t('fields.message.label')}
                            </label>
                            <span className={styles.errormsg} role="alert" aria-live="polite" id="message-error">
                                {errors.message && t('errors.message')}
                            </span>
                        </div>
                        <textarea
                            id="message"
                            rows={5}
                            className={`${styles.field} ${errors.message ? styles.fieldError : ''}`}
                            aria-invalid={!!errors.message}
                            aria-describedby="message-error"
                            {...register("message", {
                                required: true,
                                minLength: constraints.min
                            })}
                            placeholder={t('fields.message.placeholder')}
                        />
                    </div>

                    {/* Honeypot anti-spam */}
                    <div aria-hidden="true" style={{display: 'none'}}>
                        <input
                            type="text"
                            tabIndex={-1}
                            autoComplete="off"
                            {...register("_honeypot")}
                        />
                    </div>

                    <button
                        type="submit"
                        className={`${styles.btn} ${isSubmitting ? styles.submitting : ''}`}
                        disabled={isSubmitting}
                        aria-busy={isSubmitting}
                    >
                        {isSubmitting ? t('loading') : t('submitBtn')}
                    </button>

                </form>

                <p className={styles.response}>
                    {t('responseNote')}{' '}
                    <a 
                        href={t('responseNoteLinkHref')} 
                        className={styles.highlight}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Contattaci su WhatsApp"
                    >
                        {t('responseNoteLink')}
                    </a>.
                </p>
            </div>
        </div>
    )
}