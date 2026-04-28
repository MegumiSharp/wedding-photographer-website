import Link from 'next/link'

export default function NotFound() {
    return (
        <div>
            <h1>404 - Pagina non trovata</h1>
            <p>La pagina che cerchi non esiste.</p>
            <Link href="/">Torna alla home</Link>
        </div>
    )
}