import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Script from "next/script"
import "./globals.css"

export const metadata: Metadata = {
  title: "상품권 재테크 · 컨텐츠 이용료 매입 전문 | 빠르고 안전한 서비스",
  description:
    "구글 기프트카드, 컬쳐랜드, 도서상품권, 스타벅스, 백화점 상품권까지! 빠르고 안전한 상품권 매입 서비스. 최고 시세율 보장.",
  keywords:
    "상품권 매입, 상품권 재테크, 구글 기프트카드, 컬쳐랜드, 도서상품권, 롯데상품권, 신세계상품권, 스타벅스 기프티콘, 컨텐츠 이용료",
  generator: "v0.app",
  openGraph: {
    title: "상품권 매입 · 재테크 전문",
    description: "빠르고 안전한 상품권 매입 서비스",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4TCLTC8546"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4TCLTC8546');
          `}
        </Script>
    <script src="https://karrot-pixel.business.daangn.com/0.4/karrot-pixel.umd.js"></script>
    <script>
      window.karrotPixel.init('1760429918291633001');
      window.karrotPixel.track('ViewPage');
    </script> 
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
