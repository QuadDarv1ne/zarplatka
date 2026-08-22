import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import { SiteHeader } from "@/components/rgex/SiteHeader";
import { SiteFooter } from "@/components/rgex/SiteFooter";
import { BackToTop } from "@/components/rgex/BackToTop";
import { ScrollProgress } from "@/components/rgex/ScrollProgress";
import { JsonLd } from "@/components/rgex/JsonLd";
import { CookieBanner } from "@/components/rgex/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Zarplatka — Статистика зарплат, цены и открытые данные",
    template: "%s | Zarplatka",
  },
  description:
    "Средние зарплаты по странам мира и регионам России. Рейтинги, цены, население, рынок труда и открытые данные.",
  keywords: [
    "зарплаты",
    "зарплата",
    "Россия",
    "статистика",
    "рейтинги",
    "средняя зарплата",
    "открытые данные",
    "МРОТ",
    "рынок труда",
    "профессии",
  ],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Zarplatka",
    title: "Zarplatka — Статистика зарплат и открытые данные",
    description:
      "Средние зарплаты по странам мира и регионам России. Рейтинги, цены, население, рынок труда.",
    images: [
      {
        url: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
        width: 1200,
        height: 630,
        alt: "Zarplatka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zarplatka — Статистика зарплат",
    description: "Открытые данные о зарплатах, ценах и рынке труда.",
  },
  alternates: {
    canonical: "https://zarplatka.ru/",
  },
  verification: {
    other: {
      'yandex-verification': 'your-yandex-verification-code',
      'google-site-verification': 'your-google-verification-code',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col scroll-smooth`}
      >
        <JsonLd />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <BackToTop />
          <CookieBanner />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
