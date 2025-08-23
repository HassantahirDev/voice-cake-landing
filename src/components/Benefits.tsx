'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Benefits() {
  const { t } = useLanguage();

  return (
    <section id="benefits" className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16 xl:px-10 py-10">
      <h2 className="text-[22px] font-black heading-font">{t('benefits.title')}</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="card">
          <div className="icon-chip">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="currentColor" viewBox="0 0 256 256">
              <path d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-28,16v24H120V152ZM80,164a12,12,0,0,1,12-12h12v24H92A12,12,0,0,1,80,164Zm84,12H152V152h12a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z"></path>
            </svg>
          </div>
          <h3 className="mt-3 text-base font-bold heading-font">{t('benefits.cards.ai_conversations.title')}</h3>
          <p className="text-[#90cbc4] text-sm">{t('benefits.cards.ai_conversations.description')}</p>
        </div>
        <div className="card">
          <div className="icon-chip">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="currentColor" viewBox="0 0 256 256">
              <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z"></path>
            </svg>
          </div>
          <h3 className="mt-3 text-base font-bold heading-font">{t('benefits.cards.integrations.title')}</h3>
          <p className="text-[#90cbc4] text-sm">{t('benefits.cards.integrations.description')}</p>
        </div>
        <div className="card">
          <div className="icon-chip">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="currentColor" viewBox="0 0 256 256">
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
            </svg>
          </div>
          <h3 className="mt-3 text-base font-bold heading-font">{t('benefits.cards.availability.title')}</h3>
          <p className="text-[#90cbc4] text-sm">{t('benefits.cards.availability.description')}</p>
        </div>
      </div>
    </section>
  );
}
