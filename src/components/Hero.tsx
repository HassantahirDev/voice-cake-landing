'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative hero-bg-animated">
      <div className="absolute inset-0 opacity-80">
        <div 
          className="h-full w-full bg-cover bg-center" 
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,0.55)),url("/images/hero-background.jpg")'
          }}
        />
      </div>
      
      {/* Floating particles */}
      <div className="hero-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      <div className="relative mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16 xl:px-10 py-20 md:py-28">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="hero-heading">
            {t('hero.title')}
          </h1>
          <p className="mt-3 text-white/90 text-base md:text-lg hero-content">
            {t('hero.subtitle')}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 hero-buttons">
            <a href="#pricing" className="btn-base btn-primary">{t('header.buttons.get_started')}</a>
            <a 
              href="https://app.voicecake.io/auth/signin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-base btn-secondary"
            >
              {t('header.buttons.request_demo')}
            </a>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-[#09ae9b]" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
              <span>{t('hero.benefits.no_credit_card')}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-[#09ae9b]" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
              <span>{t('hero.benefits.five_min_setup')}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-[#09ae9b]" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
              <span>{t('hero.benefits.free_trial')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
