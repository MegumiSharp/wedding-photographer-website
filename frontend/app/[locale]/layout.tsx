import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from '../components/header/header';
import PageTransition from '../components/layout/PageTransition';
import { SpeedInsights } from "@vercel/speed-insights/next"
import ScrollToTop from '../components/layout/ScrollToTop';
import Footer from '../components/footer/footer';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header />
      <ScrollToTop />
      <PageTransition>
        {children}
      </PageTransition>
      <Footer/>
      <SpeedInsights />
    </NextIntlClientProvider>
  )
}