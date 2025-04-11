import Footer from '@/app/components/Footer/Footer';

import { routing } from '@/i18n/routing';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import './globals.scss';
import Header from "@/app/components/Header/Header";
import ScrollToTop from "@/app/components/ui/scrollToTop/ScrollToTop";
const inter = Inter({ subsets: ['latin'] });

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: 'en' | 'de'; };
}) {
  // @ts-ignore
  const { locale }: 'en' | 'de' = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={` ${inter.className}`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
            {children}
          <Footer />
        </NextIntlClientProvider>
        <ScrollToTop />
      </body>
    </html>
  );
}
