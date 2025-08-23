'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#102321]/70 border-b border-[#224944]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16 xl:px-10">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="flex-shrink-0">
                <Image 
                  src="/images/voice-cake-logo-gradient 1.png" 
                  alt="VoiceCake.io - AI Voice Automation Platform Logo" 
                  width={32} 
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <h2 className="text-white text-sm font-bold tracking-[1px] font-roboto">voicecake.io</h2>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-9" id="header-nav">
            <a className="text-white/90 text-sm font-bold hover:text-white" href="#benefits">{t('header.nav.product')}</a>
            <a className="text-white/90 text-sm font-bold hover:text-white" href="#features">{t('header.nav.features')}</a>
            <a className="text-white/90 text-sm font-bold hover:text-white" href="#pricing">{t('header.nav.pricing')}</a>
            <a className="text-white/90 text-sm font-bold hover:text-white" href="#resources">{t('header.nav.resources')}</a>
          </nav>
          
          {/* Language Switcher - Visible on all devices */}
          <div className="flex items-center gap-2">
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'en' | 'es' | 'fr' | 'ar')}
              className="bg-transparent text-white/90 text-sm font-bold border border-[#316862] rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-[#09ae9b]"
            >
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="fr">FR</option>
              <option value="ar">AR</option>
            </select>
          </div>
          <div className="flex gap-2">
            <a 
              href="https://www.app.voicecake.io/auth/signin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-base btn-secondary"
            >
              {t('header.buttons.request_demo')}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
