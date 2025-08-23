import type { Metadata } from "next";
import { Inter, Noto_Serif, Roboto, Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageWrapper from "@/components/LanguageWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-serif",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-roboto",
});

const cairo = Cairo({
  subsets: ["latin", "arabic"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "VoiceCake.io — AI Voice Agents | Alternative to VAPI.ai, Make.com & n8n | Voice Automation Platform",
  description: "VoiceCake.io - The ultimate AI voice automation platform. Alternative to VAPI.ai, Make.com, and n8n. Create ultra-realistic voice agents with CRM, WhatsApp, SMS integrations. Free trial, no credit card required.",
  keywords: "AI voice agents, voice automation, VAPI.ai alternative, Make.com alternative, n8n alternative, voice AI platform, conversational AI, voice bots, customer service automation, CRM integration, WhatsApp automation, SMS automation, voice workflow automation, AI voice synthesis, voice agent platform, automated voice calls, voice AI solution, voice automation software, AI voice assistant, voice technology platform, voice AI integration, automated customer support, voice AI development, voice automation tools, AI voice workflow, voice agent creation, voice AI automation, conversational voice AI, voice AI platform comparison, voice automation vs VAPI, voice automation vs Make.com, voice automation vs n8n, best voice AI platform, affordable voice automation, voice AI pricing, voice automation features, AI voice agents for business, voice automation platform, voice AI competitors, voice automation alternatives",
  authors: [{ name: "VoiceCake.io" }],
  creator: "VoiceCake.io",
  publisher: "VoiceCake.io",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://voicecake.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "VoiceCake.io — AI Voice Agents | Alternative to VAPI.ai, Make.com & n8n",
    description: "Create ultra-realistic AI voice agents with automation. Alternative to VAPI.ai, Make.com, and n8n. Integrate with CRM, WhatsApp, SMS. Free trial available.",
    type: "website",
    url: "https://voicecake.io",
    siteName: "VoiceCake.io",
    locale: "en_US",
    images: [
      {
        url: "https://voicecake.io/images/voice-cake-logo-gradient.png",
        width: 1200,
        height: 630,
        alt: "VoiceCake.io - AI Voice Automation Platform",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VoiceCake.io — AI Voice Agents | Alternative to VAPI.ai, Make.com & n8n",
    description: "Create ultra-realistic AI voice agents with automation. Alternative to VAPI.ai, Make.com, and n8n. Integrate with CRM, WhatsApp, SMS. Free trial available.",
    images: ["https://voicecake.io/images/voice-cake-logo-gradient.png"],
    creator: "@voicecake_io",
    site: "@voicecake_io",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  classification: "AI Voice Automation Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSerif.variable} ${roboto.variable} ${cairo.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16" />
        <link rel="icon" href="/images/voice-cake-logo-gradient.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/images/voice-cake-logo-gradient.png" />
        <meta name="theme-color" content="#09ae9b" />
        <meta name="msapplication-TileColor" content="#09ae9b" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="application-name" content="VoiceCake.io" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="VoiceCake.io" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileImage" content="/images/voice-cake-logo-gradient.png" />
        <meta name="msapplication-TileColor" content="#09ae9b" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "VoiceCake.io",
              "description": "AI voice automation platform - alternative to VAPI.ai, Make.com, and n8n. Create ultra-realistic voice agents with CRM, WhatsApp, SMS integrations.",
              "url": "https://voicecake.io",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Free trial available"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "150"
              },
              "keywords": "AI voice agents, voice automation, VAPI.ai alternative, Make.com alternative, n8n alternative, voice AI platform, conversational AI, voice bots, customer service automation, CRM integration, WhatsApp automation, SMS automation, voice workflow automation, AI voice synthesis, voice agent platform, automated voice calls, voice AI solution, voice automation software, AI voice assistant, voice technology platform, voice AI integration, automated customer support, voice AI development, voice automation tools, AI voice workflow, voice agent creation, voice AI automation, conversational voice AI, voice AI platform comparison, voice automation vs VAPI, voice automation vs Make.com, voice automation vs n8n, best voice AI platform, affordable voice automation, voice AI pricing, voice automation features, AI voice agents for business, voice automation platform, voice AI competitors, voice automation alternatives"
            })
          }}
        />
      </head>
              <body className="bg-[#102321] group/design-root antialiased">
          <div className="relative flex min-h-screen flex-col font-roboto text-white">
            <LanguageProvider>
              <LanguageWrapper>
                {children}
              </LanguageWrapper>
            </LanguageProvider>
          </div>
        </body>
    </html>
  );
}
